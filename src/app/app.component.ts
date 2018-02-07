import { Component } from '@angular/core';
import { DragulaService } from 'ng2-dragula'

@Component({
  selector: 'app-root',
  template: `
    
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private dragulaService: DragulaService) {
    dragulaService.drag.subscribe((value) => {
      console.log(`drag: ${value[0]}`);
      this.onDrag(value.slice(1));
    });

    dragulaService.drop.subscribe((value) => {
      console.log(`drop: ${value[0]}`);
      this.onOver(value.slice(1));
    });

    dragulaService.over.subscribe((value) => {
      console.log(`over: $[value[0]`);
      this.onOut(value.slice(1));
    });

    dragulaService.out.subscribe((value) => {
      console.log(`out: $[value[0]`);
      this.onOut(value.slice(1));
    })
  }

  private onDrag(args) {
    let [e, el] = args;
  }

  private onDrop(args) {
    let [e, el] = args;
  }

  private onOver(args) {
    let [e, el, container] = args;
  }

  private onOut(args) {
    let [e, el, container] = args;
  }
}
