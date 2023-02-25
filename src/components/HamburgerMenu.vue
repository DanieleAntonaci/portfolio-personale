<script>
export default {
    data() {
        return {
            menuShow: false,

        }
    },
}
</script>

<template>
    <button @click="menuShow = !menuShow">
        <font-awesome-icon  icon="fa-solid fa-bars" />

    </button>
    <ul v-if="menuShow" class="sideMenu">
        <li>
            menu
        </li>
    </ul>
</template>

<style scoped lang="scss">
@use '../style/partials/mixin' as *;
@use '../style/partials/variables' as *;

.sideMenu {
    position: absolute;
    right: 0;
    top: 60px;
    background-color: black;
    z-index: 800;
    height: calc(100vh - 60px);
    width: 90%;
}
</style>