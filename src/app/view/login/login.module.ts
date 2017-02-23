import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginComponent } from 'app/view/login/login.component'

@NgModule({
    declarations: [LoginComponent],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forChild([
            { path: 'login', component: LoginComponent }
        ])
    ]
})
export class LoginModule { }