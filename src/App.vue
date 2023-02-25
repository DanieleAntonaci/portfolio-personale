<script>
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
import Footer from "./components/Footer.vue";
export default {
  components: {
    Header,
    Main,
    Footer
  }
}
</script>

<template>
  <div id="container">

      <Header/>
      <Main/>
      <Footer/>

  </div>
</template>

<style lang="scss">
@use './style/general.scss' as *;
@use './style/partials/mixin' as *;
@use './style/partials/variables' as *;

#container {
  background-color: rgb(41, 41, 41);
  height: 100vh;
  overflow-y: auto;
  color: white;



}
</style>
