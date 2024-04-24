<template>
    <div class="container">
        <h1 class="title text-center" id="about-title"></h1>
        <h2>Our mission</h2>
        <p>The Computer Science Honor Society at BFS is committed to promoting excellence in computer science education
            and recognizing high school students who exhibit high academic and personal achievements in the field. We
            are proud to be a part of the nationwide network of honor societies supported by the Computer Science
            Teachers Association (CSTA).</p>
    </div>
</template>

<script>
import TypeIt from "typeit";

export default {
    name: "AboutView",
    mounted() {
        new TypeIt("#about-title", {
            strings: "About BFS CSHS",
            speed: 60,
            startDelay: 3300
        }).go();
    }
}
</script>

<style scoped>

h2 {
    font-size: 3em;
}

h3 {
    font-size: 1.17em;
}

h4 {
    font-size: 1em;
}

h5 {
    font-size: 0.83em;
}

h6 {
    font-size: 0.67em;
}

img {
    margin: 0 auto;
}
</style>