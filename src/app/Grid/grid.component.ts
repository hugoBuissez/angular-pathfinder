import { Component, OnInit } from '@angular/core';
import { Cell } from '../Cell';
import { BFS } from '../Algorithms/BFS'

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

  ngOnInit(): void {

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
          isPath: false
        })
      }

      this.board.push(row);
    }
  }

  onVisualise(): void {
    var bfs = new BFS(this.board);
    var fatherPath = bfs.execute(this.startNode, this.endNode);
  }

  handleCell(cell: Cell): void {

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
}
