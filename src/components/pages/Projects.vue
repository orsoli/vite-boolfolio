<script>
// Import
import AppLoader from '../BaseComponents/AppLoader.vue';

import axios from 'axios';

export default {
    data() {
        return {
            // Variables
            projectsUrl: 'http://127.0.0.1:8000/api/projects', // Save endpoint api
            imageStoreUrl: 'http://127.0.0.1:8000/storage/', // Save url from server
            projects:[], // Save projects in array
            loading: true, // Flag to show Apploading
        };
    },

    components: {
        AppLoader,
    },

    methods: {
        getProjectsResults(){
            axios.get(this.projectsUrl).then((response) => {

             console.log(response.data.results) // Console log testing

             this.projects = response.data.results // Save the results in this projects array
            })
                .catch((error) => {
                    console.log(error); // Print errors in console
                })
                .finally(() => {
                    console.log("Geting api Projects results is finished") // Print message after api riturn results
                    this.loading = false;
                });
        }
    },

    computed:{
        // projectImage(){
        //     return this.imageStoreUrl+project.image_url;
        // }
    },

    mounted(){
        this.getProjectsResults();
    }
};
</script>

<template>
    <!-- Loader -->
    <AppLoader v-if="loading"/>

    <!-- Main -->
    <main v-else>
        <div class="container py-4">
            <div class="main-title">
                <h1 class="text-center mb-5">
                    Most popular Projects
                </h1>
            </div>
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
                <div class="col" v-for="project in projects" :key="project.id">
                    <div class="card shadow">
                        <img :src="this.imageStoreUrl+project.image_url" class="card-img-top" :alt="project.name" v-if="project.image_url">
                        <div class="card-body">
                            <h5 class="card-title">{{ project.name }}</h5>
                            <h6 class="card-subtitle mb-2 text-body-secondary">{{ project.type.title }}</h6>
                            <p class="card-text">{{ project.description }}</p>
                            <small class="card-subtitle text-body-secondary">
                                Technologies to use: <span class="badge text-bg-info me-1" v-for="technology in project.technologies" :key="technology.id">{{technology.name}}</span>
                            </small>
                            <h6 class="card-subtitle py-3 text-body-secondary">Project Manager: <strong class="text-dark">{{ project.project_manager }}</strong></h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style lang='scss' scoped>
.card{
    height: 300px;
    cursor: pointer;

    img{
        height: 100px;
        object-fit: cover;
        position: center;
        padding: 5px;
    }
}
</style>