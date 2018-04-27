import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Stock } from '../api.model';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent implements OnInit {
  stocks: Stock[];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getStockList().subscribe((stocks: Stock[]) => {
      this.stocks = stocks;
    });
  }

  countStocks(): Number {
    return this.stocks.length;
  }

}
