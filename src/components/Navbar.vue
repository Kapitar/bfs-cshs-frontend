<template>
  <div class="header">
    <div class="container flex justify-between">
      <a class="navbar-link" id="logo" href="">cshs@bfs ~ $</a>
      <nav class="navbar">
        <a class="navbar-link" id="about" href="">~/about</a>
        <a class="navbar-link" id="projects" href="">~/projects</a>
        <a class="navbar-link" id="team" href="">~/team</a>
      </nav>
    </div>
  </div>
</template>

<script>

export default {
  name: "Navbar"
}

</script>

<style scoped>
  .header {
    width: 100%;
    background: var(--light-blue);
    padding: 20px;
  }

  .navbar-link {
    text-decoration: none;
    font-size: 18px;
  }

  .navbar a {
    position: relative;
    margin-left: 35px;
  }
</style>