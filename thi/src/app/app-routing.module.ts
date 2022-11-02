import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SotietkiemListComponent} from './sotietkiem/sotietkiem-list/sotietkiem-list.component';
import {SotietkiemCapnhatComponent} from './sotietkiem/sotietkiem-capnhat/sotietkiem-capnhat.component';


const routes: Routes = [
  {
    path: 'sotietkiem/list',
    component: SotietkiemListComponent
  },
  {
    path: 'sotietkiem/update/:id',
    component: SotietkiemCapnhatComponent
  }
  // {
  //   path: 'delete/:id',
  //   component: ProductDeleteComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
