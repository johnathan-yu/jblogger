import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavComponent } from 'app/shared/nav/nav.component';

@NgModule({
    declarations: [NavComponent],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [NavComponent]
})
export class SharedModule { }