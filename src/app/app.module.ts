import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LocalStorageModule } from 'angular-2-local-storage';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './view/login/login.component';
import { PageNotFoundComponent } from './view/page-not-found/page-not-found.component';
import { HomeComponent } from './view/home/home.component';
import { MainBlogComponent } from './view/main-blog/main-blog.component';
import { CreateUserComponent } from './view/create-user/create-user.component';

import { AuthenticationService } from 'app/core/authentication.service';
import { DBService } from 'app/core/db.service';
import { UserAuthenticatedRouteGuard } from 'app/core/user-authenticated-route-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent,
    HomeComponent,
    MainBlogComponent,
    CreateUserComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: 'home', component: HomeComponent },
      { path: 'mainblog', canActivate: [UserAuthenticatedRouteGuard], component: MainBlogComponent },
      { path: 'createUser', canActivate: [UserAuthenticatedRouteGuard], component: CreateUserComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', component: PageNotFoundComponent }
    ]),
    LocalStorageModule.withConfig({
      prefix: 'jb',
      storageType: 'localStorage'
    })
  ],
  providers: [
    AuthenticationService,
    DBService,
    UserAuthenticatedRouteGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
