<template>
  <h1 class="title">{{ text }}</h1>
</template>

<script>
export default {
  props: ['text'],
};
</script>

<style lang='scss' scoped>
.title {
  font-family: 'Ubuntu', sans-serif !important;
  font-weight: 500;
  font-size: 28px !important;
  color: var(--dark);
  margin: 0;
}
</style>
