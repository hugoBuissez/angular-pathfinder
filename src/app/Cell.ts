export interface Cell {
    id: number; // this.boardWitdh * x + y.
    x: number; // column.
    y: number; // row.
    isStartNode: boolean;
    isEndNode: boolean;
    isVisited: boolean;
    isPath: boolean;
}