import {Component, OnInit} from '@angular/core';
import {Product} from '../model/product';
import {ProductService} from '../service/product.service';

@Component({
  selector: 'app-product-component',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productList: Product[];

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.productList = this.productService.getAll();
  }

}
