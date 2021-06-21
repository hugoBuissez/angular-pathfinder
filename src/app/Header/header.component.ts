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
  @Output() clearPath = new EventEmitter();
  @Output() randomWalls = new EventEmitter();

  constructor() {
  }


  ngOnInit(): void {
  }

  onClearWalls(): void {
  }

  emitVisualise(): any {
    this.visualise.emit('visualise');
  }

  emitClearPath(): void {
    this.clearPath.emit('clearPath');
  }

  emitRandomWalls(): void {
    this.randomWalls.emit('randomWalls');
  }

  handleShowTrace(event: any): void {
  }

  emitDiagonal(): void {
    this.diagonal.emit('diagonal')
  }
}
