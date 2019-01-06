import {Directive, ElementRef, HostListener, OnInit} from '@angular/core';

@Directive({
  selector: '[appHeightEqualsWidth]'
})
export class HeightEqualsWidthDirective implements OnInit{
  private element: HTMLElement;

  constructor(private el: ElementRef) {
  }

  ngOnInit(): void {
    this.element = this.el.nativeElement;
    this.setHeightEqualsWidth(this.element);
  }

  @HostListener('window:resize', ['$event.target']) onResize() {
    this.setHeightEqualsWidth(this.element);
  }
  setHeightEqualsWidth(el: HTMLElement) {
    el.style.height = el.clientWidth + 'px';
  }

}
