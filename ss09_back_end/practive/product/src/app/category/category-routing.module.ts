import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CategoryRoutingRoutingModule} from './category-routing-routing.module';
import {CategoryCreateComponent} from './category-create/category-create.component';
import {CategoryListComponent} from './category-list/category-list.component';
import {CategoryUpdateComponent} from './category-update/category-update.component';
import {CategoryDeleteComponent} from './category-delete/category-delete.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    CategoryListComponent,
    CategoryCreateComponent,
    CategoryUpdateComponent,
    CategoryDeleteComponent
  ],
  imports: [
    CommonModule,
    CategoryRoutingRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class CategoryRoutingModule {
}
