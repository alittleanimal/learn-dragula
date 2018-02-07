import { Component, ViewEncapsulation } from '@angular/core';
import { DragulaService } from 'ng2-dragula'

@Component({
  selector: 'app-root',
  template: `
    <div class="examples">
      <example-a></example-a>
      <example-b></example-b>
    </div>
  `,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'app';
}
