import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api.service';
import { StockSnapshot } from '../api.model';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  @Input()
  stockName: string;

  history: StockSnapshot[];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getStockHistory(this.stockName).subscribe((history: StockSnapshot[]) => {
      this.history = history;
    });
  }

}
