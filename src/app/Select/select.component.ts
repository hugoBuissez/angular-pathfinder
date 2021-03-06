import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  algorithms: string[] = [
    'Breadth-first search',
    'A*',
    'Dijkstra'
  ];

  selectedAlgorithm: string = this.algorithms[0];

  panelOpenState = false;
}
