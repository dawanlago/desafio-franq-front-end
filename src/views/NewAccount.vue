<template>
  <div id="login" class="container">
    <div class="area-criacao">
      <v-icon color="#4D61FC" size="30">
        mdi-account
      </v-icon>
      <h1 class="title">Criação de conta</h1>
      <v-form v-model="valid">
          <v-row>
            <v-col cols="12">
              <v-text-field label="Nome" type="text"></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field label="Email" type="email"></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field label="Senha" type="password"></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field label="Repita a sua senha" type="password"></v-text-field>
            </v-col>
            <v-btn block x-large color="primary" class="subtitle">Criar conta</v-btn>
          </v-row>
      </v-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
};
</script>

<style lang='scss' scoped>
.container {
  height: calc(100vh);
  display: flex;
  justify-content: center;
  align-items: center;
}

.area-criacao {
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
