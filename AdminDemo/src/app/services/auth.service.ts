import { Injectable } from '@angular/core';
//thêm vào
import { AngularFireAuth } from '@angular/fire/auth';
		import * as firebase from 'firebase';
    import { Router } from '@angular/router';
import { UserI } from '../models/item';
  
    
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth,private router:Router) { }

  async LoginGmail(){
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    return await  this.afAuth.signInWithPopup(provider)
            .then(res=>{
              console.log(" da dang nhap thanh cong")
              
      //  this.router.navigate(['home']);
              // this.router.navigate(['home']);
      })
  }
   
  // siginFirebase(email: string, password:string){
  //   return new Promise<any>((resolve, reject) => {
  //     this.afAuth.signInWithEmailAndPassword(email, password)
  //     .then(res => {       
  //       console.log(res)
  //     resolve(res);
  //     //this.sharingService.isUserLoggedIn.next(true);
  //     }, err => reject(err))
  //   })
  // }
  // Auth logic to run auth providers
  
  AuthLogin(provider) {
    return this.afAuth.signInWithPopup(provider)
    .then((_result) => {
        console.log('You have been successfully logged in!')
        alert('login thành công')
        location.href = "/home"

    }).catch((error) => {
        console.log(error)
    })
  }

  loginByFire(user: UserI) {
    const { email, password } = user;
    return this.afAuth
      .signInWithEmailAndPassword(email, password);
  }

  logout(){
    return new Promise<any>((resolve,reject)=>{
      if (this.afAuth.currentUser){
      //if (this.fauth.auth.currentUser){
  
      this.afAuth.signOut();
      resolve("log out");
      }else{
      reject();
      }
    })
  }
}

