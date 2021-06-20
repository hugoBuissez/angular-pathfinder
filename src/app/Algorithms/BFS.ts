import { CursorError } from "@angular/compiler/src/ml_parser/lexer";
import { Cell } from "../Cell";
import { Utils } from "./Utils"

export class BFS {

  static board: Cell[][];

  constructor(private board: Cell[][]) { this.board = board }

  public execute(startNode: Cell, endNode: Cell): any {
    console.log('BFS');

    var queue: Cell[] = [];
    var father: number[] | undefined[] = []; // Father vector to retrieve the final path.

    queue.unshift(startNode);
    startNode.isVisited = true;
    father[startNode.id] = -1; // Start node has no father node.

    while (queue.length) {
      var currentNode: Cell | undefined = queue.pop();

      var neighbours: Cell[] = Utils.getNeigboursNode(currentNode, this.board);

      for (let neighbour of neighbours) {

        if (!neighbour.isVisited) {
          father[neighbour.id] = currentNode?.id;

          if (neighbour.isEndNode) {
            this.getPathFromFather(startNode, endNode, father);

            return father; // End node has been reached.
          }
          queue.unshift(neighbour);

          if (!neighbour.isStartNode)
            neighbour.isVisited = true;
        }
      }
    }
  }

  public getPathFromFather(startNode: Cell, endNode: Cell, father: number[] | undefined[]): any {

    var finalPath = [];
    var i: number | undefined = father[endNode.id];

    while (i && father[i] != -1) {
      var currentNode: Cell = this.board[i % this.board[0].length][Math.floor(i / this.board[0].length)];
      finalPath.push(currentNode);
      i = father[i];
    }

    this.animatePath(finalPath);
  }

  private animatePath(path: Cell[]) {
    for (let i = 0; i < path.length; i++) {
      setTimeout(
        function () {
          path[i].isVisited = false;
          path[i].isPath = true;
        },
        i * 40,
        i
      );
    }
  }
}
