import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TokenService } from '../token.service';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject = new BehaviorSubject<User>({});

  constructor(private tokenService: TokenService) {
    if(this.tokenService.checkToken()){
      this.verifyToken();
    }
  }

  private verifyToken(){
    const token = this.tokenService.getToken();
    const user = {};
    this.userSubject.next(user);
  }

  getUser(){
    return this.userSubject.asObservable();
  }

  setToken(token: string){
    this.tokenService.setToken(token);
    this.verifyToken();
  }

  logout(){
    this.tokenService.deleteToken();
    this.userSubject.next({});
  }

  isLogged(){
    return this.tokenService.checkToken();
  }
}
