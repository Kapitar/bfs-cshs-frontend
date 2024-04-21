<template>
  <div class="person text-center">
    <img class="person-photo xl:size-48 md:size-48 size-28" :src="photo" alt="">
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

.person-photo {
  margin: 0 auto;
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