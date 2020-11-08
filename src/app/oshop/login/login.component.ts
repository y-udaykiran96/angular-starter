import { Component, OnInit } from '@angular/core';
import { SocialUser } from 'angularx-social-login';
import { AuthService } from '../shared/auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: SocialUser;
  loggedIn: boolean;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.setAuthState();
  }

  login() {
    this.authService.signInWithFB()
  }


}
