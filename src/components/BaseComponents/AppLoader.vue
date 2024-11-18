<script>
export default {
    name: 'Apploader',
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
    <div class="container">
        <div class="loader"></div>
    </div>
</template>

<style lang='scss' scoped>
.loader {
  width: fit-content;
  font-weight: bold;
  font-family: sans-serif;
  font-size: 30px;
  padding-bottom: 8px;
  background: linear-gradient(currentColor 0 0) 0 100%/0% 3px no-repeat;
  animation: l2 2s linear infinite;
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
}
.loader:before {
  content:"Loading..."
}
@keyframes l2 {to{background-size: 100% 3px}}
</style>