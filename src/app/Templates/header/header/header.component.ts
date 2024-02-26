import { Component } from '@angular/core';
import { AuthService } from 'src/app/Services/Auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor( private authService: AuthService){}

  // isLoggedIn = false;
  // isAdmin = false;
  // isJury = false;
  // isMember = false;

  ngOnInit(){
    // this.isLoggedIn = this.authService.isLoggedIn();
    // this.isJury = this.authService.isJury();
    // this.isAdmin =  this.authService.isAdmin();
    // this.isMember = this.authService.isMemeber();
  }

  // logout() {
  //   this.authService.logout();
  // }


}
