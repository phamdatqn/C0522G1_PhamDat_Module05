import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CustomerListComponent} from './customer-list/customer-list.component';
import {FacilityComponent} from './facility/facility.component';
import {CustomerCreateComponent} from './customer-create/customer-create.component';
import {CustomerUpdateComponent} from './customer-update/customer-update.component';
import {CreateFacilityComponent} from './facility-create/create-facility.component';
import {UpdateFacilityComponent} from './facility-update/update-facility.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'customer/list', component: CustomerListComponent
  },
  {
    path: 'customer/create', component: CustomerCreateComponent
  },
  {
    path: 'customer/update', component: CustomerUpdateComponent
  },
  {
    path: 'facility/list', component: FacilityComponent
  },
  {
    path: 'facility/create', component: CreateFacilityComponent
  },
  {
    path: 'facility/update', component: UpdateFacilityComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
