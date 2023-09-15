import { Component } from '@angular/core';
import { Note } from 'src/app/shared/model/note.model';

@Component({
  selector: 'app-all-notes',
  templateUrl: './all-notes.component.html',
  styleUrls: ['./all-notes.component.scss']
})
export class AllNotesComponent {
  public notes: Partial<Note>[] = [
    {
      title: 'Title',
      description: 'Description',
      tags: [
        {
          url: 'Teste1'
        },
        {
          url: 'Teste2'
        }
      ]
    },
    {
      title: 'Title2',
      description: 'Description2',
      tags: [
        {
          url: 'Teste1'
        },
        {
          url: 'Teste2'
        }
      ]
    },
    {
      title: 'Title3',
      description: 'Description3',
      tags: [
        {
          url: 'Teste3'
        },
        {
          url: 'Teste3'
        }
      ]
    }
  ]
}
