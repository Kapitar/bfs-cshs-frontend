<template>
  <div class="container mx-auto">
    <div class="main-text mx-auto text-center">
<!--      <div class="logos flex">-->
<!--        <img class="mx-auto" src="../assets/images/CSHS_logo.png" width="200px" alt="">-->
<!--        <img class="mx-auto" src="../assets/images/bfs_logo.png" width="200px" alt="">-->
<!--      </div>-->
      <p id="element"></p>
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
      speed: 75,
      startDelay: 3300,
      // cursorChar: "▮",
    })
        .type("BFS Computer Science ")
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
  width: 800px;
  font-size: 72px;
  margin-top: 200px;
  /*font-family: "Space Grotesk", sans-serif;*/
}
</style>