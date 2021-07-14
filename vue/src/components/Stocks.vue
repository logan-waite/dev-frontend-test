<template>
  <section class="container">
    <h3>Current Stock Prices</h3>

    <ul class="stock-list row">
      <li class="card col-sm m-2" v-for="stock in stocks" :key="stock.symbol">
        <h5 class="card-title">{{stock.symbol}}</h5>
        <div class="card-body">{{stock.price}}</div>
        <div class="card-footer">
          <button @click="handleBuy(stock)">Buy</button>
          <button @click="viewDetails(stock)">Details</button>
        </div>
      </li>
    </ul>

    <div class="info">
    <section>
      <h3>Stocks I own:</h3>
      <Purchased :stocks="boughtStocks" />
    </section>
    <section>
      <StockDetails v-if="selectedStock" :stock="selectedStock"/>
    </section>
      </div>

  </section>
</template>

<script>
import Purchased from "./Purchased";
import StockDetails from './StockDetails';
import { getStockList } from "../service/api.service";

export default {
  name: "Stocks",
  components: {Purchased, StockDetails},
  data() {
    return {
      stocks: [],
      boughtStocks: [],
      selectedStock: undefined
    }
  },
  methods: {
    handleBuy(stock) {
      this.boughtStocks.push(stock);
    },
    viewDetails(stock) {
      this.selectedStock = stock;
    }
  },
  async mounted() {
    this.stocks = await getStockList();
  }
}
</script>

<style scoped>
.card-footer {
  display: flex;
}
.info {
  display: flex;
}
</style>
