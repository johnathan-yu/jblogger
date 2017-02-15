/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MainBlogComponent } from './main-blog.component';

describe('MainBlogComponent', () => {
  let component: MainBlogComponent;
  let fixture: ComponentFixture<MainBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
