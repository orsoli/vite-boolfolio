<script>
export default {
    data() {
        return {
            imageStoreUrl: 'http://127.0.0.1:8000/storage/', // Save url from server
        };
    },

    props: {
        project: {
            type: Object,
            required: true,
        }
    },

    components: {

    },

    methods: {

    },

    computed:{
        projectImage(){
            return this.imageStoreUrl+this.project.image_url;
        }
    },
};
</script>

<template>
    <div class="col">
        <div class="card shadow">
            <img :src="projectImage" class="card-img-top" :alt="project.name" v-if="project.image_url">
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