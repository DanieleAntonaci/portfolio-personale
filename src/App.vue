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

      <div>

        <Main/>
        <Footer/>
        
      </div>
  </div>
</template>

<style lang="scss">
@use './style/general.scss' as *;
@use './style/partials/mixin' as *;
@use './style/partials/variables' as *;

#container {
  max-width: 1700px;
  margin: 0 auto;
  color: white;

}
</style>
