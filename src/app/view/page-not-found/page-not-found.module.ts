import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from 'app/view/page-not-found/page-not-found.component';

@NgModule({
    declarations: [PageNotFoundComponent],
    imports: [
        RouterModule.forChild([
            { path: '**', component: PageNotFoundComponent }
        ])
    ]
})
export class PageNotFoundModule { }