import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ang-property-binding',
  template: `
    <p>
      {{result}}
    </p>
  `,
  styles: []
})
export class PropertyBindingComponent  {
  @Input() result: number = 0; 

}
