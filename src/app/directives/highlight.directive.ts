import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[backgroundColor]'

})
export class HighlightDirective {
  @Input() color = '';
  @Input() background = '';
  // @Input() appHighlight = '';

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.color, this.background);
  }

  // @HostListener('mouseleave') onMouseLeave() {
  //   this.highlight('', '');
  // }
  // @HostListener('onClick') onClick() {
  //   this.highlight(this.background,'');
  // }

  // @HostListener('mouseenter') onMouseEnter() {
  //   this.highlight(this.appHighlight && 'red');
  // }


  constructor(
    private el: ElementRef<HTMLElement>
  ) { }

  private highlight(color: string, background:string) {
    this.el.nativeElement.style.color = color;
    this.el.nativeElement.style.backgroundColor = background;
    // this.el.nativeElement.style.backgroundColor = color;
  }

}
