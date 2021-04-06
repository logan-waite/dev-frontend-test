// Import me using: <script type="module" src="stocks.api.js"></script>

class StocksApi {

  host;

  constructor(host) {
    this.host = host;
  }

  getStockList() {
    return fetch(`${this.host}/api/stocks`, { method: 'get' })
      .then(response => response.json());
  }

  getStockHistory(stockName) {
    return fetch(`${this.host}/api/history/${stockName}`, { method: 'get' })
      .then(response => response.json());
  }

}

export { StocksApi };

