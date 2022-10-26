import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductListComponent} from '../product/product-list/product-list.component';
import {ProductCreateComponent} from '../product/product-create/product-create.component';
import {ProductModule} from '../product/product.module';


const routes: Routes = [
  {path: 'product', loadChildren: () => ProductModule},
  // {path: 'category', loadChildren: () => CategoryModule},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
