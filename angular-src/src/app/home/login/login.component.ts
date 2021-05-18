import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    trigger('showLogin', [
      state('hidden', style({
        opacity: 0,
        transform: 'translateY(0)'
      })),
      state('visible',style({
        opacity:1,
        transform: 'translateY(100px)'
      })),
      transition('hidden=>visible',animate(300))
    ]

    )] 
})
export class LoginComponent implements OnInit {

  boxVisible: boolean = true;

  constructor() { }
  
  cancel(){
    this.boxVisible = false;
  }

  state = 'hidden';

  ngOnInit(): void {
  }



}
