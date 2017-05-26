import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainBlogComponent } from 'app/view/main-blog/main-blog.component'
import { UserAuthenticatedRouteGuard } from 'app/core/user-authenticated-route-guard.service';

@NgModule({
    declarations: [MainBlogComponent],
    imports: [
        RouterModule.forChild([
            { path: 'mainblog', canActivate: [UserAuthenticatedRouteGuard], component: MainBlogComponent }
        ])
    ]
})
export class MainBlogModule { }