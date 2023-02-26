<script>
export default {

}
</script>

<template>
    <section>
        <h1>My projects</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, mollitia</p>
        <div class="cards">
            <div  class="card">
                <a href="">

                    <img src="images/spotify-2.png" alt="">
                    <div class="title-link">
                        <h2>Spotify</h2>
                        <div class="card-link">
                            <a href="#">
                                <font-awesome-icon icon="fa-brands fa-github" />
                            </a>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nam autem fugiat odit, et perspiciatis itaque repellendus repellat incidunt fuga</p>
                </a>
            </div>
            <div  class="card">
                <a href="">

                    <img src="images/spotify-2.png" alt="">
                    <div class="title-link">
                        <h2>Spotify</h2>
                        <div class="card-link">
                            <a href="#">
                                <font-awesome-icon icon="fa-brands fa-github" />
                            </a>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nam autem fugiat odit, et perspiciatis itaque repellendus repellat incidunt fuga</p>
                </a>
            </div>
            <div  class="card">
                <a href="">

                    <img src="images/spotify-2.png" alt="">
                    <div class="title-link">
                        <h2>Spotify</h2>
                        <div class="card-link">
                            <a href="#">
                                <font-awesome-icon icon="fa-brands fa-github" />
                            </a>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nam autem fugiat odit, et perspiciatis itaque repellendus repellat incidunt fuga</p>
                </a>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
@use '../../style/partials/mixin' as *;
@use '../../style/partials/variables' as *;

section {
    h1 {
        font-size: 2.5rem;
        padding-top: 2rem;
    }

    p {
        padding: 1rem 0 5rem;
        opacity: .6;
    }

    .cards {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        .card {
            max-width: 100%;
            background-color: rgb(41, 41, 41);
            box-shadow: inset 0 0 12px 12px rgb(37, 37, 37);
            border-radius: 1.3rem;
            margin-bottom: 4rem;



            img {
                width: calc(100% - 2.4rem);
                margin: 1.2rem;
                border-radius: 1.2rem;
                box-shadow: 0 0 10px .2px rgb(97, 97, 97);
            }

            .title-link {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 1.4rem 2rem;

                h2 {
                    color: rgb(190, 0, 32);
                }

                .card-link {
                    padding-right: 1rem;
                    font-size: 1.5rem;
                }
            }

            p {
                padding: 0 2rem 2rem;
            }
        }
    }

    @media (min-width: 700px) {
        .cards {
            .card {
                max-width: calc(50% - 1.5rem);
            }
        }
    }
}
</style>