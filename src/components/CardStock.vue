<template>
  <div class="container-items">
    <h3>Ações</h3>
    <v-row no-gutters>
      <v-col
        cols="12"
        xs="12"
        sm="6"
        md="3"
        class="card-container"
        v-for="stock, index in stocks" :key="index"
      >
        <v-card class="card" outlined tile @click="handleDetails(stock.name)">
          <p class="variationPositive" :class="{ 'variationNegative': stock.variation <= 0 }">
            {{ stock.variation }}%
          </p>
          <p class="name">{{ stock.name }}</p>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'CardStock',
  props: ['stocks'],
  methods: {
    handleDetails(item) {
      // Setando o nome do item na state
      this.$store.commit('setNameItem', item);
      this.$router.push('/details');
    },
  },
};
</script>

<style lang="scss" scoped>
.container-items {
  margin: 30px 0;
}

.container-items h3 {
  margin-bottom: 5px;
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
  font-size: 16px;
  text-align: center;
}

@media screen and (max-width: 600px) {
  .card {
    width: 100%;
  }
}
</style>
