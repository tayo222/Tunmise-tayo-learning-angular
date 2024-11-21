import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoverHighlight]',
  standalone: true // Indicates this directive can be used without a parent module
})
export class HoverHighlightDirective {
  // Input to accept a custom color
  @Input('appHoverHighlight') highlightColor: string = 'yellow'; // Default color

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  // Listener for mouse entering the element
  @HostListener('mouseenter') onMouseEnter() {
    this.setHighlight(this.highlightColor);
  }

  // Listener for mouse leaving the element
  @HostListener('mouseleave') onMouseLeave() {
    this.setHighlight(null); // Reset the highlight
  }

  // Helper method to set the background color
  private setHighlight(color: string | null) {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', color);
  }
}
