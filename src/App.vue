<template>
  <Loader :page="`python bfs_cshs.py`"/>
  <Navbar/>
  <router-view />
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Loader from "./components/Loader.vue"

export default {
  name: "App",
  components: {Navbar, Loader}
}
</script>

<style >
  body {
    background: var(--dark-blue);
    font-family: "Fira Mono", monospace;
    font-weight: 500;
    color: white;
  }
</style>