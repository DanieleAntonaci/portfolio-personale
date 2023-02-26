<script>

export default {
    props: {
        menuArray: Array,
    },
    data() {
        return {
            menuShow: false,

        }
    },

}

</script>

<template>
    <div class="bars">

        <button @click="menuShow = !menuShow">
            <font-awesome-icon icon="fa-solid fa-xmark" v-if="menuShow"/>
            <font-awesome-icon icon="fa-solid fa-bars" v-else/>
            
        </button>
        <ul v-show="menuShow" class="sideMenu">
            <li v-for="(menuElem, indexMenu) in menuArray" :key="indexMenu">
                <a :href="menuElem.link">{{ menuElem.title }}</a>
            </li>
        </ul>
    </div>
</template>

<style scoped lang="scss">
@use '../style/partials/mixin' as *;
@use '../style/partials/variables' as *;

.bars {
    button {
        padding: 10px;
    }

    .sideMenu {
        position: absolute;
        right: 0;
        top: 60px;
        background-color: black;
        z-index: 800;
        height: calc(100vh - 60px);
        width: 90%;
    }
}

@media (min-width: 700px) {
    .bars {
        display: none;
    }


}
</style>