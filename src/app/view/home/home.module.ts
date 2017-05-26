import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from 'app/view/home/home.component';

@NgModule({
    declarations: [HomeComponent],
    imports: [
        RouterModule.forChild([
            { path: 'home', component: HomeComponent }
        ])
    ]
})
export class HomeModule { }