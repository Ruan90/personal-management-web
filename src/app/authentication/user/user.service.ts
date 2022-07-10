import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, catchError, map, mapTo, Observable, tap } from 'rxjs';
import { TokenService } from '../token.service';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject = new BehaviorSubject<User>({});

  constructor(
    private tokenService: TokenService,
    private httpClient: HttpClient
  ) {

    if(this.tokenService.checkToken()){
      this._verifyToken();
    }
  }

  private async _verifyToken(){

    const headers = new HttpHeaders()
      .append('Authorization', this.tokenService.getToken())
      .append('Content-Type', 'application/json')
      .append('Accept', 'application/json');
      
      const confirmToken = await this.httpClient.get('http://127.0.0.1:8000/api/verify', 
      { headers }
      ).subscribe(
        res => {
          this.userSubject.next(res);
        },
        error => console.log('error', error)
      );
  }

  getUser(){
    return this.userSubject.asObservable();
  }

  setToken(token: string){
    this.tokenService.setToken(token);
    this._verifyToken();
  }

  logout(){
    this.tokenService.deleteToken();
    this.userSubject.next({});
  }

  isLogged(){
    return this.tokenService.checkToken();
  }
}
