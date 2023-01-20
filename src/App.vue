<template>
  <v-app>
    <v-main class="main">
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  methods: {
    // Tratando o tempo de sessão do usuário: 60s
    handleGetSessionUser() {
      return (Date.now() - localStorage.timerLogin) / 1000 < 6000;
    },
  },
  mounted() {
    // Verificando se o usuário está em tempo de sessão
    this.$router.push({ name: this.handleGetSessionUser() ? 'home' : 'login' });
  },
};
</script>

<style lang="scss" scoped>
* {
    font-family: 'Ubuntu', sans-serif;
    background-color: var(--background);
}
</style>
