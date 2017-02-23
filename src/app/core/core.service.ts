import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DBService } from 'app/core/db.service';
import { AuthenticationService } from 'app/core/authentication.service';

@NgModule({
    providers: [
        DBService,
        AuthenticationService
    ]
})
export class CoreServiceModule { }