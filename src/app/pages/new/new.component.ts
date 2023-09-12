import { Component, Input } from '@angular/core';
import { Link } from 'src/app/shared/model/link.model';
import { Note } from 'src/app/shared/model/note.model';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent {
  // @Input() note?: Partial<Note>;
  note: Partial<Note> = {
    title: "Titulo",
    description: "Descrição",
    links: [
      {
        id: 1,
        link: "Link 1",
        noteId: 1
      },
      {
        id: 2,
        link: "Link 2",
        noteId: 2
      }
    ],
    tags: [
      {
        url: "Tag 1"
      },
      {
        url: "Tag 2"
      },
      {
        url: "Tag 3"
      }
    ]
  }
}

