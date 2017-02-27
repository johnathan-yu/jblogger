import { Component, OnInit } from '@angular/core';
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
  password: string;

  constructor() { }

  ngOnInit() {

  }

  createUser() {
    // Call create user API.
    console.log("Create User");
  }
}
