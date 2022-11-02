import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SotietkiemListComponent} from './sotietkiem/sotietkiem-list/sotietkiem-list.component';
import {SotietkiemCapnhatComponent} from './sotietkiem/sotietkiem-capnhat/sotietkiem-capnhat.component';
import {SoTietKiemTaoMoiComponent} from './sotietkiem/so-tiet-kiem-tao-moi/so-tiet-kiem-tao-moi.component';


const routes: Routes = [
  {
    path: 'sotietkiem/list',
    component: SotietkiemListComponent
  },
  {
    path: 'sotietkiem/update/:id',
    component: SotietkiemCapnhatComponent
  },
  {
    path: 'sotietkiem/create',
    component: SoTietKiemTaoMoiComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
