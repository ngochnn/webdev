import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Account, UserI } from '../models/item';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private fb: FormBuilder, public authService: AuthService, private router: Router, ) { }
  loginForm=new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',Validators.required),
  })

  ngOnInit(): void {
  }

  tryGoogleLogin() {
    this.authService.LoginGmail()
      .then(res => {
        this.router.navigate(["/admin/item"]);
        // location.href = "/admin/item"
      }).catch(errr => {
        console.log(errr);

      })
  }
  // tryFirebaseLogin() {
  //   //  let acc = new Account();
  //   //  acc.EMAIL = this.loginForm.controls["USERNAME"].value;
  //   //  acc.PASSWORD = this.loginForm.controls["PASSWORD"].value;
  //   //  this.authService.siginFirebase(acc.EMAIL,acc.PASSWORD).then(data=>{console.log(data)})
  //   let email = this.loginForm.controls["EMAIL"].value;
  //   let password = this.loginForm.controls["PASSWORD"].value;
  //   this.authService.siginFirebase(email, password).then(res => {
  //     console.log('dang nhap thanh cong');
  //     location.href = "/home"
  //   }, err => console.log("loi dang nhap:", +err)
  //   )

  // }

  onLogin(form: UserI){//UserI) la interface
    this.authService
    .loginByFire(form)
    .then(res =>{
      console.log('Successfully', res);
      // location.href = "/admin/item"
      this.router.navigate(["/admin/item"]);

    })
    .catch(err => console.log('error', err));
    // console.log('error', err) =>
  }
}


