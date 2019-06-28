<template>
  <div>
    <div class="main">
      <navbar></navbar>
      <router-view></router-view>
    </div>
    <asider></asider>
  </div>

</template>

<script>
  import navbar from './components/navbar.vue'
  import asider from './components/asider.vue'

  export default {
    name: "container",
    components: {
      navbar,
      asider
    }
  }
</script>

<style scoped>

</style>
