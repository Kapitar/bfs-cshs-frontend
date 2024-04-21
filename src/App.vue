<template>
  <vue-particles
      id="tsparticles"
      @particles-loaded="particlesLoaded"
      :options="{
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: 'push'
                            },
                            onHover: {
                                enable: true,
                                mode: 'repulse'
                            },
                        },
                        modes: {
                            bubble: {
                                distance: 400,
                                duration: 2,
                                opacity: 0.8,
                                size: 40
                            },
                            push: {
                                quantity: 4
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4
                            }
                        }
                    },
                    particles: {
                        color: {
                            value: '#ffffff'
                        },
                        links: {
                            color: '#ffffff',
                            distance: 150,
                            enable: true,
                            opacity: 0.1,
                            width: 1
                        },
                        move: {
                            direction: 'none',
                            enable: true,
                            outModes: 'bounce',
                            random: false,
                            speed: 3,
                            straight: false
                        },
                        number: {
                            density: {
                                enable: true,
                            },
                            value: 80
                        },
                        opacity: {
                            value: 0.2
                        },
                        shape: {
                            type: 'circle'
                        },
                        size: {
                            value: { min: 1, max: 5 }
                        }
                    },
                    detectRetina: true
                }"
  />
  <div class="wrapper">
    <Loader :page="loaderText"/>
    <Navbar/>
    <div class="content flex">
      <router-view />
    </div>
    <Footer/>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import Loader from "./components/Loader.vue"

export default {
  name: "App",
  components: {Navbar, Loader, Footer},
  data() {
    return {
      loaderText: ""
    }
  },
  created() {
    let path = window.location.pathname;
    if(path === "/cshs/") {
      this.loaderText = "python bfs_cshs.py";
    } else if(path === "/cshs/about") {
      this.loaderText = "python bfs_cshs.py --page about";
    } else if(path === "/cshs/projects") {
      this.loaderText = "python bfs_cshs.py --page projects";
    } else if(path === "/cshs/members") {
      this.loaderText = "python bfs_cshs.py --page members";
    } else {
      this.loaderText = "python bfs_cshs.py --page " + path;
    }
  }
}
</script>

<style>
  body {
    background: var(--dark-blue);
    font-family: "Fira Mono", monospace;
    font-weight: 500;
    color: white;
  }

  .wrapper {
    display: flex;
    min-height: 100%;
    flex-direction: column;
  }

  .content {
    flex: 1 1 auto;
  }

  .title {
    margin-top: 40px;
    font-size: 48px;
  }
</style>