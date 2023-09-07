import { Component } from '@angular/core';
import { Note } from 'src/app/shared/model/note.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
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
    }
  ]
}
