import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jb-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  title: string = '';

  constructor() { }

  ngOnInit() {
  }

}
