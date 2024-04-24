<template>
    <div class="container">
        <h1 class="title text-center" id="about-title"></h1>
        <p>The Computer Science Honor Society at BFS is committed to promoting excellence in computer science education
            and recognizing high school students who excel academically and personally in this field. We proudly align
            ourselves with the nationwide network of honor societies supported by the Computer Science Teachers
            Association (CSTA).
        </p>
        <br>
        <p>
            Our mission extends beyond academic achievement; we embrace the core values of our schoolwide learner
            outcomes. We strive to honor students who not only demonstrate academic prowess but also exhibit social
            consciousness, diligence, effective communication, respect, and a passion for lifelong learning.

        </p>
        <br>
        <p>
            As members of our society, we pledge to embody these values within our organization and throughout our
            community. We seek to contribute positively to computer science education and ethical technological
            advancement. In collaboration with CSTA, we aim to cultivate a supportive environment that fosters the
            growth of future leaders in computer science, driven by a sense of social responsibility and a commitment to
            ongoing personal and academic development.
        </p>
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