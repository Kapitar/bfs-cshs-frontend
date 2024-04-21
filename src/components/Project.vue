<template>
  <div class="project">
    <img class="project-image" :class="{'xl:float-right xl:mb-0 mb-6': float === 'right', 'float-left': float === 'left', 'mr-5': float === 'left'}" :src="photo" alt="">
    <div class="project-title">
      {{title}}
    </div>
    <div class="project-description mt-2">
      {{description}}
    </div>
    <a :href="'/projects/' + project_id">
      <button class="learn-more" id="learn-btn">Learn more</button>
    </a>
  </div>
</template>

<script>
export default {
  name: "Project",
  props: ["title", "description", "float", "project_id", "photo"]
}
</script>

<style scoped>
.project {
  width: 100%;
  padding: 30px 40px;
  background: var(--light-blue);
  overflow: auto;
  border-radius: 10px;
}

.project-title {
  font-size: 24px;
  color: #9bb0ff;
}

.learn-more {
  font-size: 18px;
  padding: 10px 30px;
  background: var(--blue);
  border-radius: 15px;
  margin-top: 15px;
}

.project-image {
  max-width: 100%;
  max-height: 100%;
  width: 300px;
  border-radius: 10px;
}
</style>