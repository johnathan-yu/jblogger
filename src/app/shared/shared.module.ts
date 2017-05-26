import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavComponent } from 'app/shared/nav/nav.component';
// import { AlertsComponent } from 'app/shared/alerts/alerts.component';

@NgModule({
    // declarations: [NavComponent, AlertsComponent],
    declarations: [NavComponent],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [NavComponent]
})
export class SharedModule { }