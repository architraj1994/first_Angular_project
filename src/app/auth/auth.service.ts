import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  login(uname:String,pword:String){
    if(uname==="Archit" || "Niranjan" || "Rajesh" || "Shubham" || "Prashant " && pword==="12345678"){
      return 200
    } else {
      return 403
    }
  }
}
