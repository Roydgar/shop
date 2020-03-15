import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appElementHighlight]'
})
export class ElementHighlightDirective {

  @Input()
  private color: string;

  constructor(private elementRef: ElementRef) {
  }

  @HostBinding('style.fontWeight')
  get fontWeight() {
    return 'bold';
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.highlight(this.color);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.elementRef.nativeElement.style.backgroundColor = color;
  }

}
