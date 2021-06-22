export interface Cell {
    id: number; // this.boardWitdh * x + y.
    x: number; // column.
    y: number; // row.
    isStartNode: boolean;
    isEndNode: boolean;
    isVisited: boolean;
    animateVisited: boolean; // Wether the cell is colored we need it because the visited node are compute way before we animate them.
    isPath: boolean;
    isWall: boolean;
}