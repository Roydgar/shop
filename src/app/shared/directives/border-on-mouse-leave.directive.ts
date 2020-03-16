import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBorderOnMouseLeave]'
})
export class BorderOnMouseLeaveDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('click')
  onMouseLeave() {
    const randomColor = '#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6);
    this.renderer.setStyle(this.elementRef.nativeElement, 'border', '5px solid ' + randomColor);
  }
}
