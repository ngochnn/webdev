import { Injectable } from '@angular/core';
//cái thêm vào
import { AngularFireAuth } from '@angular/fire/auth'
import { Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private router: Router,private fauth: AngularFireAuth) { }

  signup(email: string, password:string){
    return new Promise<any>((resolve, reject)=>{
      this.fauth.createUserWithEmailAndPassword(email,password)
      .then(res => {
        this.router.navigate(["/admin/signup"]);
        alert('đăng kí thành công');
        
      }).catch(()=>{
      alert('đăng kí thất bại');
      })
    })
  }
}

