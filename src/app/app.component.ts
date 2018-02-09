import { Component, ViewEncapsulation } from '@angular/core';
import { DragulaService } from 'ng2-dragula'

@Component({
  selector: 'app-root',
  template: `
    <div class="examples">
      <example-a></example-a>
      <example-b></example-b>
      <another-example></another-example>
      <such-example></such-example>
    </div>
  `,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'app';
}
