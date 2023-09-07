import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-text',
  templateUrl: './button-text.component.html',
  styleUrls: ['./button-text.component.scss']
})
export class ButtonTextComponent {
  @Input() isActive?: boolean;
  @Input() title?: string;

  getColor(): string {
    return this.isActive ? 'color: var(--ORANGE);' : 'color: var(--GRAY_100);';
  }
}
