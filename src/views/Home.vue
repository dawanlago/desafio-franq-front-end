<template>
  <div id="home">
    <div class="container-logout">
      <button class="logout" @click="handleLogin">
        Sair <v-icon color="#333333">mdi-logout-variant</v-icon>
      </button>
    </div>
    <div class="row header">
      <v-col cols="4">
        <Title text="Cotações" />
      </v-col>
      <v-col cols="6">
        <v-text-field label="Pesquisar item" type="text"></v-text-field>
      </v-col>
    </div>
    <v-container>
      <div class="container-items">
        <h3>Moedas</h3>
        <v-row no-gutters>
          <v-col v-for="currency, index in currencies" :key="index">
            <v-card class="card" outlined tile>
              <p
                class="variationPositive"
                :class="{ 'variationNegative' : currency.variation <= 0} ">{{ currency.variation }}%
              </p>
              <h4 class="price">R${{ currency.buy }}</h4>
              <p class="name">{{ currency.name }}</p>
            </v-card>
          </v-col>
        </v-row>
      </div>

      <div class="container-items">
        <h3>Ações</h3>
        <v-row no-gutters>
          <v-col v-for="stock, index in stocks" :key="index">
            <v-card class="card" outlined tile>
              <p class="variationPositive" :class="{ 'variationNegative' : stock.variation <= 0} ">
                {{ stock.variation }}%
              </p>
              <p class="nameStock">{{ stock.name }}</p>
            </v-card>
          </v-col>
        </v-row>
      </div>

      <div class="container-items">
        <h3>Bitcoin</h3>
        <v-row no-gutters>
          <v-col v-for="coin, index in bitcoin" :key="index">
            <v-card class="card" outlined tile>
              <p class="variationPositive" :class="{ 'variationNegative' : coin.variation <= 0} ">
                {{ coin.variation }}%
              </p>
              <h4 class="price">R${{ coin.buy }}</h4>
              <p class="name">{{ coin.name }}</p>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </v-container>

  </div>
</template>

<script>
import Title from '@/components/Title.vue';
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
  },
  async mounted() {
    await api().get().then((res) => {
      this.handleCurrencies(res.data.results.currencies);
      this.handleStocks(res.data.results.stocks);
      this.handleBitcoin(res.data.results.bitcoin);
    });
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
  justify-content: flex-end;
}
.logout {
  font-family: 'Ubuntu', sans-serif !important;
  font-weight: 400;
  font-size: 20px !important;
  color: var(--dark);
  margin-right: 10px;
}
.card {
  width: 150px;
  height: 150px;
  background-color: var(--light);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border: none;
  border-radius: 5px !important;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
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
</style>
