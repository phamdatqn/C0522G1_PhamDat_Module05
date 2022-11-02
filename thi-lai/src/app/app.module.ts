import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SotietkiemCapnhatComponent} from './sotietkiem/sotietkiem-capnhat/sotietkiem-capnhat.component';
import {SotietkiemListComponent} from './sotietkiem/sotietkiem-list/sotietkiem-list.component';
import {HeaderComponent} from './header/header.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { SoTietKiemTaoMoiComponent } from './sotietkiem/so-tiet-kiem-tao-moi/so-tiet-kiem-tao-moi.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SotietkiemListComponent,
    SotietkiemCapnhatComponent,
    SoTietKiemTaoMoiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
