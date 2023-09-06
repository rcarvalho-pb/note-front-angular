import { Component } from '@angular/core';
import { Note } from '../../model/note.model';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent {
  note: Partial<Note> = {
    title: "Titulo",
    description: "Descrição"
  }
}
