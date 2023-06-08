<script>
export default {
    name: 'AppHeader',
    data: () => ({})
}
</script>

<template>
    <header class="text-success">
        <nav class="navbar navbar-expand-lg bg-body-tertiary ">
            <div class="container-fluid d-flex justify-content-around">
                <div class="d-flex">
                    <!-- Logo -->
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <router-link :to="{ name: 'home' }" class="nav-link px-5">
                        <h2>Cristiana Ciccarelli</h2>
                    </router-link>

                </div>

                <div class="collapse navbar-collapse" id="navbarNav">
                    <!-- Nav Links -->
                    <ul class="navbar-nav ">
                        <li class="nav-item">
                            <router-link :to="{ name: 'home' }" class="nav-link">Home</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{ name: 'blog' }" class="nav-link">Blog</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{ name: 'contacts' }" class="nav-link">Contacts</router-link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
header {
    font-family: 'Dancing Script', cursive;
    text-shadow: 2px 2px black;
}

img {
    height: 60px;
}
</style>