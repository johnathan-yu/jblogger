import { NgModule } from '@angular/core';
import { DBService } from 'app/core/db.service';
import { AuthenticationService } from 'app/core/authentication.service';
import { UserAuthenticatedRouteGuard } from 'app/core/user-authenticated-route-guard.service';

@NgModule({
    providers: [
        DBService,
        AuthenticationService,
        UserAuthenticatedRouteGuard
    ]
})
export class CoreServiceModule { }