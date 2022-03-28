<template>
  <div id="app">
    <PokemonList />
  </div>
</template>

<script>
import PokemonList from "./views/PokemonList.vue";

export default {
  name: "App",
  components: {
    PokemonList,
  },
};
</script>

<style>
</style>
