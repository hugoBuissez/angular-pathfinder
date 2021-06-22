import { Cell } from "../Cell";
import { Utils } from "./Utils"

export class BFS {

  static board: Cell[][];

  constructor(private board: Cell[][]) { this.board = board }

  public execute(startNode: Cell, endNode: Cell, diag: boolean, trace: boolean): any {
    console.log('BFS');

    var queue: Cell[] = [];
    var father: number[] | undefined[] = []; // Father vector to retrieve the final path.

    queue.unshift(startNode);
    startNode.isVisited = true;
    father[startNode.id] = -1; // Start node has no father node.

    while (queue.length) {
      var currentNode: Cell | undefined = queue.pop();

      var neighbours: Cell[] = Utils.getNeigboursNode(currentNode, this.board, diag);

      for (let neighbour of neighbours) {
        if (neighbour.isWall) continue;

        if (!neighbour.isVisited) {
          father[neighbour.id] = currentNode?.id;

          if (neighbour.isEndNode) {
            return Utils.getPathFromFather(startNode, endNode, father, this.board);
          }
          queue.unshift(neighbour);

          if (!neighbour.isStartNode)
            neighbour.isVisited = true;
        }
      }
    }
  }
}
