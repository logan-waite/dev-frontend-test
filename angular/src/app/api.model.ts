export interface Stock {
  symbol: string;
  company: string;
  price: number;
}

export interface StockSnapshot {
  date: string;
  price: number;
}
