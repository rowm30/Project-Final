import { Component, OnInit } from '@angular/core';
import { MemberService } from "../../shared/member.service";
import { Member } from "../../shared/member.model";

@Component({
  selector: 'app-technojam',
  templateUrl: './technojam.component.html',
  styleUrls: ['./technojam.component.css'],
  providers:[MemberService]
})
export class TechnojamComponent implements OnInit {

  constructor(public memberService: MemberService) { }

  ngOnInit(): void {
    this.refreshMemberList();
  }

  refreshMemberList(){
    this.memberService.getMemberList().subscribe((res)=>{
      this.memberService.members = res as Member[];
    });
  }
}
