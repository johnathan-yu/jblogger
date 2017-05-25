import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DBService } from 'app/core/db.service';
import { IUser } from 'app/model/user';

@Component({
  selector: 'jb-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
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

  ngOnInit() {

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
          // Create user succeeded.  Route to main blog.
          this._router.navigate(['mainblog'], { relativeTo: this._router.routerState.root });
        }
        console.log("Create User");
      },
      error => {
        console.log(error);
      });
  }
}
