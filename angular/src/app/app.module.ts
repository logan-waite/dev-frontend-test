import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { ApiService } from './api.service';
import { AppComponent } from './app.component';
import { StocksComponent } from './stocks/stocks.component';
import { HistoryComponent } from './history/history.component';
import { PurchasedComponent } from './purchased/purchased.component';


@NgModule({
  declarations: [
    AppComponent,
    StocksComponent,
    HistoryComponent,
    PurchasedComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
