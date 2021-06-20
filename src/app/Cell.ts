export interface Cell {
    x: number; // row
    y: number; // column
    isStartNode: boolean;
    isEndNode: boolean;
    isVisited: boolean;
}