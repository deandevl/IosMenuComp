<template>
  <div class="coins_container">
    <p>Name: {{ coin.name }}</p>
    <p>Symbol: {{ coin.symbol }}</p>
    <p>Price (USD): {{ coin.price_usd }}</p>
  </div>
</template>

<script>
  export default {
    name: 'CoinsComp',
    data() {
      return {
        coin: {
          name: null,
          symbol: null,
          price_usd: null
        }
      };
    },
    props: {
      coin_type: {
        type: String,
        default: 'bitcoin'
      }
    },

    created() {
      this.fetch_data();
    },

    watch: {
      '$route': 'fetch_data'
    },

    methods: {
      fetch_data: function(){
        const config = {
          method: 'GET',
          mode: 'cors'
        };
        //const url = 'https://api.coinmarketcap.com/v1/ticker/bitcoin/';
        const url = 'https://api.coinmarketcap.com/v1/ticker/' + this.coin_type+'/';
        const req = new Request(url,config);
        fetch(req,config).then((response) => {
          response.json().then((data) => {
            this.coin.name = data[0].name;
            this.coin.symbol = data[0].symbol;
            this.coin.price_usd = data[0].price_usd;
          });
        });
      }
    }
  }
</script>