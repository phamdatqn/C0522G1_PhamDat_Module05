import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {Customer} from '../model/customer';
import {ActivatedRoute} from '@angular/router';
import {CustomerService} from '../service/customer.service';

@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.css']
})
export class CustomerUpdateComponent implements OnInit {
  customer: Customer;
  updateCustomerFormGroup: FormGroup;
  constructor(private customerService: CustomerService,
              private activatedRoute: ActivatedRoute) {
    const id = Number(this.activatedRoute.snapshot.params.id);
    this.customer = this.customerService.findById(id);
    this.updateCustomerFormGroup = new FormGroup({
      name: new FormControl('', Validators.required),
      // name: new FormControl('', [Validators.required,
      //   Validators.pattern('^([\\p{Lu}][\\p{Ll}]{1,8})(\\s([\\p{Lu}]|[\\p{Lu}][\\p{Ll}]{1,10})){0,5}$')]),
      dateOfBirth: new FormControl('', this.checkAge),
      gender: new FormControl('', Validators.required),
      idCard: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      address: new FormControl('', Validators.required),
      // address: new FormControl('', [Validators.required, Validators.pattern(
      //   '^([\\\\p{Lu}][\\\\p{Ll}]{1,8})(\\\\s([\\\\p{Lu}]|[\\\\p{Lu}][\\\\p{Ll}]{1,10})){0,5}$')]),
      customerType: new FormControl('')
    });
    this.updateCustomerFormGroup.patchValue(this.customer);

  }

  ngOnInit(): void {
      }
  private checkAge(abstractControl: AbstractControl): any {
    const formYear = Number(abstractControl.value.substr(0, 4));
    const curYear = new Date().getFullYear();
    return curYear - formYear >= 18 ? null : {invalid18: true};
  }

  giveFormValue() {
    console.log(this.updateCustomerFormGroup.value);
  }
}
