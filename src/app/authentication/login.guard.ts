import { Injectable } from "@angular/core";
import { CanLoad, Route, Router, UrlSegment, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { UserService } from "./user/user.service";

@Injectable({
    providedIn: 'root'
})
export class LoginGuard implements CanLoad {

    constructor(
        private userService: UserService,
        private router: Router
    ){}

    canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        
        if(this.userService.isLogged()){
            this.router.navigate(['dashboard']);
            return false;
        }
        return true;
    }
}