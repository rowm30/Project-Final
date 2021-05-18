import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { MemberService } from '../shared/member.service'

declare var M: any;

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css'],
  providers: [MemberService]
})
export class AdminPanelComponent implements OnInit {

  constructor(public memberService: MemberService) { }

  ngOnInit(): void {
    this.resetForm();
  }

  onSubmit(form: NgForm) {
    if (form.value._id == "") {
      this.memberService.postMember(form.value).subscribe((res) => {
        this.resetForm(form);
        // this.refreshEmployeeList();
        M.toast({ html: 'Saved successfully', classes: 'rounded' });
      });
    }
    // else {
    //   this.employeeService.putEmployee(form.value).subscribe((res) => {
    //     this.resetForm(form);
    //     this.refreshEmployeeList();
    //     M.toast({ html: 'Updated successfully', classes: 'rounded' });
    //   });
    // }
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.memberService.selectedMember = {
      _id: "",
      name: "",
      batch: "",
      role: "",
      votes: 0
    }
  }

}
