import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { GeneratorService } from '../../core/services/generator.service';

@Directive({
  selector: '[appBorderOnMouseLeave]'
})
export class BorderOnMouseLeaveDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2, private generatorService: GeneratorService) { }

  @HostListener('click')
  onMouseLeave() {
    const style = '5px solid ' + this.generatorService.randomColor();
    this.renderer.setStyle(this.elementRef.nativeElement, 'border', style);
  }
}
