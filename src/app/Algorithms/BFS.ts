import { Cell } from "../Cell";
import { Utils } from "./Utils"

export class BFS {
  static board: Cell[][];
  constructor(private board: Cell[][]) { this.board = board }

  public execute(startNode: Cell, endNode: Cell): void {
    /* console.log('BFS');

    var queue: Cell[] = [];

    queue.push(startNode);
    while (queue.length) {
      var currentNode = queue.pop();
      console.log(currentNode);


    } */
    console.log(Utils.getNeigboursNode(startNode, this.board));
  }

}
