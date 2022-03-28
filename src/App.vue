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
@font-face {
  font-family: "AtariClassicChunky";
  src: url("./assets/font/AtariClassicChunky-PxXP.woff") format("woff"),
    url("./assets/font/AtariClassicChunky-PxXP.ttf") format("truetype"),
    url("./assets/font/AtariClassicChunky-PxXP.eot") format("embedded-opentype");
}
</style>
