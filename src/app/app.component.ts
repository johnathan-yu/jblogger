import { Component } from '@angular/core';
import { AuthenticationService } from 'app/service/authenticationService';
import { DBService } from 'app/service/dbService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthenticationService, DBService]
})
export class AppComponent { }
