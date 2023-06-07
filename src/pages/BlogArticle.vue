<script>
export default {
    name: 'Blog Article',
    data: () => ({})
}
</script>

<template>
    <section id="blog-article" class="p-3">

        <h1 class="text-success my-3">- Article detail -</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A nam commodi sint, laborum illo optio iusto sit rerum
            cupiditate illum! Vero nostrum vitae repellat dolorum laboriosam nisi sapiente obcaecati quidem.
            Dignissimos doloremque, libero recusandae veritatis iure labore illo fugiat, numquam fugit quasi tenetur ab qui
            excepturi magni quia obcaecati. Aspernatur labore nobis eaque quibusdam ducimus iure earum a exercitationem et.
            Molestiae optio voluptates rerum, dolorem, laboriosam quam tenetur similique eos voluptatum id deserunt ullam ea
            est aspernatur nostrum maiores? Necessitatibus, eligendi? Eos perferendis, praesentium esse expedita porro
            mollitia animi libero.
            Tempora doloremque, minus vel necessitatibus in dolores similique reiciendis. Eius officia autem nam fuga!
            Voluptatum obcaecati excepturi numquam exercitationem esse eaque dolor veritatis voluptatem. Ex, autem! Dolorum
            amet officia error!
            Omnis et repudiandae dolorum quia? Adipisci nulla debitis hic perspiciatis tempora molestias dolor sit quo
            tempore necessitatibus eligendi beatae nesciunt error, ipsa velit autem et aliquid provident sapiente
            voluptatibus unde!</p>

        <button @click=$router.back() class="btn btn-success my-5">Back</button>
    </section>
</template>

<style lang="scss" scoped>
#blog-article {
    background-color: rgba($color: #000000, $alpha: 0.6);
    text-align: center;
}
</style>