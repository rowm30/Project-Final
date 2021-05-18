import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { UserService } from '../../../shared/user.service';

@Component({
  selector: 'app-user-nav',
  templateUrl: './user-nav.component.html',
  styleUrls: ['./user-nav.component.css']
})
export class UserNavComponent implements OnInit {
  userDetails;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.userService.getUserProfile().subscribe(
      res=>{
        this.userDetails = res['user'];
      },
      err=>{

      }
    )
    console.log(this.userDetails);
    
    }

}
