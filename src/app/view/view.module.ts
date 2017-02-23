import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

// Component
import { LoginComponent } from 'app/view/login/login.component';
import { HomeComponent } from 'app/view/home/home.component';
import { MainBlogComponent } from 'app/view/main-blog/main-blog.component';
import { CreateUserComponent } from 'app/view/create-user/create-user.component';
import { UserAuthenticatedRouteGuard } from 'app/core/user-authenticated-route-guard.service';

@NgModule({
    declarations: [
        LoginComponent,
        HomeComponent,
        MainBlogComponent,
        CreateUserComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        RouterModule.forChild([
            { path: 'login', component: LoginComponent },
            { path: 'home', component: HomeComponent },
            { path: 'mainblog', canActivate: [UserAuthenticatedRouteGuard], component: MainBlogComponent },
            { path: 'createUser', canActivate: [UserAuthenticatedRouteGuard], component: CreateUserComponent },
        ])
    ],
    exports: []
})
export class ViewModule { }