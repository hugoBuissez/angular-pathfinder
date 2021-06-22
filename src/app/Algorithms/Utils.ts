import { Cell } from "../Cell";

export class Utils {

    /**
     * @param cell The cell to get neighbour from.
     * @param board The board.
     * @param diag Wether diagonals are allowed.
     * @returns An array containing all cell (up, down, left, right) neigbours.
     */
    public static getNeigboursNode(cell: Cell | undefined, board: Cell[][], diag: boolean): Cell[] {
        var result: Cell[] = [];

        if (cell && cell.y < 24)
            result.push(board[cell.y + 1][cell.x]) // bottom.
        if (cell && cell.y > 0)
            result.push(board[cell.y - 1][cell.x]) // top.
        if (cell && cell.x < 59)
            result.push(board[cell.y][cell.x + 1]) // right.
        if (cell && cell.x > 0)
            result.push(board[cell.y][cell.x - 1]) // left.
        if (diag) {
            if (cell && cell.y < 24 && cell.x > 0)
                result.push(board[cell.y + 1][cell.x - 1]) // bottom left.
            if (cell && cell.y < 24 && cell.x < 59)
                result.push(board[cell.y + 1][cell.x + 1]) // bottom right.
            if (cell && cell.y > 0 && cell.x < 59)
                result.push(board[cell.y - 1][cell.x + 1]) // top right.
            if (cell && cell.y > 0 && cell.x > 0)
                result.push(board[cell.y - 1][cell.x - 1]) // top left.
        }

        return result;
    }

    /**
     * @param startNode The starting node.
     * @param endNode The target node.
     * @param father The father vector.
     * @param board The board.
     * @returns The final shortest path based on the father vector.
     */
    public static getPathFromFather(startNode: Cell, endNode: Cell, father: number[] | undefined[], board: Cell[][]): any {

        var finalPath = [];
        var i: number | undefined = father[endNode.id];

        while (i && father[i] != -1) {
            var currentNode: Cell = board[i % board[0].length][Math.floor(i / board[0].length)];
            finalPath.unshift(currentNode);
            i = father[i];
        }

        finalPath.push(endNode)
        return finalPath;
    }

    /**
     * @param path The path to animate.
     */
    public static animatePath(path: Cell[]) {
        for (let i = 0; i < path.length; i++) {
            console.log("yes");

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

    public static animateTrace(trace: Cell[], path: Cell[]) {
        for (let i = 0; i < trace.length; i++) {
            setTimeout(
                function () {
                    if (i == trace.length - 1) {
                        Utils.animatePath(path);
                        return;
                    }
                    trace[i].animateVisited = true;
                },
                i * 10,
                i
            );

        }
    }
}
