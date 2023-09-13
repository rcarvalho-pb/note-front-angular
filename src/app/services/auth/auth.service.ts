import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginCredentials } from 'src/app/shared/model/login-credentials.model';
import { LoginResponse } from 'src/app/shared/model/login-response.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URI = 'localhost:8080';

  constructor(
    private http: HttpClient
  ) {}

  login(loginCredentials: LoginCredentials): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.URI}/auth`, loginCredentials);
  }

  
}
