import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registrationFormGroup: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
    this.registrationFormGroup = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      passwordGroup: new FormGroup(
        {
          password: new FormControl('', Validators.minLength(6)),
          confirmPassword: new FormControl('', Validators.minLength(6))
        }, this.checkConfirmPass),
      country: new FormControl('', Validators.required),
      age: new FormControl('', this.checkAge),
      gender: new FormControl('', Validators.required),
      phone: new FormControl('', [Validators.pattern('^\\+84\\d{9,10}$'), Validators.required])
    });
  }

  checkAge(abstractControl: AbstractControl): any {
    const formYear = Number(abstractControl.value.substr(0, 4));
    const curYear = new Date().getFullYear();
    return curYear - formYear >= 18 ? null : {invalid18: true};
  }

  checkConfirmPass(checkPass: AbstractControl) {
    const v = checkPass.value;
    return (v.password === v.confirmPassword) ?
      null : {
        passwordNotMatch: true
      };
  }

  giveFormValue() {
    console.log(this.registrationFormGroup.value);
  }
}
