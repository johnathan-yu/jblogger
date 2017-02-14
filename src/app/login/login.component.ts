import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  users: any[] = [
    {
      'name': 'John Smith',
      'email': 'jsmith@jblogger.com'
    },
    {
      'name': 'John Doe',
      'email': 'jdoe@jblogger.com'
    }
  ]

  constructor(
    private router: Router 
  ) { }

  ngOnInit() {
  }

  login(): void {
    this.invalidLogin = false;
    if (this.userName.length === 0 || this.password.length === 0)
      return;

    for(var i=0, last=this.users.length; i<last; i++ ){
      if (this.users[i].name === this.userName && this.users[i].email === this.password) {
        this.invalidLogin = false;
        this.router.navigate(['mainblog']);
        return;
        // TODO redirect to main content page
      }
    }

    this.invalidLogin = true;
  }
}
