import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Input() public placeholder?: string;
  @Input() public type?: string;
  @Input() public icon?: string;
  @Input() public value?: string;
  @Output() public valueChange: EventEmitter<string> = new EventEmitter<string>;


  sendValue(): void {
    this.valueChange.emit(this.value);
  }
}
