import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() visualise = new EventEmitter();
  @Output() diagonal = new EventEmitter();
  @Output() trace = new EventEmitter();
  @Output() clearPath = new EventEmitter();
  @Output() randomWalls = new EventEmitter();
  @Output() clearWalls = new EventEmitter();

  constructor() {
  }

  algorithms: string[] = [
    'Breadth-first search',
    'A*',
    'Dijkstra'
  ];

  selectedAlgorithm: string = this.algorithms[0];

  value = 10;

  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }


  ngOnInit(): void {
  }

  emitClearWalls(): void {
    this.clearWalls.emit('clearWalls');
  }

  emitVisualise(): any {
    this.visualise.emit('visualise');
  }

  emitTrace(): any {
    this.trace.emit('trace');
  }

  emitClearPath(): void {
    this.clearPath.emit('clearPath');
  }

  emitRandomWalls(): void {
    this.randomWalls.emit('randomWalls');
  }

  emitDiagonal(): void {
    this.diagonal.emit('diagonal')
  }
}
