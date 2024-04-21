<template>
  <div class="container content-wrapper text-center">
    <div class="main-text xl:text-7xl md:text-7xl text-5xl">
      <p id="element"></p>
      <a href="/cshs/about">
        <button class="learn-more" id="learn-btn">Learn more</button>
      </a>
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
  /*height: 100%;*/
  /*font-size: 72px;*/
  width: 95%;
  line-height: inherit;
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.content-wrapper {
  display: flex;
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