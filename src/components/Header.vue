<script>
export default {

}
</script>

<template>
    <div class="container">
        <h1>
            Header
        </h1>
    </div>
</template>

<style scoped lang="scss">
@use '../style/partials/mixin' as *;
@use '../style/partials/variables' as *;

.container {
    border-bottom: .5px solid rgb(106, 106, 106);
    position: sticky;
    top: 0;
    background-color: rgb(41, 41, 41);
}
</style>