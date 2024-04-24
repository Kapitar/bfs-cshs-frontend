<template>
    <div class="container">
        <h1 class="title text-center" id="projects-title"></h1>
        <div class="projects">
            <Project
                    v-for="(project, index) in projects"
                    class="project"
                    :id="'project-' + index"
                    :title="project.title"
                    :description="project.description"
                    :float="index % 2 === 0 ? 'right' : 'left'"
                    :project_id="project.id"
                    :photo="project.photo"
            />
        </div>
    </div>
</template>

<script>
import TypeIt from "typeit";
import Project from "../components/Project.vue"
import Photo from "../assets/images/example_image.jpg";

export default {
    name: "ProjectsView",
    data() {
        return {
            projects: [
                {
                    title: "ES Codementum International Coding Competition",
                    description: "As part of our continuing celebration for Computer Science Education Week, high school students from the Computer Science Honor Society organized the Codementum Coding Competition for upper elementary students in the library on Monday, December 11th. ",
                    id: 1,
                    photo: Photo
                },
                // {
                //   title: "ES Codementum International Coding Competition",
                //   description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, minus, sequi. Blanditiis consequuntur ipsa\n" +
                //       "      nobis quod repellat, rerum sequi veniam voluptas! Beatae ex facere facilis harum modi quaerat sunt totam.",
                //   id: 2,
                //   photo: Photo
                // }
            ],
        }
    },
    components: {Project},
    mounted() {
        let length = this.projects.length;
        setTimeout(() => {
            for (let i = 0; i < length; i++) {
                document.getElementById("project-" + i).style.opacity = "1";
            }
        }, 3400)
        new TypeIt("#projects-title", {
            strings: "Our projects",
            speed: 60,
            startDelay: 3600
        }).go();
    }
}
</script>

<style scoped>
.project {
    margin-top: 50px;
    opacity: 0;
    transition: opacity 0.5s, display 0.5s !important;
}
</style>