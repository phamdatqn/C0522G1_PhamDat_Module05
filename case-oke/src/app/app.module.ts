import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FacilityComponent } from './facility/facility.component';
import { UpdateFacilityComponent } from './facility-update/update-facility.component';
import { CreateFacilityComponent } from './facility-create/create-facility.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerUpdateComponent } from './customer-update/customer-update.component';
import { CustomerCreateComponent } from './customer-create/customer-create.component';
import { ContractCreateComponent } from './contract-create/contract-create.component';
import { ContractListComponent } from './contract-list/contract-list.component';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    FacilityComponent,
    UpdateFacilityComponent,
    CreateFacilityComponent,
    CustomerListComponent,
    CustomerUpdateComponent,
    CustomerCreateComponent,
    ContractCreateComponent,
    ContractListComponent,
  ],
    imports: [
        BrowserModule,
        RouterModule,
        FormsModule,
        AppRoutingModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
