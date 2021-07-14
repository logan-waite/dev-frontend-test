<template>
    <div class="stock-details">
        <h3 class="stock-details__header">Details For {{stock.company}}</h3>
        <p> Current Price: {{stock.price}}</p>
        <table class="price-history">
            <tr>
                <td colspan="2"><h5>Price History</h5></td>
            </tr>
            <tr v-for="(history, i) in priceHistory" :key="i">
                <td class="price-history__date">{{history.date}}</td>
                <td class="price-history__price">${{history.price}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
import { getStockHistory } from "../service/api.service";

export default {
    data() {
        return {
            priceHistory: []
        }
    },
    props: {
        stock: {
            type: Object,
            required: true,
        }
    },
    methods: {
        async getPriceHistory() {
            const history = await getStockHistory(this.stock.symbol);
            return history
        }
    },
    async mounted() {
        this.priceHistory = await this.getPriceHistory()
    }
}
</script>

<style scoped>
.price-history {
    width: 100%;
}
</style>