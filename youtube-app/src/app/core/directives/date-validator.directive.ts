
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';


export function DateValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {

    const date = new Date(control.value).getTime()
    const today = new Date().getTime()

    const errors: ValidationErrors = {}
    if (!control.value || !(control.value instanceof Date)) errors['invalidDate'] = true
    if (date > today) errors['futureDate'] = true

    return Object.keys(errors).length > 0 ? errors : null;
  };
}
