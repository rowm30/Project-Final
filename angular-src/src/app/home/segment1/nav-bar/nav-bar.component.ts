import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})



export class NavBarComponent implements OnInit {

  constructor() { }

  

  ngOnInit(): void {
  }

  boxVisible: boolean = false;

  showLogin(){
    this.boxVisible = true;
  }

  cancel(){
    this.boxVisible = false;
  }


}
