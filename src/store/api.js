const axios = require('axios');

const errorText = error => `${error.code}: ${error.message}`;

export default {
    getBitCoin() {
        return axios
            .get('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then(response => response.data.bpi)
            .catch((error) => {
                throw errorText(error);
            });
    },
};
