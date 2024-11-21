import { Directive, HostListener, Input, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlightOnFocus]',
  standalone: true
})
export class HighlightOnFocusDirective {
  @Input('appHighlightOnFocus') highlightColor: string = '#ffff99'; // Default highlight color

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('focus') onFocus() {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', this.highlightColor);
  }

  @HostListener('blur') onBlur() {
    this.renderer.removeStyle(this.el.nativeElement, 'background-color');
  }
}
