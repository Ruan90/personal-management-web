import { Injectable } from '@angular/core';

const KEY = 'token';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  getToken(){
    return sessionStorage.getItem(KEY) ?? '';
  }

  setToken(token: string){
    sessionStorage.setItem(KEY, token);
  }

  deleteToken(){
    sessionStorage.removeItem(KEY);
  }

  checkToken(){
    return !!this.getToken();
  }
}
