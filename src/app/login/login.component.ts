import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'app/model/user';

@Component({
  selector: 'jb-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title: string = 'Login Page';
  userName: string = '';
  password: string = '';
  invalidLogin: boolean = false;
  users: User[];

  constructor(
    private router: Router
  ) {
    // TODO: Hard code sample data for now.  Need to write service to get real data.
    this.users = new Array<User>();
    this.users.push(new User('John', 'A', 'Smith', 'jsmith', 'jsmith@jblogger.com'));
    this.users.push(new User('John', 'B', 'Doe', 'jdoe', 'jdoe@jblogger.com'));
  }

  ngOnInit() {
  }

  login(): void {
    if (this.userName.length === 0 || this.password.length === 0)
      return;

    this.invalidLogin = false;

    for (var i = 0, last = this.users.length; i < last; i++) {
      if (this.users[i].userName === this.userName && this.users[i].email === this.password) {
        this.invalidLogin = false;
        this.router.navigate(['mainblog'], { relativeTo: this.router.routerState.root });
      }
    }

    this.invalidLogin = true;
  }
}
