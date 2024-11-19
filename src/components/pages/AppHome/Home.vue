<script>
export default {
    name: 'Home',
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
    <div class="home-wrapper">

        <div class="container py-5">
            <div class="card text-center">
                <div class="card-header">
                    MAKE CAREER IN
                </div>
                <div class="card-body">
                    <h1 class="card-title">WEBSITE</h1>
                    <p class="card-text">Development</p>
                    <a href="#" class="btn btn-primary">more</a>
                </div>
                <div class="card-footer text-body-secondary">
                    2 days ago
                </div>
            </div>
        </div>
    </div>
</template>

<style lang='scss' scoped>

.home-wrapper{
    background-image: url('/img/bg/web-dev-bg.jpg');
    background-size: cover;
    background-position: center;
}
</style>