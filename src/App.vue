<template>
    <div id="app">
        <h1>Bitcoin Price Index</h1>
        <field name="Number of Bitcoins" v-model="bitcoinNumber" type="number"></field>
        <price-index :content="prices" :bitcoin="bitcoinNumber"></price-index>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

import PriceIndex from '@/components/PriceIndex/price-index.vue';
import Field from '@/components/Form/Field/field.vue';

export default {
    name: 'app',
    components: {
        PriceIndex,
        Field,
    },
    data: () => ({
        bitcoinNumber: 1,
    }),
    methods: {
        ...mapActions({
            getPrices: 'bitcoin/getPrices',
        }),
    },
    computed: {
        ...mapGetters({
            prices: 'bitcoin/prices',
        }),
    },
    mounted() {
        this.getPrices()
            .then((response) => {
                console.log('Price response', response);
            })
            .catch((error) => {
                console.log('Error', error);
            });
    },
};
</script>

<style lang="scss">
    @import './scss/variables.scss';
    @import './scss/colors.scss';

    #app {
        color: $black;
        font-family: $serif-font;
        margin: 60px auto;
        max-width: 600px;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
    }

</style>
