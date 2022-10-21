import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/product';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  product: Product;
  productForm: FormGroup;

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
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

  deleteProduct(id: number): void {
    this.productService.deleteProduct(id);
    this.router.navigate(['/product/list']);
  }
}
