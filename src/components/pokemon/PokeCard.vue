<template>
  <div class="pokecard" :style="backgroundColor">
    <audio id="hover" src="../../assets/audio/hover.mp3"></audio>
    <div class="img-container">
      <img :src="imgUrl" alt="pokeimg" class="img" />
    </div>
    <div class="info">
      <span class="number">#{{ pokeitem.id.toString().padStart(3, "0") }}</span>
      <h3 class="name">
        {{ pokeitem.name[0].toUpperCase() + pokeitem.name.slice(1) }}
      </h3>
      <small class="type"
        >Type: <span>{{ pokeitem.types[0].type.name }}</span></small
      >
    </div>
    <button @click="openModal()" class="view-btn">view more</button>
    <audio id="click" src="../../assets/audio/click.mp3"></audio>
  </div>
</template>

<script>
export default {
  name: "PokeCard",
  props: ["pokeitem"],
  data() {
    return {
      colors: [
        { fire: "#FDDFDF" },
        { grass: "#DEFDE0" },
        { electric: "#FCF7DE" },
        { water: "#DEF3FD" },
        { ground: "#f4e7da" },
        { rock: "#d5d5d4" },
        { fairy: "#fceaff" },
        { poison: "#98d7a5" },
        { bug: "#f8d5a3" },
        { dragon: "#97b3e6" },
        { psychic: "#eaeda1" },
        { flying: "#F5F5F5" },
        { fighting: "#E6E0D4" },
        { normal: "#F5F5F5" },
      ],
      bgcolor: "",
    };
  },
  mounted() {
    const typeList = this.colors.map((item) => Object.keys(item)[0]);
    const colorList = this.colors.map((item) => Object.values(item)[0]);
    const index = typeList.indexOf(`${this.pokeitem.types[0].type.name}`);
    this.bgcolor = colorList[index];
    const cards = document.querySelectorAll(".pokecard");
    if (this.$store.state.isPlay == true) {
      cards.forEach((item) => {
        item.addEventListener("mouseenter", function () {
          var hover = document.getElementById("hover");
          hover.play();
        });
      });
    }
  },
  computed: {
    imgUrl() {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.pokeitem.id}.png`;
    },
    backgroundColor() {
      return `background-color:${this.bgcolor}`;
    },
  },
  methods: {
    openModal() {
      if (this.pokeitem) {
        this.$emit("modalData", this.pokeitem);
        this.$emit("modalColor", this.bgcolor);
        var click = document.getElementById("click");
        if (this.$store.state.isPlay == true) {
          click.play();
        }
      }
    },
  },
};
</script>

<style scoped>

.pokecard {
  width: 80%;
  font-family: "AtariClassicChunky";
  line-height: 2;
  text-align: center;
  padding: 1rem;
  border-radius: 20px;
  box-shadow: 0 3px 15px rgba(100, 100, 100, 0.5);
  transition: 2s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.pokecard:hover {
  transform: scale3d(1.1, 1.1, 1);
  box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.15);
}
.info {
  margin-top: 20px;
}

.number {
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  font-size: 1rem;
  padding: 5px 10px;
}

.name {
  margin: 15px 0 7px;
  letter-spacing: 1px;
}
.view-btn {
  display: block;
  margin: 1rem auto 0;
  cursor: url("../../assets/pokemon-ball.svg"), auto;
}
@media screen and (max-width: 800px) {
  .card {
    width: 80%;
  }
}
</style>