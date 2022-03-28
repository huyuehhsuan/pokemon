<template>
  <div>
    <div class="container">
      <div class="input">
        <img
          src="../assets/pokemon-logo.png"
          alt="pokemon-logo"
          style="width: 100px; margin-right: 20px"
        />
        <select v-model="type">
          <option value="all">all</option>
          <option value="fire">fire</option>
          <option value="grass">grass</option>
          <option value="electric">electric</option>
          <option value="water">water</option>
          <option value="ground">ground</option>
          <option value="rock">rock</option>
          <option value="fairy">fairy</option>
          <option value="poison">poison</option>
          <option value="bug">bug</option>
          <option value="dragon">dragon</option>
          <option value="psychic">psychic</option>
          <option value="flying">flying</option>
          <option value="fighting">fighting</option>
          <option value="normal">normal</option>
        </select>
        <input
          type="text"
          v-model.trim="title"
          v-on:keyup.enter="inputHandle"
        />
      </div>
      <button @click="closeAudio()">關閉音效</button>
      <div class="grid">
        <PokeCard
          v-for="(item, index) in titleMenu"
          :key="index"
          :pokeitem="item"
          @modalData="getModalData"
          @modalColor="getModalColor"
        />
      </div>
    </div>

    <div class="modal-bg">
      <div class="modal card box-border">
        <button @click="closeModal()" class="close-btn">X</button>
        <audio id="click" src="../assets/audio/click.mp3"></audio>
        <h1>{{ modal.name[0].toUpperCase() + modal.name.slice(1) }}</h1>
        <div class="img-container">
          <img :src="imgUrl" alt="pokeimg" class="img" />
        </div>
        <div class="informations">
          <div class="information">
            <p class="infoText">Height</p>
            <p class="infoValue">{{ modal.height }}m</p>
          </div>
          <div class="information">
            <p class="infoText">Weight</p>
            <p class="infoValue">{{ modal.weight }}kg</p>
          </div>
          <div class="information">
            <p class="infoText">Type</p>
            <p class="infoValue">{{ modal.types[0].type.name }}</p>
          </div>
          <div class="information">
            <p class="infoText">First Ability</p>
            <p class="infoValue">{{ modal.abilities[0].ability.name }}</p>
          </div>
          <div class="information">
            <p class="infoText">Hidden Ability</p>
            <p class="infoValue">{{ modal.abilities[1].ability.name }}</p>
          </div>
          <div class="information">
            <p class="infoText">Base_experience</p>
            <p class="infoValue">{{ modal.base_experience }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import PokeCard from "@/components/pokemon/PokeCard.vue";
import Pokemon from "@/data/Pokemon.js";
export default {
  name: "PokemonList",
  components: { PokeCard },
  data() {
    return {
      listLength: 3,
      pokeList: [],
      showList: [],
      type: "all",
      title: "",
      modal: {
        name: "name",
        height: null,
        weight: null,
        base_experience: null,
        abilities: [{ ability: { name: "" } }, { ability: { name: "" } }],
        types: [{ type: { name: "" } }],
      },
      color: "",
    };
  },
  mounted() {
    this.fetchPokemons();
  },
  methods: {
    async fetchPokemons() {
      for (let i = 1; i <= this.listLength; i++) {
        await this.getPokeList(i);
      }
    },
    async getPokeList(id) {
      const pokemon = new Pokemon();
      const res = await pokemon.getPokemon(id);
      this.pokeList.push(res);
    },
    getModalData(data) {
      this.modal = data;
      const modal = document.querySelector(".modal-bg");
      modal.classList.add("bg-active");
    },
    getModalColor(data) {
      this.color = data;
      const modal = document.querySelector(".modal");
      modal.style["background-color"] = data;
    },
    closeModal() {
      const modal = document.querySelector(".bg-active");
      modal.classList.remove("bg-active");
      var audio = document.getElementById("click");
      audio.play();
    },
    closeAudio() {
      const cards = document.querySelectorAll(".pokecard");
      cards.forEach((item) => {
        item.addEventListener("mouseenter", function () {
          var hover = document.getElementById("hover");
          hover.pause();
        });
      });
    },
  },

  computed: {
    //第一層分類檢索
    typeMenu() {
      if (this.type !== "all") {
        return this.pokeList.filter((item) => {
          return item.types[0].type.name === this.type;
        });
      } else {
        return this.pokeList;
      }
    },
    //第二層關鍵字檢索
    titleMenu() {
      if (this.title) {
        return this.typeMenu.filter((item) => {
          let content = item.name.toLowerCase();
          let keyword = this.title.toLowerCase();
          return content.indexOf(keyword) !== -1;
        });
      } else {
        return this.typeMenu;
      }
    },
    imgUrl() {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.modal.id}.png`;
    },
  },
};
</script>
<style>
.container {
  max-width: 1100px;
  margin: auto;
  padding: 2rem 0;
  position: relative;
}
.input {
  display: flex;
  align-items: center;
  width: 70%;
  font-size: 1.2rem;
  background-color: rgb(255, 172, 158);
  color: #fff;
  padding: 1rem;
  border-radius: 10px;
  margin: 0 auto 2rem;
  text-align: center;
}
.input select {
  outline: none;
  border: none;
  height: 1.8rem;
  width: 20%;
  border-radius: 10px;
}
.input input {
  outline: none;
  border: none;
  height: 1.8rem;
  width: 50%;
  border-radius: 10px;
  margin: 0 1.2rem;
  padding: 0.8rem;
}
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  justify-items: center;
}
.modal-bg {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  visibility: hidden;
  opacity: 1;
  transition: visibility 0s visibility 0.5s;
}
.bg-active {
  visibility: visible;
  visibility: 1;
}
.modal {
  background-color: rgb(255, 255, 255);
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: 0.5s;
  border-radius: 10px;
}
.modal h1 {
  font-family: "AtariClassicChunky";
  line-height: 2;
}
.bg-active .modal {
  top: 50%;
  opacity: 1;
}
.img-container {
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 50%;
  width: 120px;
  height: 120px;
  text-align: center;
  margin: 1rem auto;
}
.img {
  width: 150px;
  margin: auto;
}
.informations {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
}
.information {
  margin: 4px;
  padding: 10px;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.6);
  border: #fff 1px solid;
}
.infoText {
  font-size: 20px;
  margin-bottom: 10px;
  font-weight: bold;
}
.infoValue {
  font-size: 26px;
}
.close-btn {
  display: block;
  margin-left: auto;
  cursor: url("../assets/pokemon-ball.svg"), auto !important;
}
@media screen and (max-width: 800px) {
  .container {
    padding: 2rem;
  }
  .input {
    width: 100%;
    padding: 0.8rem;
    margin: 0 auto 0.5rem;
  }
  .input input {
    width: 60%;
  }
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
