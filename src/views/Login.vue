<template>
  <div id="login" class="container">
    <div class="area-login">
      <v-icon color="#4D61FC" size="30">
        mdi-login-variant
      </v-icon>
      <h1 class="title">Bem vindo(a)</h1>
      <h2 class="subtitle">Faça login em sua conta</h2>
      <v-form>
        <v-row>
          <v-col cols="12">
            <v-text-field label="Email" type="email"></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field label="Senha" type="password"></v-text-field>
          </v-col>
          <v-btn block x-large color="primary">
            Entrar
          </v-btn>
          <v-btn block x-large class="subtitle mt-4" @click='handleNewAccount'>
            Criar conta
          </v-btn>
        </v-row>
      </v-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  methods: {
    handleNewAccount() {
      this.$router.push('new-account');
    },
  },
};
</script>

<style lang='scss' scoped>
.container {
  height: calc(100vh);
  display: flex;
  justify-content: center;
  align-items: center;
}

.area-login {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: var(--light) !important;
  width: 500px;
  padding: 40px;
  border-radius: 5px;
}
</style>
