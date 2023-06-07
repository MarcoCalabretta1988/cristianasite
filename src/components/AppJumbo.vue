<script>
export default {
    name: 'Jumbotron',
    data: () => ({
        currentIndex: 0,
        rotate: null,
        pictures: [
            {
                image: '01',
                title: 'Croissant',

            }, {
                image: '02',
                title: 'Catering',

            }, {
                image: '03',
                title: 'Dolci moderni',

            }, {
                image: '04',
                title: 'Macaron',

            }, {
                image: '05',
                title: "Dolci internazionali",

            }
        ],
    }),

    methods: {

        buildImagePath(img) {
            const url = new URL(`../assets/img/slider/${img}.jpg`, import.meta.url)
            return url.href
        },
        changePic(target) {
            if (target === 'next') {
                this.currentIndex++
                if (this.currentIndex === this.pictures.length) {
                    this.currentIndex = 0;
                }
            }
        },
        stopAutoPlay() {
            clearInterval(this.rotate);
        },
        autoPlay() {
            this.rotate = setInterval(() => { this.changePic('next'); }, 4000);
        }
    },
    mounted() {
        this.autoPlay();
    },
}
</script>

<template>
    <section id="jumbotron" class="py-4">
        <div class="container">
            <div class="gallery" @mouseover="stopAutoPlay" @mouseleave="autoPlay">
                <figure v-for="(pic, i) in pictures" :class="{ 'active': currentIndex === i }">
                    <img :src="buildImagePath(pic.image)" :alt="pic.title">
                    <h1>{{ pic.title }}</h1>

                </figure>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
#jumbotron {
    min-height: 450px;
    background-color: black;

    .gallery {
        height: 450px;
        width: 1300px;
        overflow: hidden;
        position: relative;
        color: white;
        border-radius: 30px;

        img {
            width: 1300px;
            height: 450px;
            object-fit: cover;
        }

        h1 {
            position: absolute;
            bottom: 100px;
            right: 50px;
            text-shadow: 2px 2px black;
            font-size: 50px;
        }

    }


    figure {

        display: none;
    }

    figure.active {

        display: inline-block;
    }


}
</style>