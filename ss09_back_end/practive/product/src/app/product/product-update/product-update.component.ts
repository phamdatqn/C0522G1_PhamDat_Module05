import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../service/product.service';
import {Product} from '../../model/product';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {Category} from '../../model/category';
import {CategoryService} from '../../service/category.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  product: Product;
  categoryList: Category[];
  id: number;
  productForm: FormGroup;

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private categoryService: CategoryService) {}

  ngOnInit(): void {
    const id = Number(this.activatedRoute.snapshot.params.id);
    this.categoryService.getAll().subscribe(value => {
      this.categoryList = value;
    });
    this.productService.findById(id).subscribe(value => {
      this.product = value;
      this.productForm.patchValue(this.product);
    });
    this.productForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl(''),
      price: new FormControl(''),
      description: new FormControl(''),
      category: new FormControl(),
    });
  }

  saveUpdateProduct() {
    this.productService.saveUpdate(this.productForm.value).subscribe();
    this.router.navigateByUrl('/product/list');
  }

  compareWithId(item1, item2) {
  return item1 && item2 && item1.id === item2.id;
  }
}
