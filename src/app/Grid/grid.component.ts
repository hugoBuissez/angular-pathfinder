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

  boardWitdh: number = 60;
  boardHeight: number = 25;
  board: Cell[][] = [];

  hasStartNode: boolean = false;
  hasEndNode: boolean = false;

  startNode: Cell; // Attribute is null if the board has not startNode yet.
  endNode: Cell; // Attribute is null if the board has not endNode yet.

  diagonals: boolean = false;
  trace: boolean = false;

  isMouseDown: boolean = false;

  ngOnInit(): void {
    this.setupGrid();
  }

  onVisualise(): void {
    this.onClearPath();
    var bfs = new BFS(this.board);
    var fatherPath = bfs.execute(this.startNode, this.endNode, this.diagonals, this.trace);
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
      row.map((node) => { if (node.isPath || node.isVisited) node.isPath = node.isVisited = false; })
    });
  }

  onClearWalls(): void {
    this.board.forEach(row => { row.forEach(node => { if (node.isWall) node.isWall = false; }); });
  }

  onRandomWalls(): void {
    this.board.forEach((row) => {
      row.map((node) => { if (Math.floor(Math.random() * 4) == 2 && !node.isStartNode && !node.isEndNode) node.isWall = true })
    })
  }

  onMouseDownCell(cell: Cell): void {
    this.isMouseDown = true;
  }

  onMouseEnterCell(cell: Cell): void {
    if (!this.isMouseDown || cell.isStartNode || cell.isEndNode) return;
    cell.isWall = true;
  }

  onMouseUpCell(cell: Cell): void {
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
          isPath: false,
          isWall: false
        })
      }

      this.board.push(row);
    }
  }

  handleCell(cell: Cell): void {

    if (cell.isWall)
      return;

    if (cell.isEndNode) {
      cell.isEndNode = false;
      this.hasEndNode = false;
    } else if (cell.isStartNode) {
      cell.isStartNode = false;
      this.hasStartNode = false;
    } else if (!this.hasStartNode) {
      cell.isStartNode = true;
      this.startNode = cell;
      this.hasStartNode = true;
    } else if (!this.hasEndNode) {
      cell.isEndNode = true;
      this.hasEndNode = true;
      this.endNode = cell;
    }
  }

  handleWall(cell: Cell): void {
    if (!cell.isStartNode && !cell.isEndNode)
      cell.isWall = true;
  }
}
