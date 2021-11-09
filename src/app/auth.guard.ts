import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  private isLoggedIn: any;

  constructor() {
    this.isLoggedIn = false;
  }

  setUserLoggedIn() {
    this.isLoggedIn = true;
  }

  setUserLoggedOut() {
    this.isLoggedIn = false;
  }

  getUserLoggedIn() {
    return this.isLoggedIn;
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.isLoggedIn;
  }
  
}
