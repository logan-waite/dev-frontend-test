<template>
  <section>
    <h3>Current Stock Prices</h3>

    <ul class="stock-list row">
      <li class="card col-sm m-2" v-for="stock in stocks" :key="stock.symbol">
        <h5 class="card-title">{{stock.symbol}}</h5>
        <div class="card-body">{{stock.price}}</div>
        <div class="card-footer">
          <button>Buy</button>
        </div>
      </li>
    </ul>

    <h3>Stocks I own:</h3>
    <Purchased />
  </section>
</template>

<script>
import Purchased from "./Purchased";
import { getStockList } from "../service/api.service";
export default {
  name: "Stocks",
  components: {Purchased},
  data() {
    return {
      stocks: [],
    }
  },
  async mounted() {
    this.stocks = await getStockList();
  }
}
</script>

<style scoped>
</style>
