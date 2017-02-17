import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './view/login/login.component';
import { PageNotFoundComponent } from './view/page-not-found/page-not-found.component';
import { HomeComponent } from './view/home/home.component';
import { MainBlogComponent } from './view/main-blog/main-blog.component';
import { NavComponent } from './shared/nav/nav.component';

import { LocalStorageModule } from 'angular-2-local-storage';
import { CreateUserComponent } from './view/create-user/create-user.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent,
    HomeComponent,
    MainBlogComponent,
    NavComponent,
    CreateUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: 'home', component: HomeComponent },
      { path: 'mainblog', component: MainBlogComponent },
      { path: 'createUser', component: CreateUserComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', component: PageNotFoundComponent }
    ]),
    LocalStorageModule.withConfig({
      prefix: 'jb',
      storageType: 'localStorage'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
