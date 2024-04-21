<template>
  <div class="footer">
    <div class="copyright text-center">
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
  width: 100%;
  line-height: inherit;
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.copyright a {
  color: var(--blue);
}
</style>