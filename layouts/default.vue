<template>

  <div>
    <Header-vue />

    <div >
      <Nuxt class="nuxt-container" />
    </div>

  </div>
</template>

<script>
import HeaderVue from '../components/Header.vue';
export default {
  components: {
    HeaderVue
  }
}
</script>

<style   >
*, *:before, *:after {
    box-sizing: inherit;
}




.nuxt-container {
 margin-top: 60px;
}
</style>