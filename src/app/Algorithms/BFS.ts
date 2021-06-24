import { Cell } from "../Cell";
import { Utils } from "./Utils"

export class BFS {

  static board: Cell[][];

  constructor(private board: Cell[][]) { this.board = board }

  /**
   * Breadth-first search algorithm.
   * @param startNode The starting node.
   * @param endNode The target node.
   * @param diag Wether diagonals are allowed.
   * @param trace Wether algorithm trace is shown.
   * @returns Array [The shortest path, the visited nodes (used to animate trace)].
   */
  public execute(startNode: Cell, endNode: Cell, diag: boolean, trace: boolean): any {

    var queue: Cell[] = [];
    var father: number[] | undefined[] = []; // Father vector to retrieve the final path.
    var visited: Cell[] = []; // Keep track of visited node order.

    queue.unshift(startNode);
    startNode.isVisited = true;
    father[startNode.id] = -1; // Start node has no father node.

    while (queue.length) {
      var currentNode: Cell | undefined = queue.pop();

      var neighbours: Cell[] = Utils.getNeigboursNode(currentNode, this.board, diag);

      var i = 0;
      for (let neighbour of neighbours) {
        if (neighbour.isWall) continue;

        if (!neighbour.isVisited) {
          father[neighbour.id] = currentNode?.id;

          if (neighbour.isEndNode) {

            return [Utils.getPathFromFather(startNode, endNode, father, this.board), visited];
          }
          queue.unshift(neighbour);

          if (!neighbour.isStartNode) {
            neighbour.isVisited = true;
            visited.push(neighbour);
          }
        }
      }

    }

    return null; // No path found.
  }
}
