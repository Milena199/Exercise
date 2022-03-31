import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBorderRadius]'
})
export class BorderRadiusDirective {
  @Input() color = '';
  @Input() borderStyle = '';
  constructor(
    private el: ElementRef,
  ) { }
  @HostListener('mouseenter') onClick() {
    this.changeColor(this.color, this.borderStyle)
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.changeColor('','');
  }
  private changeColor(color: string, borderStyle: string) {
    this.el.nativeElement.style.borderColor = color;
    this.el.nativeElement.style.borderStyle = borderStyle;
  }
}
