import { NgModule } from '@angular/core';
import { Routes, RouterModule, ChildActivationEnd } from '@angular/router';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { ProductlComponent } from './productl/productl.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
// {path:"login", component: LoginComponent},
// {path:"data",component:MainComponent},
// {path:"item",component:ProductlComponent},   
// {path:"signup",component:SignupComponent},
// {path:"admin",component:MainpageComponent},
{path:"admin",component:MainpageComponent,
				canActivate:[AuthGuard],//khai báo guard dùng để ràng buộc phải đăng nhập mới được vào
				children:[    
          {path:"item",component:ProductlComponent},   
          {path:"data",component:MainComponent}, //mặc định localhost:4200/admin sẽ load ItemListComponent 
                          //được nhúng vào MainLayoutComponent
                          {path:"signup",component:SignupComponent},

        ]},
        	
        {path:"login", component: LoginComponent},
			  {path:'**', component:LoginComponent},// '**' có ý nghĩa nếu không có path nào khớp với các path đã khai báo trong routes 
												//thì mặc định sẽ chuyển hướng load LoginComponent
];
// canActivate:[AuthGuard],
// children:[
//   {path:"data",component:MainComponent},          
//   {path:"item",component:ProductlComponent},        
//   ]},
// {path:'**', component:LoginComponent},
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
