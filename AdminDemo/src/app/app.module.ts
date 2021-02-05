import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire';//cái thêm vô 
		import { AngularFirestoreModule } from '@angular/fire/firestore';
		import { environment } from '../environments/environment';
    import { AngularFireAuthModule } from '@angular/fire/auth';
    
    import { HttpClientModule } from '@angular/common/http';

    import {ReactiveFormsModule} from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductlComponent } from './productl/productl.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import {FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
@NgModule({
  declarations: [
    AppComponent,
    ProductlComponent,
    SidebarComponent,
    HomeComponent,
    MainComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    MainpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),//cái thêm vô
			AngularFirestoreModule,
      AngularFireAuthModule,
      
      HttpClientModule,

      ReactiveFormsModule,

      BrowserAnimationsModule,
      MatIconModule,
      // RouterModule.forChild([
      //   {path:'login',
      //   component:LoginComponent
      // },
      // {path:'main',
      //   component:MainComponent
      // },
      // {path:'signup',
      //   component:SignupComponent
      // }
      // ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
