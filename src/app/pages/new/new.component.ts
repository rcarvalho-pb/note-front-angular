import { Component, Input } from '@angular/core';
import { NoteItem } from 'src/app/shared/components/note-item/note-item.component';
import { Note } from 'src/app/shared/model/note.model';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent {
  @Input() note?: Partial<Note>;
}
