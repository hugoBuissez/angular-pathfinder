import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GridComponent } from '../Grid/grid.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() visualise = new EventEmitter();

  constructor() {
  }


  ngOnInit(): void {
  }

  onClearWalls(): void {
  }

  onVisualise(): void {
  }

  onClearPath(): void {
  }

  handleShowTrace(event: any): void {
  }

  handleDiagonal(event: any): void {

  }
}
