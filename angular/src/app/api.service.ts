import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {throwError,  Observable } from 'rxjs';
import {catchError} from 'rxjs/operators';

import { Stock, StockSnapshot } from './api.model';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

  getStockList(): Observable<Stock[]> {
    return this.http.get<Stock[]>('/api/stocks')
      .pipe(catchError(this.errorHandler));
  }

  getStockHistory(stockName: string): Observable<StockSnapshot[]> {
    return this.http.get<StockSnapshot[]>(`/api/history/${stockName}`)
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error);
  }

}
