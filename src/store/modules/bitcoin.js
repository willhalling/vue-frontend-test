import api from '../api';

const state = {
    prices: [],
};

const actions = {
    getPrices: ({ commit }) => api.getBitCoin().then(prices => commit('setPrices', prices)),
};

const mutations = {
    setPrices(state, prices) {
        state.prices.push(prices);
    },
};

const getters = {
    prices: state => state.prices,
};

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters,
};
