import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FacilityComponent } from './facility/facility.component';
import { UpdateFacilityComponent } from './facility-update/update-facility.component';
import { CreateFacilityComponent } from './facility-create/create-facility.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    FacilityComponent,
    UpdateFacilityComponent,
    CreateFacilityComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
