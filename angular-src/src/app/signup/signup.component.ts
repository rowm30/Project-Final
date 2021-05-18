import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  showSuccessMessage: boolean;
  serverErrorMessages: string;

  constructor(public userService: UserService) { }

  onSubmit(form : NgForm){
    this.userService.postUser(form.value).subscribe(res =>{
      this.showSuccessMessage = true;
      setTimeout(()=> this.showSuccessMessage=false,4000);
      this.resetForm(form);
    },err=>{
      if (err.status === 422) {
        this.serverErrorMessages = err.error.join('</br>');  
      }else{
        this.serverErrorMessages = 'Something went wrong. Please contact admin.';
      }
    })
  }

  resetForm(form: NgForm){
    this.userService.selectedUser = {
      fullName: '',
      email: '',
      password: '',
      admissionNumber:'',
      gender:'',
      department:''
    };
    form.resetForm();
    this.serverErrorMessages='';
  }

  ngOnInit(): void {
  }

}
