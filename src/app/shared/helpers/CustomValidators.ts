import { Validators, ValidatorFn, AbstractControl, FormGroup } from '@angular/forms'
import * as moment from 'moment'

export class CustomValidators extends Validators {
  static minimumAge(n: number): ValidatorFn {
    return (c: AbstractControl): { [key: string]: boolean } | null => {
      const value: Date = c.value
      if (!c.value) return null
      let isAbove = moment().subtract(n, 'year') >= moment(value)
      return isAbove ? null : { underAge: true }
    }
  }

  static mustMatch(c: AbstractControl): { [key: string]: boolean } {
    if (c.get('password1').value !== c.get('password2').value) {
      return { nomatch: true }
    } else {
      return null
    }
  }
}
