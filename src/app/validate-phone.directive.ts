import {
  Validator,
  ValidationErrors,
  AbstractControl,
  NG_VALIDATORS
} from '@angular/forms';
import { Directive } from '@angular/core';

@Directive({
  selector: '[appValidatePhone]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: ValidatePhoneDirective, multi: true }
  ]
})
export class ValidatePhoneDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors {
    if (control.get('homePhone') === null || control.get('officePhone') === null) {
      return null;
    }
    if (control.get('homePhone').value === control.get('officePhone').value) {
      return { homeOfficePhoneSame: true };
    }
    return null;
  }

  constructor() {}
}
