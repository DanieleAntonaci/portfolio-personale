<script>
export default {

}
</script>

<template>
    <section class="heroes">
        <div>
            <img src="vite.svg" alt="">
        </div>
        <div>
            <h3>Hello i'm Daniele</h3>
            <h1>Full stack developer</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores deleniti consequatur inventore amet vitae iure esse aliquam sint. Saepe repellendus, molestiae reiciendis natus repudiandae sequi voluptates suscipit officiis dolor facere.</p>
            <a class="btn-about-me" href="#">Aboout me</a>
        </div>
    </section>
</template>

<style scoped lang="scss">
@use '../../style/partials/mixin' as *;
@use '../../style/partials/variables' as *;

.heroes {
    display: flex;
    flex-direction: column;


    &>div {


        width: 100%;

        &:first-child {
            display: flex;
            justify-content: center;


            img {
                width: 70%;
            }
        }

        h3 {
            margin-top: 40px;
            color: rgb(190, 0, 32);

        }

        h1 {
            font-size: 40px;
            margin-bottom: 20px;

            // background: -webkit-linear-gradient(110deg, rgb(255, 25, 0) 30%, rgb(248, 194, 0));
            // -webkit-background-clip: text;
            // -webkit-text-fill-color: transparent;

        }

        p {
            margin-bottom: 40px;
            opacity: .7;
            line-height: 30px;
        }

        .btn-about-me {
            padding: 10px 15px;
            background-color: rgb(190, 0, 32);
            margin: 20px 0;
        }
    }


}

@media (min-width: 700px) {
    .heroes {

        flex-direction: row;

        &>div {

            margin: 40px;
            width: 40%;

            &:first-child {
                display: flex;
                justify-content: flex-end;
                padding-right: 100px;


            }


            h3 {
                color: rgb(190, 0, 32);

            }

            h1 {
                font-size: 40px;
                margin-bottom: 20px;

                // background: -webkit-linear-gradient(110deg, rgb(255, 25, 0) 30%, rgb(248, 194, 0));
                // -webkit-background-clip: text;
                // -webkit-text-fill-color: transparent;

            }

            p {
                margin-bottom: 40px;
                opacity: .7;
                line-height: 30px;
            }

            .btn-about-me {
                padding: 10px 15px;
                background-color: rgb(190, 0, 32);
                margin: 20px 0;
            }
        }
    }

}
</style>