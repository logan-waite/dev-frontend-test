<template>
  <div class="purchased-stocks">
    <purchased-stock v-for="(stockData, symbol, i) in ownedStocks" 
      :key="i" :name="symbol" 
      :amount="stockData.amountOwned" 
      :total-value="stockData.value"
    />
  </div>
</template>

<script>
import PurchasedStock from '@/components/PurchasedStock.vue';
// import * as _ from 'lodash'

export default {
  name: "Purchased",
  components: {
    PurchasedStock
    },
  props: {
    stocks: {
      type: Array,
      required: true
    }
  },
  data() {
    return {}
  },
  computed: {
    ownedStocks() {
      return this.stocks.reduce((grouped, stock) => {
        if (grouped[stock.symbol]) {
          grouped[stock.symbol].amountOwned += 1
          grouped[stock.symbol].value = Math.round(grouped[stock.symbol].value += stock.price)
          return grouped
        } else {
          const stockData = {amountOwned: 1, value: stock.price}
          grouped[stock.symbol] = stockData
          return grouped
        }
      }, {})
    }
  }
}
</script>

<style scoped>
  .purchased-stocks {
    width: 200px;
    display: flex;
    flex-direction: column;
  }
</style>
