import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appLoginbutton]'
})
export class LoginbuttonDirective {

  boxVisible : boolean = true;
  
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseclick')mouseover(eventData: Event){
    this.renderer.setStyle(this.elRef.nativeElement, 'visibility', 'hidden')
  }

  closeBox(){
    this.boxVisible = false;
  }
}
