import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'app/model/user';
import { AuthenticationService } from 'app/service/authenticationService';

@Component({
  selector: 'jb-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public title: string = 'Login Page';
  public userName: string = '';
  public password: string = '';
  public invalidLogin: boolean = false;

  constructor(
    private _authenticationService: AuthenticationService,
    private _router: Router
  ) { }

  ngOnInit() {
  }

  login(): void {
    if (this.userName.length === 0 || this.password.length === 0)
      return;

    this.invalidLogin = false;

    if (this._authenticationService.authenticateLogin(this.userName, this.password)) {
      this._router.navigate(['mainblog'], { relativeTo: this._router.routerState.root });
    }

    this.invalidLogin = true;
  }
}
