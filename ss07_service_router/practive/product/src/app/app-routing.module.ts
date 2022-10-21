import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductComponent} from './product/product.component';
import {ProductCreateComponent} from './product/product-create/product-create.component';
import {ProductUpdateComponent} from './product/product-update/product-update.component';
import {ProductDeleteComponent} from './product/product-delete/product-delete.component';


const routes: Routes = [
  {path: 'product/list', component: ProductComponent},
  {path: 'product/create', component: ProductCreateComponent},
  {path: 'product/update/:id', component: ProductUpdateComponent},
  {path: 'product/delete/:id', component: ProductDeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
