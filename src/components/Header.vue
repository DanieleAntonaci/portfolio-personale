<script>
export default {

}
</script>

<template>
    <div class="container">
        <h1>
            Header
        </h1>
        <button class="bars">
            <font-awesome-icon  icon="fa-solid fa-bars" />

        </button>
        <ul>
            <li>
                menu
            </li>
        </ul>
    </div>
</template>

<style scoped lang="scss">
@use '../style/partials/mixin' as *;
@use '../style/partials/variables' as *;

.container {
    border-bottom: .5px solid rgb(106, 106, 106);
    background-color: rgb(41, 41, 41);
    padding: 10px;

    position: sticky;
    top: 0;
    z-index: 999;

    display: flex;
    justify-content: space-between;
    align-items: center;

    ul {
        display: none;
    }

    @media (min-width: 700px) {
        .bars {
            display: none;
        }

        ul {
            display: inline;

        }

    }
}
</style>