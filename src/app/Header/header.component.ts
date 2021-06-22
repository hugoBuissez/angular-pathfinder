import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GridComponent } from '../Grid/grid.component';

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
