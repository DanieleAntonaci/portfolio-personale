<script>
export default {
    data() {
        return {
            frontEnd: [
                {
                    name: 'HTML5',
                    img: 'html5.png',
                },
                {
                    name: 'CSS',
                    img: 'css.png',
                },
                {
                    name: 'Bootstrap',
                    img: 'bootstrap.png',
                },
                {
                    name: 'Java Script',
                    img: 'js.png',
                },
                {
                    name: 'Vue',
                    img: 'Vue.png',
                },
                {
                    name: 'Axios',
                    img: 'axios.png',
                },
                {
                    name: 'Sass',
                    img: 'sass.png',
                },
                {
                    name: 'Node JS',
                    img: 'nodejs.webp',
                },
            ],
            backEnd: [
                {
                    name: 'MySql',
                    img: 'mysql.webp',
                },
                {
                    name: 'MAMP',
                    img: 'mamp.png',
                },
                {
                    name: 'PhpMyAdmin',
                    img: 'phpmyadmin.png',
                },
                {
                    name: 'PHP',
                    img: 'php.png',
                },
                {
                    name: 'Laravel',
                    img: 'laravel.png',
                },
            ]
        }
    },
}
</script>

<template>
    <section id="skills">
        <h2>Skills</h2>
        <div id="container">

            <!-- skills back-end -->
            <div>
                <h3>Front-end</h3>
                <ul class="skills-list">
                    <li v-for="element in frontEnd">
                        <img :src='"skills/" + element.img' :alt="element.name">
                        
                        <h5>{{ element.name }}</h5>
                    </li>
                </ul>
            </div>

            <!-- skills back-end -->
            <div>
                <h3>Back-end</h3>
                <ul class="skills-list">
                    <li v-for="element in backEnd">
                        <img :src='"skills/" + element.img' :alt="element.name">

                        <h5>{{ element.name }}</h5>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
section {
    h2 {
        margin-bottom: 2rem;
    }

    #container {
        display: flex;

        &>div {


            width: calc(50% - .4rem);

            .skills-list {
                text-align: center;

                img {
                    width: 3rem;
                    margin: 1rem 0;
                }

                h5 {
                    font-size: 1rem;
                }
            }
        }
    }
}


@media (min-width: 700px) {
    #container {
        &>div {


            .skills-list {
                display: flex;
                align-items: baseline;
                flex-wrap: wrap;



                li {
                    padding: 0 1rem;
                }
            }

        }
    }
}
</style>