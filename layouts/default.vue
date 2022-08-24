<template>
  <div>
     <Header-vue/>
    <Nuxt/>
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

<style>
* {
  padding: 0;
  margin: 0;

}

</style>