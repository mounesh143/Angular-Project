import { Directive } from '@angular/core';
import { Validator, FormControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: 'com-input[requiredd]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: InputRequireddDirective, multi: true }
  ]
})
export class InputRequireddDirective implements Validator {

  validate(c: FormControl) {
    if (c.value === '') {
      return {
        'requiredd': 'This field is requiredd'
      };
    }
    return null;
  }
  constructor() {
  }
}
