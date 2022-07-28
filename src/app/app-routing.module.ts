import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
  import { HomeComponent } from './home/home.component';
  import { WelcomeComponent } from './welcome/welcome.component';

  const routes: Routes = [
  {path:"home" , component:HomeComponent},
  {path:"login" , component: LoginComponent},
  {path:"welcome", component:WelcomeComponent},
  {path:'', redirectTo:'/home' , pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
}) 
export class AppRoutingModule { }
