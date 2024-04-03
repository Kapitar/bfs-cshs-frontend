<template>
  <div class="container mx-auto">
    <div class="main-text mx-auto text-center">
      <p id="element"></p>
      <a href="/about"><button class="learn-more" id="learn-btn">Learn more</button></a>
    </div>
  </div>
</template>

<script>
import TypeIt from "typeit";

export default {
  name: "Home",
  components: {},
  mounted() {
    new TypeIt("#element", {
      speed: 60,
      startDelay: 2800,
      afterComplete: function (instance) {
        this.showButton = true;
        document.getElementById("learn-btn").style.opacity = "1";
      }
    })
        .type("BFS Computer Science ")
        .break()
        .pause(200)
        .type("Society")
        .pause(500)
        .move(-7)
        .type("Honor ")
        .pause(100)
        .move(7)
        .go();
  }
}
</script>

<style scoped>
.main-text {
  font-size: 72px;
  margin-top: 300px;
}

.learn-more {
  font-size: 20px;
  padding: 10px 30px;
  background: var(--blue);
  border-radius: 20px;
  opacity: 0;
  transition: opacity 0.5s, display 0.5s !important;
}
</style>