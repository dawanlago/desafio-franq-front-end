<template>
  <v-app>
    <Spinner />
    <v-main class="main">
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import Spinner from '@/components/Spinner.vue';

export default {
  name: 'App',
  components: {
    Spinner,
  },
  methods: {
    // Tratando o tempo de sessão do usuário: 60s
    handleGetSessionUser() {
      return (Date.now() - localStorage.timerLogin) / 1000 < 600000;
    },
  },
  mounted() {
    // Verificando se o usuário está em tempo de sessão
    this.$router.push({ name: this.handleGetSessionUser() ? 'home' : 'login' });
    setTimeout(() => {
      this.$root.$emit('Spinner::hide');
    }, 300);
  },
};
</script>

<style lang="scss" scoped>
* {
    font-family: 'Ubuntu', sans-serif;
    background-color: var(--background);
}
</style>
