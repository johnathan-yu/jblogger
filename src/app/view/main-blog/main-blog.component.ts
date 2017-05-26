import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jb-main-blog',
  templateUrl: './main-blog.component.html',
  styleUrls: ['./main-blog.component.css']
})
export class MainBlogComponent implements OnInit {

  title: string = 'Main Blog Page';

  constructor() { }

  ngOnInit() {
  }

}
