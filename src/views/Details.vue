<template>
  <div>
    <v-card class="mx-auto text-center" color="#FFF" max-width="100%" min-height="100%">
      <v-card-text>
        <v-sheet color="#F1F1F1">
          <v-sparkline
            :value="value"
            color="#4D61FC"
            height="100"
            padding="20"
            stroke-linecap="round"
            label-size="5"
            line-width="0.5"
            auto-draw
          >
            <template v-slot:label="item">
              R$ {{ item.value }}
            </template>
          </v-sparkline>
        </v-sheet>
      </v-card-text>

      <v-card-text>
        <Title :text=$store.state.nameItem />
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions class="justify-center">
        <v-btn block text @click="handleHome">
          Voltar para as cotações
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import Title from '../components/Title.vue';

export default {
  name: 'Details',
  components: {
    Title,
  },
  data: () => ({
    value: [
      5.2551,
      5.1998,
      5.16,
      5.10895,
      5.096,
      5.096,
      5.0877,
      5.1475,
    ],
  }),
  methods: {
    handleHome() {
      this.$router.push('/');
    },
  },
};
</script>

<style>
  .value {
    font-size: 10px;
  }
</style>
