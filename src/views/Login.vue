<template>
  <div id="login" class="container">
    <div class="area-login">
      <v-icon color="#4D61FC" size="30">
        mdi-login-variant
      </v-icon>
      <Title text="Bem vindo(a)" />
      <Subtitle text="Faça login em sua conta" />
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-row>
          <v-col cols="12">
            <v-text-field
            label="Email"
            type="email"
            v-model="email"
            :rules="emailRules"></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
            label="Senha"
            type="password"
            v-model="password"
            :rules="passwordRules"></v-text-field>
          </v-col>
          <v-btn block x-large color="primary" @click="handleLogin">
            Entrar
          </v-btn>
          <v-btn block x-large class="subtitle mt-4" @click='handleNewAccount'>
            Criar conta
          </v-btn>
          <v-snackbar v-model="snackbar">
            {{ text }}
            <template v-slot:action="{ attrs }">
              <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">
                <v-icon> mdi-close-circle-outline </v-icon>
              </v-btn>
            </template>
          </v-snackbar>
        </v-row>
      </v-form>
    </div>
  </div>
</template>

<script>
import Title from '../components/Title.vue';
import Subtitle from '../components/Subtitle.vue';

export default {
  name: 'Login',
  components: {
    Title,
    Subtitle,
  },
  data: () => ({
    valid: true,
    email: '',
    emailRules: [
      (v) => !!v || 'O email é obrigatório',
      (v) => /.+@.+\..+/.test(v) || 'Digite um email válido'],
    password: '',
    passwordRules: [
      (v) => !!v || 'A senha é obrigatória',
    ],
    snackbar: false,
    text: '',
  }),
  methods: {
    handleNewAccount() {
      this.$router.push('new-account');
    },
    handleValidLogin() {
      return this.email === localStorage.email && this.password === localStorage.password;
    },
    handleLogin() {
      // Validação para as regras definidas por campos
      if (!this.$refs.form.validate()) return;

      // Chamando validação de email e senha
      if (!this.handleValidLogin()) {
        this.text = 'Email ou senha inválidos';
        this.snackbar = true;
        return;
      }
      // Considerando a data/hora atual para validar sessão
      localStorage.timerLogin = Date.now();
      this.$router.push('/');
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

@media screen and (max-width: 600px) {
  .area-login {
    width: 100%;
    height: 100%;
    padding: 20px;
  }
}
</style>
