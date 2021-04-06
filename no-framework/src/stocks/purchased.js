import {StocksApi} from "./stocks.api.js";

var api = new StocksApi('http://localhost:4000');

function showPurchasedStocks() {
  const host = document.getElementById('purchased-stocks');
  host.innerText = 'TODO: List purchased stocks';
}

showPurchasedStocks();
