import { NgModule } from '@angular/core';

// Modules
import { LoginModule } from 'app/view/login/login.module';
import { HomeModule } from 'app/view/home/home.module';
import { MainBlogModule } from 'app/view/main-blog/main-blog.module';
import { CreateUserModule } from 'app/view/create-user/create-user.module';
import { PageNotFoundModule } from 'app/view/page-not-found/page-not-found.module';

@NgModule({
    imports: [
        HomeModule,
        LoginModule,
        MainBlogModule,
        CreateUserModule,
        PageNotFoundModule // Must be last due to route expression
    ]
})
export class ViewModule { }