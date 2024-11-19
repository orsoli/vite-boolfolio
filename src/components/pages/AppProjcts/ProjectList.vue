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
            projectsUrl: 'http://127.0.0.1:8000/api/projects', // Store endpoint api
            projects:[], // Store projects in array
            links: [], // Store links geting from api
            lastPage: 1, // Store initial value of last page projects
            currentPage: 1, // Store current page of projects
            store, // Store.js
        };
    },

    components: {
        ProjectCard,
        AppLoader,
    },

    methods: {
        getProjectsResults(currentPage){
            axios.get(this.projectsUrl,{
                params: {
                    page: currentPage
                }
            }).then((response) => {

                console.log(response.data.results.data) // Console log testing
                console.log(response.data.results.links) // Console log testing

                this.projects = response.data.results.data // Save the results in this projects array
                this.links = response.data.results.links
                this.lastPage = parseInt(this.links[this.links.length - 2].label); // Store the last page geting from api
            })
            .catch((error) => {
                console.log(error); // Print errors in console
            })
            .finally(() => {
                console.log("Geting api Projects results is finished") // Print message after api riturn results
                this.store.loading = false;
                });
        },

        // Paginator methods
        getNextPage(){
            if(this.currentPage < this.lastPage) this.currentPage ++;
            this.getProjectsResults(this.currentPage)
        },
        getPreviousPage(){
            if(this.currentPage > 1) this.currentPage --;
            this.getProjectsResults(this.currentPage);
        },
        getNumberPage(page){
            this.getProjectsResults(page)
        }
    },

    mounted(){
        this.getProjectsResults(this.currentPage);
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
                            <button class="page-link" :class="{ 'disabled' : links[0].url === null }" aria-label="Previous" @click="getPreviousPage">
                                <span aria-hidden="true">&laquo;</span>
                            </button>
                        </li>
                        <li class="page-item" v-for="link in links" :key="link.label">
                            <button class="page-link" :class="{'active' : link.active}" v-if="!isNaN(parseInt(link.label))" @click="getNumberPage(link.label)">{{link.label}}</button>
                        </li>
                        <li class="page-item">
                            <button class="page-link" :class="{ 'disabled' : links[links.length - 1].url === null }" aria-label="Next" @click="getNextPage">
                                <span aria-hidden="true">&raquo;</span>
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </main>
</template>

<style lang='scss' scoped>

</style>