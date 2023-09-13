import { Component, ViewChild } from '@angular/core';
import { LoginCredentials } from 'src/app/shared/model/login-credentials.model';

import { InputComponent } from '../../shared/components/input/input.component';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { LoginResponse } from 'src/app/shared/model/login-response.model';
import { first } from 'rxjs';
import { User } from 'src/app/shared/model/user.model';

@Component({
  selector: 'Signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {

  @ViewChild(InputComponent) email?: InputComponent;
  @ViewChild(InputComponent) password?: InputComponent;

  constructor(
    private router: Router,
    private authService: AuthService
  ){}

  handleSignin(event: MouseEvent) {
    event.preventDefault();
    const loginCredentials: LoginCredentials = {
      email: this.email!.value as string,
      password: this.password!.value as string
    }

    console.log(loginCredentials)

    this.authService.login(loginCredentials)
      .pipe(first())
      .subscribe({
        next: (response) => {
          const user: Partial<User> = {
            ...response.user,
          };

          sessionStorage.setItem("USER", JSON.stringify(user));
          sessionStorage.setItem("TOKEN", JSON.stringify(response.token));
        },

        error: (err) => {
          console.log(err)
        },

        complete: () => {
          this.router.navigate(['/home'])
        }
      });
  }
}
