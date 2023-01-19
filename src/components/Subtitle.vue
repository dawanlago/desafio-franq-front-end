<template>
  <h1 class="subtitle">{{ text }}</h1>
</template>

<script>
export default {
  props: ['text'],
};
</script>

<style lang='scss' scoped>
.subtitle {
  font-family: 'Ubuntu', sans-serif !important;
  font-weight: 400;
  font-size: 18px !important;
  color: var(--dark-text);
  margin: 0;
}
</style>
