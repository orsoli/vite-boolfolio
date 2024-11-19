<script>
// Imports
import { store } from '../../../js/store';

export default {
    name: 'ProjectDetails',
    data() {
        return {
        // Variables
          store,
          project: null, // Store single project
        };
    },

    components: {

    },
    computed: {
        imgSrc(){
            return this.store.imageStoreUrl+this.project.image_url
        }
    },

    methods: {
        // Define method to get single project from projects
        getProject(){
            this.project = this.store.projects.find(project => project.id == this.$route.params.id)
        }

    },

    created(){
        this.getProject()
        console.log(this.project)
    }
};
</script>

<template>
    <div class="container py-5">
            <img :src="imgSrc" class="card-img-top" :alt="`${project.name}-image`">
            <div class="card-body py-3">
                <h5 class="card-title">{{project.name}}</h5>
                <p class="card-text">{{project.description}}</p>
                <p class="p-0 m-0">Technology to use: </p>
                <p class="card-text" v-for="technology in project.technologies" :key="technology.id"><small class="text-body-secondary">{{ technology.name }} - {{technology.type}} - {{ technology.description }}</small></p>
                <p class="p-0 m-0">Project Type </p>
                <p class="card-text" v-if="project.type"><small class="text-body-secondary">{{ project.type.title }} - {{ project.type.description }}</small></p>
        </div>
    </div>
</template>

<style lang='scss' scoped>
img{
    height: 300px;
    object-fit: cover;
    object-position: top;
    border: 1px solid gray;
    border-radius: 5px;
    box-shadow: 1px 1px 10px gray;
}
</style>