<template>
  <div class="loader text-center" id="loading">
    <div class="loader-text flex">
      <div class="text-green-500">cshs@bfs</div>
      <div>:</div>
      <div class="text-blue-500">~</div>
      <div class="mr-3">$</div>
      <div id="loader-text"></div>
    </div>
  </div>
</template>

<script>
import TypeIt from "typeit";

export default {
  name: "Loader",
  data() {
    return {
      visible: true
    }
  },
  props: {
    page: {
      type: String,
      default: ""
    }
  },
  mounted() {
    new TypeIt("#loader-text", {
      speed: 40,
      afterComplete: function (instance) {
        setTimeout(() => {
          document.getElementById("loading").style.opacity = "0";
          setTimeout(() => {
            document.getElementById("loading").style.display = "none";
          }, 500)
        }, 1000)
      }
    })
        .type(this.page)
        .pause(150)
        .break()
        .go();
  }
}
</script>

<style scoped>
#loading {
  width: 100vw;
  height: 100vh;
  z-index: 1;
  background: var(--dark-blue);
  position: absolute;
  text-align: center;
  transition: opacity 0.5s, display 0.5s !important;
}

.loader-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%);
  transform: translateX(-50%);
  font-size: 24px;
  transition: opacity 1s ease-out;
}
</style>