<script>
import HamburgerMenu from './HamburgerMenu.vue';

export default {
    components: { HamburgerMenu },

    data() {
        return {
            headerMenu: [
                {
                    title: 'MENU',
                    link: '#'

                },
                {
                    title: 'MY PROYECT',
                    link: '#my-project'

                },
                {
                    title: 'SKILLS',
                    link: '#skills'

                },
                {
                    title: 'CONTACT ME',
                    link: '#'

                },
            ],


        }
    },
    methods: {

    },
}
</script>

<template>
    <header class="container">
        <h1>
            Header
        </h1>
        <HamburgerMenu class="bars" :menuArray='headerMenu'/>
        <ul class="extendedMenu">
            <li v-for="(menuElem, indexMenu) in headerMenu" :key="indexMenu">
                <a :href="menuElem.link">{{ menuElem.title }}</a>
            </li>
        </ul>
    </header>
</template>

<style scoped lang="scss">
@use '../style/partials/mixin' as *;
@use '../style/partials/variables' as *;



.container {
    background: linear-gradient(310deg, rgba(0, 0, 0, 0.9) 60%, rgb(190, 0, 32, .9));
    height: 60px;

    position: sticky;
    top: 0;
    z-index: 999;

    display: flex;
    justify-content: space-between;
    align-items: center;

    .extendedMenu {
        display: none;
    }

    @media (min-width: 700px) {

        .extendedMenu {
            display: flex;

            li {
                margin-left: 40px;
            }
        }

    }
}
</style>