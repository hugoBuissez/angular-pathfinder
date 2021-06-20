import { Cell } from "../Cell";

export class Utils {

    /**
     * @param cell The cell to get neighbour from.
     * @param board The board.
     * @returns An array containing all cell (up, down, left, right) neigbours.
     */
    public static getNeigboursNode(cell: Cell | undefined, board: Cell[][]): Cell[] {
        var result: Cell[] = [];

        if (cell && cell.y < 24)
            result.push(board[cell.y + 1][cell.x])
        if (cell && cell.y > 0)
            result.push(board[cell.y - 1][cell.x])
        if (cell && cell.x < 59)
            result.push(board[cell.y][cell.x + 1])
        if (cell && cell.x > 0)
            result.push(board[cell.y][cell.x - 1])

        return result;
    }
}
