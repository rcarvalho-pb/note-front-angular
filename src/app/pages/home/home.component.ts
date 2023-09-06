import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public coisas: any = {
    placeholder: 'E-mail',
    user: 'eu'
  }
}
