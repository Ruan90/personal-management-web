import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { UserService } from './user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private httpClient: HttpClient,
    private userService: UserService
  ) { }

  authenticate(email: string, password: string): Observable<HttpResponse<any>>{
    return this.httpClient.post('http://localhost:8000/api/login', {
      email: email,
      password: password
    },
    { observe: 'response'}
    ).pipe(
      tap((res) => {

        const authToken = res.headers.get('Authorization') ?? '';
        this.userService.setToken(authToken);
      })
    );
  }

}
