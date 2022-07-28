import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
    
  myfunc(val:any){
    let data:any = localStorage.getItem("movielist");
    if(data){
      data = JSON.parse(data);
      data.push(val)
      localStorage.setItem("movielist",JSON.stringify(data))  
      return true;
    }else{
      localStorage.setItem("movielist",JSON.stringify([val]))  
      return true;
    }
  }
  movieList=[{
    movie:"bhool bhulaiyaa 2",
    cast:"Kartik Aaryan Anuskha Sharma",
    rating:4,
  },{
    imgFile:'./assets/kgf.jpg',
    movie:"KGF2",
    cast:"Yash Rocky",
    rating:4,
    director:"RRJ rajamauli"
  },{
    imgFile:'./assets/kalank.jpg',
    movie:"Wanted",
    cast:"Salman Khan",
    rating:4,
    director:"BONNY KAPOOR"
  },{
    imgFile:'./assets/soty2.webp',
    movie:"Bagrangi Bhaijaan",
    cast:"Salman Khan",
    rating:4,
    Director:"SALMAN KHAN FILMS"
  },{    
    imgFile:'./assets/tamasha.jpg',
    movie:"Zero",
    cast:"Shahrukh Khan",
    rating:4,
    Director:"RED CHILLIS ENTERTAINEMNT"
  
  },{
     movie:"Matru ki Bijli Ka Mandola",
    cast:"Anuskha Sharma",
    rating:3,
    Director:"Doney Hotstar,maclatrn"
  },{
    movie:"Rockstar",
  cast:"Ranbeer Kapoor",
  rating:4.5,
  },{
    movie:"Jodha Akbar",
  cast:"Shahrukh Khan",
  rating:2.5,
  },{
    movie:"Padmawat",
  cast:"Shahrukh Khan",
  rating:4,
  },{
    movie:"83",
  cast:"Ranveer Singh",
  rating:3,
  }
]
  }

