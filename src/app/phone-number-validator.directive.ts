import { Directive } from '@angular/core';
import {AbstractControl, NG_VALIDATORS, Validators} from '@angular/forms';

@Directive({
  selector: '[appPhoneNumberValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: PhoneNumberValidatorDirective,
    multi: true
  }]
})
export class PhoneNumberValidatorDirective implements Validators {

  constructor() { }

  validate(control: AbstractControl): {[key: string]: any} | null {
    console.log(control.value);
    if (control.value && control.value.length !== 10) {
      return { phoneNumberInvalid: true };
    }
    return null;
  }



}
