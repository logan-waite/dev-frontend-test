import {StocksApi} from "./stocks.api.js";

var api = new StocksApi('http://localhost:4000');

function displayStocks() {
  api.getStockList()
    .then( stocks => {
      // clear existing
      const host = document.getElementById('stock-list')
      while (host.firstChild) {
        host.removeChild(host.firstChild)
      }

      stocks.forEach( stock => {
        const card = document.createElement('div', {is: 'div'});
        card.classList.add('card', 'col-sm', 'm-2');

        const header = document.createElement('h5');
        header.classList.add('card-title');
        header.innerText = stock.symbol;
        card.appendChild(header);

        const body = document.createElement('div');
        body.classList.add('card-body');
        body.innerText = stock.price;
        card.appendChild(body);

        const footer = document.createElement('div');
        footer.classList.add('card-footer');

        const button = document.createElement('button');
        button.innerText = 'Buy';
        footer.appendChild(button);
        card.appendChild(footer);

        host.appendChild(card);
      })
    });
}

displayStocks();
