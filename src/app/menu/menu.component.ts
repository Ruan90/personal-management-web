import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "../authentication/user/user.service";

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent{

    user$ = this.userService.getUser();

    constructor(private userService: UserService, private router: Router){}

    acessoConhecimento(){
        this.router.navigate(['conhecimento']);
    }

    acessoDashboard(){
      this.router.navigate(['dashboard']);
    }
    
    logout() {
      this.userService.logout();
      this.router.navigate(['']);
    }
}