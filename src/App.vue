<script>
// Import elements
import Header from './components/partials/Header.vue';
import Footer from './components/partials/Footer.vue';
import { RouterView } from 'vue-router';

export default {
    data() {
        return {
        };
      },
      components:{
        Header,
        RouterView,
        Footer,
      }
  }
</script>

<template>
  <Header />
  <RouterView />
  <Footer />
</template>

<style lang="scss">
@use 'bootstrap/scss/bootstrap.scss';
</style>
