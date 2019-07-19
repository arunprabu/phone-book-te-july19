import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(){

  }
  
  canActivate(){
    //connect to service 
    /*if(isAuthenticated){
      return true;
    }else{
      //redirect the user to login page 
      return false;
    } */

    // based on that you send the resp; 
    return true;
  }

  //util methods come here

}
