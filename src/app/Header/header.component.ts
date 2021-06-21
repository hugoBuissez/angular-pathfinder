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


  constructor() {
  }


  ngOnInit(): void {
  }

  onClearWalls(): void {
  }

  emitVisualise(): any {
    this.visualise.emit('visualise');
  }

  onClearPath(): void {
  }

  handleShowTrace(event: any): void {
  }

  emitDiagonal(): void {
    this.diagonal.emit('diagonal')
  }
}
