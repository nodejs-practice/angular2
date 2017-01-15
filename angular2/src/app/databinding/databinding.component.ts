import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ang-databinding',
  template: `
  <h1>String interpolation</h1>
    <p>      {{stringInterpolation}} | {{numberInterpolation}}    </p>
    <h1>Property binding</h1>
    <input type="text" [value]="numberInterpolation">
    <p [ngClass]='{redBorder: true}'>using ngClass property binding</p>
    <p [ngStyle]='{color: "green"}'>Using ngStyle property binding</p>
    <h3>Custom Property Binding</h3>
    <ang-property-binding [result]="24"></ang-property-binding>

    <h3>Event Binding</h3>
    <ang-event-binding (clicked)="onClicked($event)"></ang-event-binding>

    <h4>Two-way binding</h4>
    <ang-two-way-binding></ang-two-way-binding>
  `,
  styles: [`.redBorder{border:1px solid red;}`]
})
export class DatabindingComponent  {
  stringInterpolation = 'This is string interpolation';
  numberInterpolation = 2;
  constructor() { }

  onClicked(value: string) {alert(value);}


}
