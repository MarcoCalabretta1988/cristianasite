<script>
import AppHeader from './components/AppHeader.vue';
export default {
  name: 'Cristiana Ciccarelli',
  components: { AppHeader },
}
</script>

<template>
  <AppHeader />

  <section id="home-page">

    <main>
      <router-view></router-view>
    </main>

  </section>
</template>

<style lang="scss" scoped></style>