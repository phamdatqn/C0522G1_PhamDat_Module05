import {Component, OnInit} from '@angular/core';
import {Category} from '../../model/category';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {CategoryService} from '../../service/category.service';

@Component({
  selector: 'app-category-update',
  templateUrl: './category-update.component.html',
  styleUrls: ['./category-update.component.css']
})
export class CategoryUpdateComponent implements OnInit {
  category: Category;
  id: number;
  productForm: FormGroup;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    const id = Number(this.activatedRoute.snapshot.params.id);
    this.categoryService.findById(id).subscribe(value => {
      this.category = value;
      this.productForm.patchValue(this.category);
    });
    this.productForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl('')
    });
  }

  saveUpdateCategory() {
    this.categoryService.saveUpdate(this.productForm.value).subscribe();
    this.router.navigateByUrl('/category/list');
  }

}
