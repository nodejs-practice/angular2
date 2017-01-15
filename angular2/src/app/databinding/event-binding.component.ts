import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'ang-event-binding',
  template: `
  <button (click)="onClicked()">Click Me</button>
  `,
  styles: []
})
export class EventBindingComponent  {
  @Output() clicked = new EventEmitter<string>();

  onClicked() {this.clicked.emit("Event Emitter fired");}
}
