
import { Routes } from '@angular/router';
import { MainpageComponent } from './core/pages/mainpage/mainpage.component';
import { LoginComponent } from './core/pages/login/login.component';
import { RegisterComponent } from './core/pages/register/register.component';
import { ForgetpasswordComponent } from './core/pages/forgetpassword/forgetpassword.component';
import { VerifycodeComponent } from './core/pages/verifycode/verifycode.component';
import { SetpasswordComponent } from './core/pages/setpassword/setpassword.component';
import { authGuard } from './core/gaurds/auth.guard';
import { tohomeGuard } from './core/gaurds/tohome.guard';
import { HomePageComponent } from './core/layout/home-page/home-page.component';
import { MainHomeComponent } from './core/layout/main-home/main-home.component';
import { ExamPageComponent } from './core/layout/exam-page/exam-page.component';

export const routes: Routes = [


    {
        path:"",component:MainpageComponent,canActivate:[tohomeGuard] ,children:[
            {path:"",redirectTo:"login",pathMatch:'full'},
            {path:"login",component:LoginComponent},
            {
                path:"register", component:RegisterComponent
            },
            {
                path:"forgetpassword", component:ForgetpasswordComponent
            },
            {
                path:"verifycode", component:VerifycodeComponent
            }
            ,{
                path:"resetpassword",component:SetpasswordComponent
            }
        ]
     },
     {
        path:"",component:HomePageComponent,canActivate:[authGuard],children:[
        {path:"",redirectTo:"mainhome",pathMatch:'full'},
        {path:"home",component:HomePageComponent },
        {path:"mainhome",component:MainHomeComponent},
        {path:"exampage",component:ExamPageComponent},

        ]
    }

];
