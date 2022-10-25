import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacilityRoutingModule } from './facility-routing.module';
import {FacilityComponent} from './facility-list/facility.component';
import {UpdateFacilityComponent} from './facility-update/update-facility.component';
import {CreateFacilityComponent} from './facility-create/create-facility.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    FacilityComponent,
    UpdateFacilityComponent,
    CreateFacilityComponent
  ],
  imports: [
    CommonModule,
    FacilityRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FacilityModule { }
