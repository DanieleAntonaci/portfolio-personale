<script>
import AboutMe from './main/AboutMe.vue';
import Heroes from './main/Heroes.vue';
import Projects from './main/Projects.vue';

export default {
    components: { AboutMe, Heroes, Projects },
}
</script>

<template>
    <main class="container" >
        <Heroes/>
        <Projects/>
        <AboutMe/>
    </main>
</template>

<style scoped lang="scss">
@use '../style/partials/mixin' as *;
@use '../style/partials/variables' as *;
</style>