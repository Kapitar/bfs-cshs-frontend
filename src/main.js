import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import Particles from "@tsparticles/vue3";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.

import App from './App.vue'
import HomeView from "./views/HomeView.vue";
import AboutView from "./views/AboutView.vue";
import ProjectsView from "./views/ProjectsView.vue";
import MembersView from "./views/MembersView.vue";
import "./style.css"

const app = createApp(App).use(Particles, {
    init: async engine => {
        // await loadFull(engine); // you can load the full tsParticles library from "tsparticles" if you need it
        await loadSlim(engine); // or you can load the slim version from "@tsparticles/slim" if don't need Shapes or Animations
    },
});

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/bfs-cshs-frontend/', component: HomeView },
        { path: '/bfs-cshs-frontend/about', component: AboutView },
        { path: '/bfs-cshs-frontend/projects', component: ProjectsView },
        { path: '/bfs-cshs-frontend/members', component: MembersView },
    ]
})

app.use(router)
app.mount('#app')