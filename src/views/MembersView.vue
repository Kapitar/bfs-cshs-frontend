<template>
  <div class="container">
    <h1 class="title text-center" id="members-title"></h1>
    <div class="members grid xl:grid-cols-4 grid-cols-2 lg:gap-x-20 gap-y-4 lg:mb-0 mb-5">
      <div class="grid grid-cols-subgrid col-span-3">
        <div class="xl:col-start-2 col-start-1">
          <Person
              photo="/src/assets/images/photos/Tanvi.jpg"
              name="Tanvi Kumar"
              position="President"
          />
        </div>
        <div class="xl:col-start-3 col-start-2">
          <Person
              photo="/src/assets/images/photos/Grace.jpg"
              name="Grace Chun"
              position="Vice President"
          />
        </div>
      </div>

      <div class="col-start-1">
        <Person
            photo="/src/assets/images/photos/Chloe.jpg"
            name="Chloe Jang"
            position="Treasurer"
        />
      </div>
      <div class="col-start-2">
        <Person
            photo="/src/assets/images/photos/Artem.jpg"
            name="Artem Kim"
            position="Webmaster"
        />
      </div>
      <div class="xl:col-start-3 col-start-1">
        <Person
            photo="/src/assets/images/photos/Justin.jpg"
            name="Justin Yeo"
            position="Webmaster"
        />
      </div>
      <div class="xl:col-start-4 col-start-2">
        <Person
            photo="/src/assets/images/photos/Barnes.jpg"
            name="Dr. Barnes"
            position="Advisor"
        />
      </div>
    </div>
  </div>
</template>

<script>
import TypeIt from "typeit";
import Person from "../components/Person.vue"

export default {
  name: "MembersView",
  components: {Person},
  mounted() {
    new TypeIt("#members-title", {
      strings: "Members",
      speed: 60,
      startDelay: 3600
    }).go();
  }
}
</script>

<style scoped>
.members {
  margin-top: 50px;
    margin-bottom: 100px;
}
</style>