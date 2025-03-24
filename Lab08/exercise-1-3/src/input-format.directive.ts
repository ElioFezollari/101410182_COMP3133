import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appInputFormat]',  
  standalone: true
})
export class InputFormatDirective {

  constructor(private el: ElementRef) { }
  @HostListener('input', ['$event'])
  onInput(event: Event): void {
    const inputElement = this.el.nativeElement as HTMLInputElement;
    inputElement.value = inputElement.value.replace(/-/g, ' ');
  }
  @HostListener('blur', ['$event'])
  onBlur(event: Event): void {
    const inputElement = this.el.nativeElement as HTMLInputElement;
    inputElement.value = inputElement.value.toUpperCase();
  }
}
