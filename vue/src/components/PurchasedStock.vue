<template>
    <div class="purchased-stock">
        <h5 class="purchased-stock__name">{{name}}</h5>
        <span class="purchased-stock__amount">Owned: {{amount}}</span>
        <span class="purchase-stock__total-value">Value: ${{totalValue}}</span>
    </div>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            required: true,
        },
        amount: {
            type: Number,
            required: true
        },
        totalValue: {
            type: Number,
            default: 0
        }
    }
}
</script>

<style scoped>
.purchased-stock {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
</style>