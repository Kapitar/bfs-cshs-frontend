<template>
  <div class="container">
    <h1 class="title text-center" id="about-title"></h1>
  </div>
</template>

<script>
import TypeIt from "typeit";
export default {
  name: "AboutView",
  mounted() {
    new TypeIt("#about-title", {
      strings: "Members",
      speed: 60,
      startDelay: 3300
    }).go();
  }
}
</script>

<style scoped>

</style>