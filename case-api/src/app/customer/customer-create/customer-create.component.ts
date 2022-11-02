import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {Title} from '@angular/platform-browser';
import {CustomerService} from '../../service/customer.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  createCustomerFormGroup: FormGroup = new FormGroup({
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

  constructor(private title: Title,
              private customerService: CustomerService,
              private router: Router) {
    this.title.setTitle('THÊM MỚI KHÁCH HÀNG');
  }

  ngOnInit(): void {
  }

  private checkAge(abstractControl: AbstractControl): any {
    const formYear = Number(abstractControl.value.substr(0, 4));
    const curYear = new Date().getFullYear();
    return curYear - formYear >= 18 ? null : {invalid18: true};
  }

  saveCreate() {
    console.log(this.createCustomerFormGroup.value);
    const product = this.createCustomerFormGroup.value;
    this.customerService.saveCreate(product).subscribe();
    // @ts-ignore
    Swal.fire({
      position: 'top-mid',
      icon: 'success',
      title: 'Thêm mới thành công !',
      showConfirmButton: false,
      timer: 1500
    });
    this.router.navigateByUrl('/customer/list');
  }
}
