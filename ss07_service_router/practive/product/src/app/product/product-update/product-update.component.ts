import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../service/product.service';
import {Product} from '../../model/product';
import {ActivatedRoute} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  product: Product;
  productForm: FormGroup;

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute) {
    const id = Number(this.activatedRoute.snapshot.params.id);
    this.product = this.productService.findById(id);
    this.productForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl(''),
      price: new FormControl(''),
      description: new FormControl(''),
    });
    this.productForm.patchValue(this.product);
  }

  ngOnInit(): void {
  }

  updateProduct(id: number): void {
    const product = this.productForm.value;
    this.productService.updateProduct(id, product);
  }
}
