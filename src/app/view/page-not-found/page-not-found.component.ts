import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jb-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  title: string = 'Page Not Found';

  constructor() { }

  ngOnInit() {
  }

}
