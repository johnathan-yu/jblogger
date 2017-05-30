import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from 'app/view/home/home.component';

@NgModule({
    declarations: [HomeComponent],
    imports: [
        RouterModule.forChild([
            { path: '', redirectTo: '/home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent }
        ])
    ]
})
export class HomeModule { }