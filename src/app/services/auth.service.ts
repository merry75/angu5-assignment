import { Injectable } from "@angular/core";

import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/map";
import { LoginInfo } from "../model/login-info";

/**
 * This service validates login data against hardcoded values below
 * If login is successful username is stored in Local Storage and is used later for authorization checks
 */
@Injectable()
export class AuthService {
  private usernameKey = "ben-username";

  private username = "ben";
  private password = "1234";

  public login(loginInfo: LoginInfo): Promise<Response> {
    return new Promise((resolve, reject) => {
      if (
        loginInfo.username === this.username &&
        loginInfo.password === this.password
      ) {
        // save username in Local Storage on successful login
        localStorage.setItem(this.usernameKey, loginInfo.username);
        resolve();
      } else {
        reject();
      }
    });
  }

  public logout(): void {
    // delete username from Local Storage
    localStorage.removeItem(this.usernameKey);
  }

  public isLoggedIn(): boolean {
    // check if username is saved in Local Storage
    return !!localStorage.getItem(this.usernameKey);
  }

  public getLoggedInUser(): String {
    return localStorage.getItem(this.usernameKey);
  }
}
