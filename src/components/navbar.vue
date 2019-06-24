<template>
  <nav class="navbar">
    <button class="btn btn-default navbar-btn fa fa-bars"></button>
    <ul class="nav navbar-nav navbar-right">
      <li><router-link to="/profile"><i class="fa fa-user"></i>个人中心</router-link></li>
      <li><a href="login.html"><i class="fa fa-sign-out"></i>退出</a></li>
    </ul>
  </nav>
</template>

<script>
  export default {
    name: "navbar"
  }
</script>

<style scoped>

</style>
