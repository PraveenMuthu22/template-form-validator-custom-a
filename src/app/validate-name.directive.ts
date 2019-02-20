import { Directive } from '@angular/core';
import { AbstractControl, Validator, NG_VALIDATORS, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appValidateName]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: ValidateNameDirective,
      multi: true
    }
  ]
})
export class ValidateNameDirective implements Validator {
  forbidden = ['John', 'Mary', 'Papa'];

  validate(control: AbstractControl): ValidationErrors {
    if (this.forbidden.find(name => name === control.value) !== undefined) {
      return { nameForbidden: true };
    }
    return null;
  }
}
