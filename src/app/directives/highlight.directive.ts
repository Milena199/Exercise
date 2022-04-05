import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[backgroundColor]'

})
export class HighlightDirective {
  @Input() color = '';
  @Input() background = '';
  // @Input() appHighlight = '';

  // @HostListener('mouseenter') onMouseEnter() {
  //   this.highlight(this.color, this.background);
  // }

  @HostListener('mouseenter') onClick() {
    this.highlight(this.background, this.color);
  }
  // @HostListener('mouseleave') onMouseLeave() {
  //   this.highlight('', '');
  // }

  constructor(
    private el: ElementRef<HTMLElement>
  ) { }

  private highlight(color: string, background: string) {
    this.el.nativeElement.style.color = color;
    this.el.nativeElement.style.backgroundColor = background;
  }

}
