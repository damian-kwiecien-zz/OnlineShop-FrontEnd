import { Component } from '@angular/core';

@Component({
  selector: 'my-empty-result',
  template: `
  <div class="container">
<i class="fa fa-frown-o" aria-hidden="true" style="font-size: 70vh"></i>
<h1>Ooops Something is Empty here!</h1>
</div>`,
  styles: [`
  .container {
          text-align: center;
        }`]
})
export class EmptyResultComponent { }