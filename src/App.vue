<script>
// Import elements
import Header from './components/partials/Header.vue';
import Main from './components/partials/Main.vue';
import Footer from './components/partials/Footer.vue';

export default {
    data() {
        return {
        };
      },
      components:{
        Header,
        Main,
        Footer,
      }
  };
</script>

<template>
  <Header></Header>
  <Footer></Footer>
</template>

<style lang="scss">
@use 'bootstrap/scss/bootstrap.scss';
</style>
