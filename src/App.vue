<script>
import AppHeader from './components/AppHeader.vue';
export default {
  name: 'Cristiana Ciccarelli',
  components: { AppHeader },
  data: () => ({})
}
</script>

<template>
  <AppHeader />
  <section id="recipe-board" class=" py-5">
    <div class="container">
      <main>
        <router-view></router-view>
      </main>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>