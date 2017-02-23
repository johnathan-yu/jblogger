import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LocalStorageModule } from 'angular-2-local-storage';
import { SharedModule } from 'app/shared/shared.module';
import { ViewModule } from 'app/view/view.module'

import { AppComponent } from 'app/app.component';
import { PageNotFoundComponent } from 'app/view/page-not-found/page-not-found.component';

import { AuthenticationService } from 'app/core/authentication.service';
import { DBService } from 'app/core/db.service';
import { UserAuthenticatedRouteGuard } from 'app/core/user-authenticated-route-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  ],
  imports: [
    SharedModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', component: PageNotFoundComponent }
    ]),
    ViewModule,
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
