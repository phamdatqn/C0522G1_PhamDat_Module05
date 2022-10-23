import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  createCustomerFormGroup: FormGroup;
  constructor(private title: Title) {
    this.title.setTitle('THÊM MỚI KHÁCH HÀNG');
    this.createCustomerFormGroup = new FormGroup({
      name: new FormControl('', Validators.required),
      // name: new FormControl('', [Validators.required,
      //   Validators.pattern('^([\\p{Lu}][\\p{Ll}]{1,8})(\\s([\\p{Lu}]|[\\p{Lu}][\\p{Ll}]{1,10})){0,5}$')]),
      dateOfBirth: new FormControl('', this.checkAge),
      gender: new FormControl(true),
      idCard: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      address: new FormControl('', Validators.required),
      // address: new FormControl('', [Validators.required, Validators.pattern(
      //   '^([\\\\p{Lu}][\\\\p{Ll}]{1,8})(\\\\s([\\\\p{Lu}]|[\\\\p{Lu}][\\\\p{Ll}]{1,10})){0,5}$')]),
      customerType: new FormControl('')
    });
  }
  ngOnInit(): void {
  }

  private checkAge(abstractControl: AbstractControl): any {
    const formYear = Number(abstractControl.value.substr(0, 4));
    const curYear = new Date().getFullYear();
    return curYear - formYear >= 18 ? null : {invalid18: true};
  }

  giveFormValue() {
    console.log(this.createCustomerFormGroup.value);
  }
}
