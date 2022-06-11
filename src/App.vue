<template>
  <div>
    <section class='header__section'>
      <div class='title'>
        <img src='/src/assets/img/wm_small_icon_animated.svg' alt='Web Monetization logo' width='100' height='100'>
        <h1>Awesome Web Monetization</h1>
      </div>
      <h2>Stuffs about Web Monetization. Packages, articles, documentation links and others tools.</h2>
      <a href='https://github.com/thomasbnt/awesome-web-monetization' class='btn-main'>
        <i class='fa fa-github' aria-hidden='true'></i> See the list on GitHub
      </a>
    </section>
    <section>

    </section>
    <section>

    </section>
  </div>
  <mainFooter />
</template>
<script>
import mainFooter from './components/footer.vue'

export default {
  name: 'App',
  components: {
    mainFooter
  }
}
</script>
<style lang='scss'>
@import './assets/scss/main.scss';
.title {
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  > img {
    margin-right: 1rem;
  }
}
</style>
