import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Account } from '../models/item';
import { AccountService } from '../services/account.service';
import { database } from 'firebase';
import { MustMatch } from '../models/CustomValidator';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private fb: FormBuilder, private accService: AccountService, private userService: UserService) {}
  signupForm: FormGroup


  ngOnInit(): void {
    this.signupForm = this.fb.group({
      // FULLNAME:['',Validators.required], 
      USERNAME:['',[Validators.required]],
      EMAIL:['',[Validators.email,Validators.required]],
      PASSWORD:['',[Validators.required]],
      CONFIRMPASSWORD:['',[Validators.required]]},
      {
        validator: MustMatch('PASSWORD', 'CONFIRMPASSWORD')
      });
      /*
      password:['', Validators.required],
      confirmpassword:['', Validators.required]
      },{
      validator: MustMatch('password', 'confirmpassword')//hàm tự viết SV có thể bỏ qua không kiểm tra cũng được
      */
    
    }

  onCreate(){

    let acc = new Account();
    // acc.FULLNAME = this.signupForm.controls["FULLNAME"].value;
    acc.USERNAME = this.signupForm.controls["USERNAME"].value;
    acc.EMAIL = this.signupForm.controls["EMAIL"].value;
    acc.PASSWORD = this.signupForm.controls["PASSWORD"].value;
    console.log(acc);
    this.accService.insertAccount(acc).subscribe(data=>(console.log(data)))
  }

  createAccount(){
    let acc = new Account();
    // acc.FULLNAME = this.signupForm.controls["FULLNAME"].value;
    acc.USERNAME = this.signupForm.controls["USERNAME"].value;
    acc.EMAIL = this.signupForm.controls["EMAIL"].value;
    acc.PASSWORD = this.signupForm.controls["PASSWORD"].value;
      this.userService.signup(acc.EMAIL,acc.PASSWORD).then(data=>{console.log(data)})
  }
}
