<script>
export default {

}
</script>

<template>
    <section>
        <h2>Contatti</h2>
        <div>

            <div>
                <font-awesome-icon class="contact-icon" icon="fa-solid fa-envelope" />
                <span>danieleanto96@gmail.com </span>
                <a href="mailto:someone@example.com">Invia un email</a>
            </div>
            <div>
                <font-awesome-icon class="contact-icon" icon="fa-brands fa-linkedin" />
                <span>www.linkedin.com/in/daniele-antonaci</span>

            </div>
            <div>
                <font-awesome-icon class="contact-icon" icon="fa-brands fa-github" />
                <span>DanieleAntonaci</span>
            </div>
            <div>
                <font-awesome-icon class="contact-icon" icon="fa-solid fa-file" />
                <a href="file/Acquisizione" target="_blank">Curriculum</a>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
@use '../../style/partials/mixin' as *;
@use '../../style/partials/variables' as *;

h2 {
    margin: 5rem 0 1rem;
}

div {
    .contact-icon {
        padding: .5rem 2rem;
        vertical-align: middle;
    }
}
</style>