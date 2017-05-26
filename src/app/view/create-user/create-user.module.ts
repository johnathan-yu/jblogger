import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CreateUserComponent } from 'app/view/create-user/create-user.component';
import { AlertsComponent } from 'app/shared/alerts/alerts.component';
import { UserAuthenticatedRouteGuard } from 'app/core/user-authenticated-route-guard.service';

@NgModule({
    declarations: [CreateUserComponent, AlertsComponent],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forChild([
            { path: 'createUser', canActivate: [UserAuthenticatedRouteGuard], component: CreateUserComponent }
        ])
    ]
})
export class CreateUserModule { }