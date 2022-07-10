import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './authentication/user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  user$ = this.userService.getUser();
  user: any;

  constructor(private userService: UserService){
    this.user$.subscribe(value => {
      this.user = value.name;
    });
  }

  title = 'personal-management-web';
}
