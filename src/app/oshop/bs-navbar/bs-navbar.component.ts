import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.scss']
})
export class BsNavbarComponent implements OnInit {

  appUser = { name: 'Username' };
  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.auth.appUser$.subscribe(user => {
      this.appUser = user
    })
  }

  logout() {
    this.auth.logout();
  }

}
