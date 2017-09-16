import { Directive, Input, HostListener, HostBinding } from '@angular/core';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: 'img[default]',
})
export class DefaultImageDirective {
  @Input() default: string;

  @HostBinding('attr.src') @Input() src;
  @HostListener('error') updateSrc() {
    this.src = this.default;
  }
}
