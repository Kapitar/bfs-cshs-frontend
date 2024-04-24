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
                <img class="" src="../assets/images/example_image.jpg" alt="" width="80%">
                <p>As part of our continuing celebration for Computer Science Education Week, high school students from
                    the Computer Science Honor Society organized the Codementum Coding Competition for upper elementary
                    students in the library on Monday, December 11th. This after-school event offered an engaging hour
                    of coding for our younger sharks. The upper elementary students, regardless of their coding
                    experience, enthusiastically tackled challenges and called for support from the high school CS
                    students as they needed it. The event marked the Computer Science Honor Society's inaugural service
                    project and proved to be a rewarding experience for all participating students alike!</p>

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

.project-description h1,
.project-description h2,
.project-description h3,
.project-description h4,
.project-description h5,
.project-description h6,
.project-description p,
.project-description img {
    padding-top: 20px;
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