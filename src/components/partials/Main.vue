<script>
// Import 
import axios from 'axios';

export default {
    data() {
        return {
            // Variables
            projectsUrl: 'http://127.0.0.1:8000/api/projects', // Save endpoint api
        };
    },

    methods: {
        getProjectsResults(){
            axios.get(this.projectsUrl).then((response) => {
             console.log(response)
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
</template>

<style lang='scss' scoped></style>