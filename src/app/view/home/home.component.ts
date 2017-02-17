import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jb-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title: string = 'Home Page';

  constructor() { }

  ngOnInit() {
  }

}
