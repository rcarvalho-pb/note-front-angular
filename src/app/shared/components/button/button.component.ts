import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  private title: string = "Alow";
  loading: boolean = true;

  getLoading(): string {
    return this.loading ? 'Carregando' : this.title;
  }
}
