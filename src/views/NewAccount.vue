<template>
  <div id="login" class="container">
    <div class="area-create">
      <v-icon color="#4D61FC" size="30"> mdi-account </v-icon>
      <Title text="Criação de conta" />
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-row>
          <v-col cols="12">
            <v-text-field label="Nome" type="text" v-model="name" :rules="nameRules" required>
            </v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field label="Email" type="email" v-model="email" :rules="emailRules" required>
            </v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
            label="Senha"
            type="password"
            v-model="password"
            :rules="passwordRules"
            required>
            </v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field label="Repita a sua senha" type="password" v-model="passwordRepeat"
              :rules="passwordRepeatRules" requided>
            </v-text-field>
          </v-col>
          <v-btn block x-large color="primary" class="subtitle" @click="handleNewAccount">
            Criar conta
          </v-btn>
          <v-btn block x-large class="subtitle mt-4" @click="handleLogin">
            Já tenho uma conta
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

export default {
  name: 'Login',
  components: {
    Title,
  },
  data: () => ({
    valid: true,
    name: '',
    nameRules: [
      (v) => !!v || 'O nome é obrigatório',
      (v) => (v && v.length >= 2) || 'O campo nome deve ter ao menos 2 caracteres',
    ],
    email: '',
    emailRules: [
      (v) => !!v || 'O email é obrigatório',
      (v) => /.+@.+\..+/.test(v) || 'Digite um email válido'],
    password: '',
    passwordRules: [
      (v) => !!v || 'A senha é obrigatória',
      (v) => (v && v.length >= 6) || 'A senha deve ter ao menos 6 caracteres',
    ],
    passwordRepeat: '',
    passwordRepeatRules: [
      (v) => !!v || 'A repitição da senha é obrigatória',
    ],
    snackbar: false,
    text: '',
  }),
  methods: {
    handleLogin() {
      this.$router.push('/login');
    },
    // Validando se os campos estão preenchidos
    handleValidNewAccount() {
      const { name, email, password, passwordRepeat } = this;
      return name !== '' && email !== '' && password !== '' && passwordRepeat !== '';
    },
    // Validando se as senhas correspondem
    handleValidMatchPassword() {
      const { password, passwordRepeat } = this;
      return password === passwordRepeat;
    },
    handleNewAccount() {
      const { name, email, password } = this;
      // Validação para as regras definidas por campos
      if (!this.$refs.form.validate()) return;
      // Chamando validação de preenchimento dos campos por segurança
      if (!this.handleValidNewAccount()) {
        this.text = 'É necessário preencher todos os campos';
        this.snackbar = true;
        return;
      }
      // Chamando validação de correspondência dos campos por segurança
      if (!this.handleValidMatchPassword()) {
        this.text = 'As senhas não coincidem';
        this.snackbar = true;
        return;
      }
      localStorage.name = name;
      localStorage.email = email;
      localStorage.password = password;

      this.handleLogin();
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

.area-create {
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
