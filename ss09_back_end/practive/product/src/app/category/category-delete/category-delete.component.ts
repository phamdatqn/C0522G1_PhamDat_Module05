import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/product';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {CategoryService} from '../../service/category.service';

@Component({
  selector: 'app-category-delete',
  templateUrl: './category-delete.component.html',
  styleUrls: ['./category-delete.component.css']
})
export class CategoryDeleteComponent implements OnInit {
  category: Product;
  categoryForm: FormGroup;

  constructor(private categoryService: CategoryService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    const id = Number(this.activatedRoute.snapshot.params.id);
    this.categoryService.findById(id).subscribe(value => {
      this.category = value;
      this.categoryForm.patchValue(this.category);
    });
    this.categoryForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl(''),
    });
  }

  ngOnInit(): void {
  }

  deleteProduct(id: number): void {
    this.categoryService.deleteCategory(id).subscribe();
    alert('Đã xóa thành công !');
    this.router.navigate(['/category/list']);
  }
}
