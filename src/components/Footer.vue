<template>
  <div class="footer">
    <div class="copyright">
      <p>&copy; Copyright 2024, BFS Computer Science Honor Society. All Rights Reserved. <a href="https://github.com/Kapitar/bfs-cshs-new">Github</a></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style>
.footer {
  height: 50px;
  position: relative;
  background: var(--light-blue);
}

.copyright {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.copyright a {
  color: var(--blue);
}
</style>