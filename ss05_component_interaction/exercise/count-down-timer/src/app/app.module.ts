import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CountDownTimerComponent } from './count-down-timer/count-down-timer.component';

@NgModule({
  declarations: [
    AppComponent,
    CountDownTimerComponent,

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
