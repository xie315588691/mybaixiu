<template>
  <div class="login" >
    <form class="login-wrap" @submit.prevent="checkLogin">
      <img class="avatar" src="../assets/img/default.png">
      <!-- 有错误信息时展示 -->
      <div class="alert alert-danger" v-if="msg">
        <strong>错误！</strong> 用户名或密码错误！
      </div>
      <div class="form-group">
        <label for="email" class="sr-only">邮箱</label>
        <input id="email" v-model="email" type="email" class="form-control" placeholder="邮箱" autofocus>
      </div>
      <div class="form-group">
        <label for="password" class="sr-only">密码</label>
        <input id="password" v-model="password" type="password" class="form-control" placeholder="密码">
      </div>
      <button class="btn btn-primary btn-block">登 录</button>
    </form>
  </div>
</template>

<script>
  import axios from 'axios'
  import _ from 'lodash'

  export default {
    name: "container",
    data() {
      return {
        email: '',
        password: '',
        msg: false
      }
    },
    methods: {
      checkLogin: _.debounce(async function () {
        try {
          let result = await axios.post('http://localhost:8081/session', {
            email: this.email,
            password: this.password
          })
          this.$router.push({path:'/'})
        } catch (e) {
          this.msg = true
        }
      }, 500)
    }
  }
</script>

<style scoped>

</style>
