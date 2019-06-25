import { Injectable } from '@angular/core';
import { User } from '../login/user';

@Injectable({
  providedIn:'root'
})
export class AccountService {

  constructor() { }
  loggedIn=false;
  login(user:User):boolean {
    if(user.userName=='Yunus' && user.password=='321'){
      this.loggedIn=true;
      localStorage.setItem("isLogged","true");
      return true;
    }
    return false;
  }

  isLoggedIn(){
    return this.loggedIn;
  }

  logOut(){
    localStorage.removeItem("isLogged");
    this.loggedIn=false;
  }

}
