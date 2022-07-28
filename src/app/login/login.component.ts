import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = "";
  password = "";
  errorMsg = "";
  constructor(private auth:AuthService,private router:Router) { }

  ngOnInit(): void {
  }
  login(){
    if(this.username.length == 0){
      this.errorMsg = "UserName is required" 
    } else if(this.password.length == 0){
      this.errorMsg = "Password is required"
    } else {
      this.errorMsg = "";
     
      let res = this.auth.login(this.username,this.password);
  
      if(res===200){
          this.router.navigate(['welcome'])
          }
      if(res===403){
        this.errorMsg = "Invalid Credentials " 
      }
    }
  }
  
}
