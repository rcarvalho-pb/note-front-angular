import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ButtonComponent } from './button/button.component';
import { ButtonTextComponent } from './button-text/button-text.component';
import { NoteComponent } from './note/note.component';
import { NoteItemComponent } from './note-item/note-item.component';
import { SectionComponent } from './section/section.component';

import {MatIconModule} from '@angular/material/icon';
import { TagComponent } from './tag/tag.component';
import { TextAreaComponent } from './text-area/text-area.component';
import { InputComponent } from './input/input.component';

@NgModule({
  declarations: [
    HeaderComponent,
    ButtonComponent,
    ButtonTextComponent,
    NoteComponent,
    NoteItemComponent,
    SectionComponent,
    TagComponent,
    TextAreaComponent,
    InputComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    HeaderComponent,
    ButtonComponent,
    ButtonTextComponent,
    NoteComponent,
    NoteItemComponent,
    SectionComponent,
    TagComponent,
    TextAreaComponent,
    InputComponent
  ]
})
export class ComponentsModule { }
