import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appColorizr]'
})
export class ColorizrDirective {

  constructor( private elementRef: ElementRef, private renderer: Renderer2 ) { 
    console.log("Inside Constructor");
    console.log(this.elementRef.nativeElement);

    let divEl = this.elementRef.nativeElement;
    
    //js way
    // divEl.style.backgroundColor = 'red';

    //angular way
    this.renderer.setStyle(divEl, 'backgroundColor', 'yellow');
    this.renderer.setStyle(divEl, 'height', '100px');
  }

  
}
