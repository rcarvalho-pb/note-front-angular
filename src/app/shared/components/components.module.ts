import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ButtonComponent } from './button/button.component';
import { ButtonTextComponent } from './button-text/button-text.component';

@NgModule({
  declarations: [
    HeaderComponent,
    ButtonComponent,
    ButtonTextComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    ButtonComponent,
    ButtonTextComponent
  ]
})
export class ComponentsModule { }
