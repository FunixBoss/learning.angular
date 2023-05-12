import { AbstractControl, ValidatorFn } from '@angular/forms';

export function min(value: number): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
        var input = parseInt(control.value)
        if(input >= value) {
            return null;
        } else {
            return {
                'min': value
            }
        }
    };
}