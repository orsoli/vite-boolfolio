<script>
export default {
    name: 'Contact',
    data() {
        return {
          
        };
    },

    components: {

    },

    methods: {

    }
};
</script>

<template>
    <div class="card text-bg-dark rounded-0">
        <img src="/public/img/bg/web-dev-bg.jpg" class="card-img rounded-0" alt="web-dev img" id="contact-bg">
        <div class="card-img-overlay">
            <h1 class="card-title fw-bold">Contact</h1>
            <p class="card-text"><small>Lets talk about your next project</small></p>
        </div>
    </div>
    <div class="container">
        
    </div>
</template>

<style lang='scss' scoped>
#contact-bg{
    height: 400px;
    object-fit: cover;
    object-position: center;
    opacity: 50%;
}
h1{
    font-size: 80px;
}
</style>