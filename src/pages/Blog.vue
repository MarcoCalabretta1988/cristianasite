<script>
export default {
    name: 'Blog',
    data: () => ({})
}
</script>

<template>
    <section id="blog">
        <div class="container blog-content">
            <h1 class="text-success py-3">- Blog -</h1>

            <div class="row row-col-4 g-5">
                <div class="col">

                    <div class="card p-3" style="width: 18rem;">
                        <img src="https://www.pasticceriacavazzoni.it/wp-content/uploads/2021/06/torte-copertina-pasticceria-cavazzoni-480x350-1.jpg"
                            class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Torte Classiche</h5>
                            <p class="card-text">Diamo un occhiata alle migliori torte classiche del 2023</p>
                            <router-link :to="{ name: 'blog-article', params: { id: 1 } }" class="btn btn-success">Leggi
                                Articolo</router-link>
                        </div>
                    </div>
                </div>

                <div class="col">

                    <div class="card p-3" style="width: 18rem;">
                        <img src="https://www.nutridoc.it/api/articles/00000000236/panificazione%20naturale.jpg"
                            class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Panificazione</h5>
                            <p class="card-text">Tutti i segreti della panificazione</p>
                            <router-link :to="{ name: 'blog-article', params: { id: 1 } }" class="btn btn-success">Leggi
                                Articolo</router-link>
                        </div>
                    </div>
                </div>

                <div class="col">

                    <div class="card p-3" style="width: 18rem;">
                        <img src="https://www.fattoincasadabenedetta.it/wp-content/uploads/2022/09/MOUSSE_MILLE_GUSTI_SITO-7_intro.jpg"
                            class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Mousse</h5>
                            <p class="card-text">Mousse per tutti!</p>
                            <router-link :to="{ name: 'blog-article', params: { id: 1 } }" class="btn btn-success">Leggi
                                Articolo</router-link>
                        </div>
                    </div>
                </div>
                <div class="col">

                    <div class="card p-3" style="width: 18rem;">
                        <img src="https://www.lucaoripasticcere.com/wp-content/uploads/2018/10/IMG_0972.jpg"
                            class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Praline dolce scioglievolezza</h5>
                            <p class="card-text">Praline per tutti! quale è la tua?</p>
                            <router-link :to="{ name: 'blog-article', params: { id: 1 } }" class="btn btn-success">Leggi
                                Articolo</router-link>
                        </div>
                    </div>
                </div>
                <div class="col">

                    <div class="card p-3" style="width: 18rem;">
                        <img src="https://www.finedininglovers.it/sites/g/files/xknfdk1106/files/styles/article_1200_800_fallback/public/2020-11/panettoni-artigianali-2020.jpg?itok=bbTKDdfe"
                            class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Panettoni</h5>
                            <p class="card-text">Panettone storia e segreti del piu classico dolce di natale</p>
                            <router-link :to="{ name: 'blog-article', params: { id: 1 } }" class="btn btn-success">Leggi
                                Articolo</router-link>
                        </div>
                    </div>
                </div>
                <div class="col">

                    <div class="card p-3" style="width: 18rem;">
                        <img src="https://www.italiangourmet.it/media/2017/07/dessert-al-piatto-1.jpg" class="card-img-top"
                            alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Dolci al piatto</h5>
                            <p class="card-text">Dolce al piatto arte e gusto</p>
                            <router-link :to="{ name: 'blog-article', params: { id: 1 } }" class="btn btn-success">Leggi
                                Articolo</router-link>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    </section>
</template>

<style lang="scss" scoped>
#blog {
    background-image: url('../assets/img/background1.jpg');
    background-size: cover;

    min-height: calc(100vh - 72px);

    .blog-content {

        background-color: rgba($color: #000000, $alpha: 0.6);
        text-align: center;
    }

    .card {

        background-color: rgba($color: #000000, $alpha: 0.7);
        height: 400px;

        img {
            height: 200px;
        }

        &:hover {
            background-color: rgba($color: #ffffff, $alpha: 0.6);
            color: black;
        }
    }
}
</style>