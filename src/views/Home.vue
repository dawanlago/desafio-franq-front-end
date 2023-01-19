<template>
  <div id="home">
    <div class="container-logout">
      <h3 class="logout">Sair</h3>
      <v-icon color="#333333">mdi-logout-variant</v-icon>
    </div>
    <div class="row header mb-10" >
      <v-col cols="4">
        <Title text="Cotações" />
      </v-col>
      <v-col cols="6">
        <v-text-field label="Pesquisar item" type="text"></v-text-field>
      </v-col>
    </div>
    <v-container>
      <v-row no-gutters>
        <v-col v-for="n in 5" :key="n">
          <v-card class="card" outlined tile>
            <p class="variation">-0,136%</p>
            <h4 class="price">R$ 6,27</h4>
            <p class="name">ARS PESO / BRL REAL</p>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

  </div>
</template>

<script>
import Title from '@/components/Title.vue';

export default {
  name: 'Home',
  components: {
    Title,
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
  padding: 10px;
}
.variation {
  font-family: 'Ubuntu', sans-serif !important;
  font-weight: 500;
  font-size: 13px;
  text-align: center;
}
.price {
  font-family: 'Ubuntu', sans-serif !important;
  font-weight: 500;
  font-size: 28px;
  text-align: center;
}
.name {
  font-family: 'Ubuntu', sans-serif !important;
  font-weight: 400;
  font-size: 11px;
  text-align: center;
}
</style>
