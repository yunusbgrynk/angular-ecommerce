import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isCollapsed = true;
  isCollapsed2=true;

  constructor(private accountService:AccountService) {

   }
   isLoggedin(){
    return this.accountService.isLoggedIn();
  }
  logOut(){
    this.accountService.logOut();
  }
  ngOnInit() {

  }


}
