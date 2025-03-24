import { InputFormatDirective } from './input-format.directive';
import { ElementRef } from '@angular/core';

describe('InputFormatDirective', () => {
  let directive: InputFormatDirective;
  let el: ElementRef;

  beforeEach(() => {
    el = {
      nativeElement: {
        value: ''
      }
    } as ElementRef;
    directive = new InputFormatDirective(el);
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  it('should replace dashes with spaces in input value', () => {
    el.nativeElement.value = 'Green-Lantern';
    directive.onInput({} as Event);
    expect(el.nativeElement.value).toBe('Green Lantern');
  });
});
