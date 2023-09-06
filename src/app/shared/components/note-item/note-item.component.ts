import { Component } from '@angular/core';

@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.scss']
})
export class NoteItemComponent {
  value: string = "valor";
  isNew: boolean = true;

  onClick(): string {
    return "Clicou";
  }

  getButtonText(): string {
    return this.isNew ? 'button-add' : 'button-delete';
  }

  getButtonIcon(): string {
    return this.isNew ? 'add' : 'close';
  }

  getStyles(): string {

    return this.isNew ? 'background-color: "transparent"; border: 1px dashed var(--GRAY_300)' : 'background-color: var(--BACKGROUND_900); border: 1px dashed none';
  }
}
