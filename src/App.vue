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
  import aside from './components/aside.vue'

  export default {
    components: {
      navbar,
      asider:aside
    }

  }
</script>

<style>


</style>
