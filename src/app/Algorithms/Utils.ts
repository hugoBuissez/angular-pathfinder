import { Cell } from "../Cell";

export class Utils {
    public static getNeigboursNode(cell: Cell, board: Cell[][]): Cell[] {
        var result: Cell[] = [];

        result.push(board[cell.y + 1][cell.x])
        result.push(board[cell.y - 1][cell.x])
        result.push(board[cell.y][cell.x + 1])
        result.push(board[cell.y][cell.x - 1])

        return result;
    }
}
