import { Component, Renderer2 } from '@angular/core';
import { BFS } from "./Algorithms/BFS";

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'path finder';

  togglePath() {
    console.log("Visualise button pressed.");
  }
}
