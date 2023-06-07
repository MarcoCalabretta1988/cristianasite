<script>

import AppJumbo from '../components/AppJumbo.vue';
export default {
    name: "Home Page",
    components: { AppJumbo },
}
</script>

<template>
    <!-- Jumbotron -->
    <AppJumbo />

    <!-- Home section -->
    <section id="home" class="py-5">
        <div class="container home-content">
            <h1 class="text-success py-3">- Home page -</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa magni illum temporibus ullam. Fugit
                temporibus
                nobis et repellat magni delectus quod libero assumenda repellendus ipsum, voluptatibus error odio at ea!</p>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora velit nulla in ea fugiat temporibus
                quisquam,
                est amet, voluptate, consectetur quae facilis voluptatem nobis fuga dolor ut? Ab, aspernatur veniam.
                Assumenda provident eaque aspernatur vel aliquid debitis dolore accusantium adipisci deleniti delectus
                aliquam
                aut at eos reiciendis, corporis repellendus odit sunt perspiciatis dolores, nihil earum veritatis laudantium
                voluptate nostrum. Natus.
                Quae reprehenderit asperiores necessitatibus totam quisquam nam illum ab quibusdam fugit doloribus tempore
                iusto
                exercitationem modi omnis odit aspernatur delectus, libero deserunt dolor animi velit optio laudantium.
                Doloribus, quas nostrum!
                Saepe natus distinctio quae, blanditiis corporis voluptatum? Minima pariatur quam dolore, in optio eligendi
                tempora dolorem sint eius voluptatem quasi minus repellat cumque non! Cumque, amet tempora! Sed, magnam
                perferendis!
                Commodi praesentium reiciendis quod dolore quae fugit totam, eius mollitia omnis nobis minus quam? Adipisci
                ullam exercitationem porro magni quibusdam a assumenda rerum amet placeat molestias? Maxime tempore totam
                atque!
            </p>
        </div>
    </section>
</template>

<style lang="scss" scoped>
#home {

    background-image: url('../assets/img/background1.jpg');
    background-size: cover;

    min-height: calc(100vh - 72px);



    .home-content {

        background-color: rgba($color: #000000, $alpha: 0.6);
        text-align: center;
    }
}
</style>