<template>
  <div class="person text-center">
    <img :src="photo" alt="" class="person-photo">
    <div class="person-name mt-3">
      {{name}}
    </div>
    <div class="person-position">
      {{position}}
    </div>
  </div>
</template>

<script>
export default {
  name: "Person",
  props: ["photo", "name", "position"]
}
</script>

<style scoped>
.person {
  width: 230px;
}

.person-photo {
  width: 230px;
  height: 230px;
  object-fit: cover;
  border-radius: 500px;
}

.person-name {
  font-size: 24px;
  color: #9bb0ff;
}

.person-position {
  font-size: 18px;
}
</style>