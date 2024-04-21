<template>
  <div class="container">
    <h1 class="title text-center" id="about-title"></h1>
    <p>blah blah blah</p>
    <p>blah blah blah</p>
    <p>blah blah blah</p>
    <p>blah blah blah</p>
    <p>blah blah blah</p>
  </div>
</template>

<script>
import TypeIt from "typeit";
export default {
  name: "AboutView",
  mounted() {
    new TypeIt("#about-title", {
      strings: "About BFS CSHS",
      speed: 60,
      startDelay: 3300
    }).go();
  }
}
</script>

<style scoped>

</style>