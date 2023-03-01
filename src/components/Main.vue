<script>
import AboutMe from './main/AboutMe.vue';
import Heroes from './main/Heroes.vue';
import Projects from './main/Projects.vue';
import Skills from './main/Skills.vue';

export default {
    components: { AboutMe, Heroes, Projects, Skills },
}
</script>

<template>
    <main class="container" >
        <Heroes/>
        <Projects/>
        <Skills/>
        <AboutMe/>
    </main>
</template>

<style scoped lang="scss">
@use '../style/partials/mixin' as *;
@use '../style/partials/variables' as *;
</style>