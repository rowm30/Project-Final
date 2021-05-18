import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appNewlogin]'
})
export class NewloginDirective {

  constructor() { }
  
  boxVisible:boolean = true;

  
  
}
