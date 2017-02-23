import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { LocalStorageModule } from 'angular-2-local-storage';
import { SharedModule } from 'app/shared/shared.module';
import { ViewModule } from 'app/view/view.module'

import { AppComponent } from 'app/app.component';
import { CoreServiceModule } from 'app/core/core.service.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    SharedModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ]),
    LocalStorageModule.withConfig({
      prefix: 'jb',
      storageType: 'localStorage'
    }),
    ViewModule,
    CoreServiceModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
