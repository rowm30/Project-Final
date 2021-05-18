import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBannerShadow]'
})
export class BannerShadowDirective implements OnInit {

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(){

  }

  @HostListener('mouseenter')mouseover(eventData: Event){
    this.renderer.setStyle(this.elRef.nativeElement,'opacity','0.5')
  }

  @HostListener('mouseleave')mouseleave(eventData: Event){
    this.renderer.setStyle(this.elRef.nativeElement, 'opacity', '1')
  }

}
