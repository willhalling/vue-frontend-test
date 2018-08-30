import Vue from 'vue';
import Vuex from 'vuex';

import bitcoin from './modules/bitcoin';

Vue.use(Vuex);

const store = new Vuex.Store({

    modules: {
        bitcoin,
        // ... more modules could go here
    },
});

export default store;
