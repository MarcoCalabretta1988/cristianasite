<script>
export default {
    name: 'Blog Article',
    data: () => ({})
}
</script>

<template>
    <section id="blog-article" class="p-3">
        <div class="container">
            <h1 class="text-success my-3">- Article detail -</h1>
            <div class="row">
                <div class="col-8">
                    <img src="https://www.giallozafferano.it/images/242-24248/Torta-tenerina_600x500.jpg" alt="">
                </div>

                <div class="col-4">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat reiciendis iure officia
                        temporibus, eius velit quibusdam adipisci et obcaecati, minima harum libero quam laborum modi neque
                        error suscipit ab vero.
                        Dolorum iusto id in voluptate? Non qui tempore similique minima molestiae ut, commodi ipsam aliquam
                        voluptate illo atque hic fuga velit nisi vel! Quisquam unde corporis, perspiciatis quo ducimus
                        dolor!
                        Earum vel dolores eveniet possimus voluptas! Fugiat magnam nihil non odio. Perferendis, veritatis
                        sit tempora vel corporis necessitatibus fugiat cumque dicta deleniti accusantium ipsa, ex a, optio
                        quas labore unde?
                        Magni eos officia dicta in, quaerat quod adipisci nobis. Delectus assumenda fugiat exercitationem
                        corrupti reiciendis vitae eligendi magni eius molestiae distinctio tenetur, consequuntur porro illum
                        cupiditate illo nisi pariatur accusamus!
                        Molestiae modi maxime quidem officiis, debitis dignissimos laboriosam unde voluptatum commodi quo
                        deserunt ratione eveniet temporibus consequatur eligendi voluptatibus odit et exercitationem
                        reiciendis, aspernatur similique praesentium. Assumenda quos perferendis soluta!
                    </p>
                </div>
            </div>

        </div>


        <button @click=$router.back() class="btn btn-success my-5">Back</button>
</section></template>

<style lang="scss" scoped>#blog-article {
    background-color: rgba($color: #000000, $alpha: 0.6);
    text-align: center;
}</style>