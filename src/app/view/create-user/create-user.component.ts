import { Component } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DBService } from 'app/core/db.service';
import { IUser } from 'app/model/user';
import { AlertsComponent } from 'app/shared/alerts/alerts.component';

@Component({
  selector: 'jb-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements AfterViewInit {
  @ViewChild(AlertsComponent)
  private alertsComponent: AlertsComponent;

  title: string = 'Create User';
  firstName: string;
  middleName: string;
  lastName: string;
  userName: string;
  email: string;

  constructor(
    private _dbservice: DBService,
    private _router: Router
  ) { }

  ngAfterViewInit() {

  }

  clearUser() {
    this.firstName = '';
    this.middleName = '';
    this.lastName = '';
    this.userName = '';
    this.email = ''
  }

  createUser() {
    var user = new IUser();
    user.firstName = this.firstName;
    user.middleName = this.middleName;
    user.lastName = this.lastName;
    user.userName = this.userName;
    user.email = this.email
    user.password = this.email;

    // Call create user API.
    this._dbservice.createUser(user).subscribe(
      newUser => {
        if (newUser != null) {
          this.clearUser();
          console.log('User created.');
          this.alertsComponent.showSuccess('User created');
        }
      },
      error => {
        console.log(error);
        this.alertsComponent.showDanger(error);
      });
  }
}
