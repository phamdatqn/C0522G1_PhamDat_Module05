import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FacilityComponent} from './facility-list/facility.component';
import {CreateFacilityComponent} from './facility-create/create-facility.component';
import {UpdateFacilityComponent} from './facility-update/update-facility.component';


const routes: Routes = [
  {
    path: 'list', component: FacilityComponent
  },
  {
    path: 'create', component: CreateFacilityComponent
  },
  {
    path: 'update/:id', component: UpdateFacilityComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacilityRoutingModule { }
