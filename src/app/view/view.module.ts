import { NgModule } from '@angular/core';

// Modules
import { LoginModule } from 'app/view/login/login.module';
import { HomeModule } from 'app/view/home/home.module';
import { MainBlogModule } from 'app/view/main-blog/main-blog.module';
import { CreateUserModule } from 'app/view/create-user/create-user.module';

@NgModule({
    imports: [
        LoginModule,
        HomeModule,
        MainBlogModule,
        CreateUserModule
    ]
})
export class ViewModule { }