<script>
// Imports
import ProjectCard from './ProjectCard.vue';
import AppLoader from '../../BaseComponents/AppLoader.vue';

import { store } from '../../../js/store';

import axios from 'axios';

export default {
    data() {
        return {
            // Variables
            projectsUrl: 'http://127.0.0.1:8000/api/projects', // Save endpoint api
            projects:[], // Save projects in array
            store, // Store.js
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
             this.store.loading = false;
            })
                .catch((error) => {
                    console.log(error); // Print errors in console
                })
                .finally(() => {
                    console.log("Geting api Projects results is finished") // Print message after api riturn results
                });
        }
    },

    mounted(){
        this.getProjectsResults();
    }
};
</script>

<template>
    <!-- Loader -->
    <AppLoader v-if="this.store.loading" />
    <!-- Main -->
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
                        :project="project" 
                />
            </div>
            <!-- Paginator -->
            <div class="paginate mt-5">
                <nav aria-label="Page navigation example">
                    <ul class="pagination">
                        <li class="page-item">
                            <a class="page-link" href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item">
                            <a class="page-link" href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </main>
</template>

<style lang='scss' scoped>

</style>