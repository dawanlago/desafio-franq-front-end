<template>
  <div id="home">
    <div class="container-logout">
      <h4 class="name-user">Olá, {{ $store.state.nameUser }}!</h4>
      <button class="logout" @click="handleLogin">
        Sair <v-icon color="#333333">mdi-logout-variant</v-icon>
      </button>
    </div>
    <div class="row header">
      <v-col cols="12">
        <Title text="Cotações" />
      </v-col>
    </div>
    <v-container>
      <CardCurrency :currencies="currencies"/>
      <CardStock :stocks="stocks"/>
      <CardBitcoin :bitcoin="bitcoin"/>
    </v-container>

  </div>
</template>

<script>
import Title from '@/components/Title.vue';
import CardCurrency from '@/components/CardCurrency.vue';
import CardStock from '@/components/CardStock.vue';
import CardBitcoin from '@/components/CardBitcoin.vue';
import api from '@/services/api';

export default {
  name: 'Home',
  data: () => ({
    items: [],
    currencies: [],
    stocks: [],
    bitcoin: [],
  }),
  components: {
    Title,
    CardCurrency,
    CardStock,
    CardBitcoin,
  },
  methods: {
    handleCurrencies(currenciesObject) {
      this.currencies = [];
      // Convertendo objeto em array para enviar para this.currencies
      Object.values(currenciesObject).forEach((currency, index) => {
        if (index !== 0 && index <= 4) {
          this.currencies.push(currency);
        }
      });
    },
    handleStocks(stocksObject) {
      this.stocks = [];
      // Convertendo objeto em array para enviar para this.stocks
      Object.values(stocksObject).forEach((stock, index) => {
        if (index <= 4) {
          this.stocks.push(stock);
        }
      });
    },
    handleBitcoin(bitcoinObject) {
      this.bitcoin = [];
      // Convertendo objeto em array para enviar para this.bitcoin
      Object.values(bitcoinObject).forEach((coin, index) => {
        if (index <= 0) {
          this.bitcoin.push(coin);
        }
      });
    },
    handleLogin() {
      this.$router.push('/login');
    },
    handleDetails(item) {
      // Setando o nome do item na state
      this.$store.commit('setNameItem', item);
      this.$router.push('/details');
    },
  },
  async mounted() {
    this.$root.$emit('Spinner::show');
    await api().get().then((res) => {
      this.handleCurrencies(res.data.results.currencies);
      this.handleStocks(res.data.results.stocks);
      this.handleBitcoin(res.data.results.bitcoin);
    });
    // Setando o nome do usuário na state
    this.$store.commit('setNameUser', localStorage.name);
    setTimeout(() => {
      this.$root.$emit('Spinner::hide');
    }, 300);
  },
};
</script>

<style lang="scss" scoped>
#home {
  padding: 20px;
}
.header {
  align-items: center;
  justify-content: flex-start;
}
.container-logout {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}
.name-user {
  font-size: 18px;
  color: var(--dark);
}
.logout {
  font-family: 'Ubuntu', sans-serif !important;
  font-weight: 400;
  font-size: 20px !important;
  color: var(--dark);
  margin-right: 10px;
}
.card-container {
  display: flex;
  justify-content: center;
}
.card {
  width: 180px;
  height: 180px;
  background-color: var(--light);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border: none;
  border-radius: 5px !important;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  margin-top: 10px;
}
.variationPositive {
  font-family: 'Ubuntu', sans-serif !important;
  font-weight: 500;
  font-size: 15px;
  text-align: center;
  color: var(--green);
}
.variationNegative {
  font-family: 'Ubuntu', sans-serif !important;
  font-weight: 500;
  font-size: 15px;
  text-align: center;
  color: var(--red);
}
.price {
  font-family: 'Ubuntu', sans-serif !important;
  font-weight: 500;
  font-size: 25px;
  text-align: center;
}
.name {
  font-family: 'Ubuntu', sans-serif !important;
  font-weight: 400;
  font-size: 14px;
  text-align: center;
}
.nameStock {
  font-family: 'Ubuntu', sans-serif !important;
  font-weight: 400;
  font-size: 16px;
  text-align: center;
}
.container-items {
  margin: 30px 0;
}

.container-items h3 {
    margin-bottom: 5px;
}

@media screen and (max-width: 600px) {
  .card {
    width: 100%;
  }
}
</style>
