import { Component } from '@angular/core';
import { Stock } from '../api.model';

@Component({
  selector: 'app-purchased',
  templateUrl: './purchased.component.html',
  styleUrls: ['./purchased.component.css']
})
export class PurchasedComponent {
  purchasedStocks: Stock[];

  constructor() { }
}
