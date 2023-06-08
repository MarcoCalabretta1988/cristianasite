<script>
export default {
    name: 'Contacts',
    data: () => ({})
}
</script>

<template>
    <section id="contacts" class="py-5">
        <div class="container">
            <h1 class="text-success my-3">- Contacts -</h1>
            <div class="row row-cols-2">
                <div class="col">
                    <img src="https://www.wecanjob.it/moduli/output_immagine.php?id=513" alt="" class="img-fluid">
                </div>

                <div class="col">
                    <ul>
                        <li>Cristiana Ciccarelli:</li>
                        <li>Phone: 158 56987</li>
                        <li>Email: email.email.it</li>
                    </ul>
                </div>

            </div>


        </div>
    </section>
</template>

<style lang="scss" scoped>
#contacts {
    background-color: rgba($color: #000000, $alpha: 0.6);
    text-align: center;

    ul {
        font-size: 30px;
        list-style-type: none;
    }
}
</style>