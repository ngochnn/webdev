import { Component, OnInit } from '@angular/core';
import { StatusloginService } from '../services/statuslogin.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public authService: AuthService,private userService:StatusloginService) { }
  displayName:string="";
  ngOnInit(): void {
    this.userService.getCurrentUser()
					.then(user=> this.displayName = user.displayName!=null? user.displayName: user.email);
		
				console.log(this.displayName);
  }
  Logout(){
    this.authService.logout();
    location.href="/";
  }

}
