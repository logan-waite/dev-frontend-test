export const getStockList = () => {
  return fetch('api/stocks', {
    method: 'GET'
  }).then(response => response.json());
}

export const getStockHistory = (stockName) => {
  return fetch(`/api/history/${stockName}`, {
    method: 'GET'
  }).then(response => response.json());
}
