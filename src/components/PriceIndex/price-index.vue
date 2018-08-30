<template>
    <div class="priceIndex">
        <ul class="priceIndex__list">
            <li v-for="(currency, index) in content[0]" class="priceIndex__listItem" :class="{ 'even' : index % 2 }">
                <div class="priceIndex__currency">{{ currency.description }} ({{ index }}):</div>
                <div class="priceIndex__price"><span v-html="currency.symbol"></span>{{ currency.rate_float * bitcoin | currencydecimal }}</div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'PriceIndex',
    props: {
      content: [Array, Object],
      bitcoin: {
        type: Number,
        default: 1
      }
    },
    // TO DO: move filters if used more than once
    filters: {
      currencydecimal(value) {
        return value.toFixed(2);
      }
    }
};
</script>

<style lang="scss">
    @import '../../scss/colors.scss';
    @import '../../scss/typography.scss';
    @import '../../scss/variables.scss';
    @import './price-index.scss';
</style>
