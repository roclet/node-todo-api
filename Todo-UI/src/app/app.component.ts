import { Component } from '@angular/core';
import {UserService} from './shared/service/user.service';
import { Router, NavigationError, NavigationEnd, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  islogin: boolean = false;
  currentUser = sessionStorage.getItem('isLogin');
  constructor(private userService: UserService, private router: Router){
    if (this.currentUser) {
      this.islogin = true;
    }else{
      this.userService.loginAs$.subscribe(dataOut => {
        if (dataOut) {
          this.islogin = dataOut;
        }
      });
    }
  }

  logout(){
    this.userService.loginAs(false);
    this.router.navigate(['/login']);
  }
}
