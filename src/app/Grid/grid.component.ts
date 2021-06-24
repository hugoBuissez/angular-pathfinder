import { Component, HostListener, OnInit } from '@angular/core';
import { Cell } from '../Cell';
import { BFS } from '../Algorithms/BFS'
import { Utils } from '../Algorithms/Utils';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})

export class GridComponent implements OnInit {

  constructor() {
  }

  pathInfos: string = "";

  boardWitdh: number = 60;
  boardHeight: number = 25;
  board: Cell[][] = [];

  hasStartNode: boolean = true;
  hasEndNode: boolean = false;

  startNode: Cell; // Attribute is null if the board has not startNode yet.
  endNode: Cell; // Attribute is null if the board has not endNode yet.

  diagonals: boolean = false;
  trace: boolean = false;

  isMouseDown: boolean = false;
  isDragginStartNode: boolean = false;
  isDraggingEndNode: boolean = false;
  isErasingWalls: boolean = false;

  ngOnInit(): void {
    this.setupGrid();
  }

  onVisualise(): void {
    this.onClearPath();
    var bfs = new BFS(this.board);
    var bfsResult = bfs.execute(this.startNode, this.endNode, this.diagonals, this.trace);

    if (bfsResult == null) { this.pathInfos = "No path found !"; return }
    var fatherPath = bfsResult[0];

    this.pathInfos = "Found path of length " + (fatherPath.length - 1);

    if (this.trace)
      Utils.animateTrace(bfsResult[1], fatherPath)
    else
      Utils.animatePath(fatherPath);
  }

  onDiagonal(): void {
    this.diagonals = !this.diagonals;
  }

  onTrace(): void {
    this.trace = !this.trace;
  }

  onClearPath(): void {
    this.board.forEach(row => {
      row.map((node) => { if (node.isPath || node.isVisited) node.isPath = node.isVisited = node.animateVisited = false; })
    });
  }

  onClearWalls(): void {
    this.board.forEach(row => { row.forEach(node => { if (node.isWall) node.isWall = false; }); });
  }

  onRandomWalls(): void {
    this.onClearWalls();
    this.board.forEach((row) => {
      row.map((node) => { if (Math.floor(Math.random() * 4) == 2 && !node.isStartNode && !node.isEndNode) node.isWall = true })
    })
  }

  onMouseDownCell(cell: Cell): void {
    if (cell.isStartNode) { this.isDragginStartNode = true; }
    else if (cell.isEndNode) { this.isDraggingEndNode = true; }
    else if (cell.isWall) { this.isErasingWalls = true; cell.isWall = false }
    this.isMouseDown = true;
  }

  onMouseEnterCell(cell: Cell): void {

    if (this.isDragginStartNode) { cell.isStartNode = true; this.startNode = cell; return; }
    else if (this.isDraggingEndNode) { cell.isEndNode = true; this.endNode = cell; return; }

    else if (!this.isMouseDown || cell.isStartNode || cell.isEndNode) return;

    if (this.isErasingWalls) cell.isWall = false;
    else
      cell.isWall = true;
  }

  onMouseLeaveCell(cell: Cell): void {
    if (this.isDragginStartNode) cell.isStartNode = false;
    else if (this.isDraggingEndNode) cell.isEndNode = false;
  }

  onMouseUpCell(cell: Cell): void {
    this.isDragginStartNode = false;
    this.isDraggingEndNode = false;
    this.isErasingWalls = false;
    this.isMouseDown = false;
  }

  setupGrid(): void {
    for (let y = 0; y < this.boardHeight; y++) {
      var row: Cell[] = [];
      for (let x = 0; x < this.boardWitdh; x++) {
        row.push({
          id: this.boardWitdh * x + y,
          x: x,
          y: y,
          isStartNode: false,
          isEndNode: false,
          isVisited: false,
          animateVisited: false,
          isPath: false,
          isWall: false,
        })
      }

      this.board.push(row);
    }

    this.board[2][6].isStartNode = true;
    this.startNode = this.board[2][6];

    this.board[5][30].isEndNode = true;
    this.endNode = this.board[5][30];
  }

  handleCell(cell: Cell): void {

  }

  handleWall(cell: Cell): void {
    if (!cell.isStartNode && !cell.isEndNode)
      cell.isWall = true;
  }
}
