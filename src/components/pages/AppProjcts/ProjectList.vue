<script>
// Import
import ProjectCard from './ProjectCard.vue';
import AppLoader from '../../BaseComponents/AppLoader.vue';

import axios from 'axios';

export default {
    data() {
        return {
            // Variables
            projectsUrl: 'http://127.0.0.1:8000/api/projects', // Save endpoint api
            projects:[], // Save projects in array
            loading: true, // Flag to show Apploading
        };
    },

    components: {
        ProjectCard,
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

    mounted(){
        this.getProjectsResults();
    }
};
</script>

<template>
    <main v-if="loading">
        <!-- Loader -->
        <AppLoader />
    </main>

    <main v-else>
        <!-- Container -->
        <div class="container py-4">
            <div class="main-title">
                <h1 class="text-center mb-5">
                    Most popular Projects
                </h1>
            </div>
             <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
                <ProjectCard v-for="project in projects" 
                        :key="project.id"
                        :project="project" />
            </div>
        </div>
    </main>
</template>

<style lang='scss' scoped>
</style>