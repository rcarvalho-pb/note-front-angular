import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../shared/components/components.module';

import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { NewComponent } from './new/new.component';
import { ProfileComponent } from './profile/profile.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';



@NgModule({
  declarations: [
    DetailsComponent,
    HomeComponent,
    NewComponent,
    ProfileComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [
    DetailsComponent,
    HomeComponent,
    NewComponent,
    ProfileComponent,
    SigninComponent,
    SignupComponent
  ]
})
export class PagesModule { }
