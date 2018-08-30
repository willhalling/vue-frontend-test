const axios = require('axios')
const errorText = (error) => `${error.code}: ${error.message}`

export default {
  logIn(email, password) {
    return firebaseAuth.signInWithEmailAndPassword(email, password)
      .catch((error) => {
        throw errorText(error);
      });
  },
  getBitCoin() {
    return axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => {
        console.log('API response', response)
        return response.data.bpi;
      })
      .catch(error => {
        throw errorText(error);
      });
  }
}




































































































































































































