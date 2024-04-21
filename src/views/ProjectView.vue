<template>
  <div class="container">
    <div class="project mt-5 pl-5 pr-5 mb-5">
      <div class="project-title">
        ES Codementum International Coding Competition
      </div>
      <div class="project-meta">
        <p>Published on April 20, 2024</p>
      </div>

      <div class="project-description">
        <h1>Headings</h1>
        <h1>H1</h1>
        <h2>H2</h2>
        <h3>H3</h3>
        <h4>H4</h4>
        <h5>H5</h5>
        <h6>H6</h6>

        <h1>Paragraph</h1>
        <p>blahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblah</p>

        <h1>Image</h1>
        <img class="" src="../assets/images/example_image.jpg" alt="" width="80%">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectView"
}
</script>

<style scoped>
.project-title {
  font-size: 32px;
  color: #9bb0ff;
  font-weight: bold;
}

.project-description {
  word-wrap: break-word;
  width: 100%;
}

.project-description h1 {
  font-size: 2em;
}

.project-description h2 {
  font-size: 1.5em;
}

.project-description h3 {
  font-size: 1.17em;
}

.project-description h4 {
  font-size: 1em;
}

.project-description h5 {
  font-size: 0.83em;
}

.project-description h6 {
  font-size: 0.67em;
}

.project-description img {
  margin: 0 auto;
}
</style>