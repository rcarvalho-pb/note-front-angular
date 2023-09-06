import { Component } from '@angular/core';

@Component({
  selector: 'app-button-text',
  templateUrl: './button-text.component.html',
  styleUrls: ['./button-text.component.scss']
})
export class ButtonTextComponent {
  isActive: boolean = true;
  title: string = 'Title';

  getColor(): string {
    return this.isActive ? 'color: var(--ORANGE);' : 'color: var(--GRAY_100);';
  }
}
