import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

import { Stock, StockSnapshot } from './api.model';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

  getStockList(): Observable<Stock[]> {
    return this.http.get<Stock[]>('/api/stocks')
      .catch(this.errorHandler);
  }

  getStockHistory(stockName: string): Observable<StockSnapshot[]> {
    return this.http.get<StockSnapshot[]>(`/api/history/${stockName}`)
      .catch(this.errorHandler);
  }

  errorHandler(error: HttpErrorResponse) {
    return Observable.throw(error);
  }

}
