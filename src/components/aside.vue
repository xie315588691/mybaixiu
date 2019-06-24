<template>
  <div class="aside">
    <div class="profile">
      <img class="avatar" src="../uploads/avatar.jpg">
      <h3 class="name">布头儿</h3>
    </div>
    <ul class="nav">
      <li :class="{active:$route.path=='/'}" @click="handleRouterClick">
        <router-link to="/"><i class="fa fa-dashboard"></i>仪表盘</router-link>
      </li>
      <li :class="{active:routePath=='menu-posts'}" @click="handPostClik">
        <a href="#menu-posts" :class="{collapsed:routePath !='menu-posts'}"
           data-toggle="collapse">
          <i class="fa fa-thumb-tack"></i>文章<i class="fa fa-angle-right"></i>
        </a>
        <ul id="menu-posts" :class="{collapse:'true',in:routePath=='menu-posts'}">
          <li :class="{active:$route.path=='/posts'}">
            <router-link to="posts" >所有文章</router-link>
          </li>
          <li :class="{active:$route.path=='/post-add'}">
            <router-link to="post-add">写文章</router-link>
          </li>
          <li :class="{active:$route.path=='/categories'}">
            <router-link to="categories">分类目录</router-link>
          </li>
        </ul>
      </li>
      <li :class="{active:$route.path=='/comments'}" @click="handleRouterClick">
        <router-link to="comments"><i class="fa fa-comments"></i>评论</router-link>
      </li>
      <li :class="{active:$route.path=='/users'}" @click="handleRouterClick">
        <router-link to="users"><i class="fa fa-users"></i>用户</router-link>
      </li>
      <li :class="{active:routePath=='menu-settings'}" @click="handleSettingClick">
        <a href="#menu-settings" data-toggle="collapse" :class="{collapsed:routePath !='menu-settings'}">
          <i class="fa fa-cogs"></i>设置<i class="fa fa-angle-right"></i>
        </a>
        <ul id="menu-settings" :class="{collapse:'true',in:routePath=='menu-settings'}">
          <li :class="{active:$route.path=='/nav-menus'}">
            <router-link to="nav-menus">导航菜单</router-link>
          </li>
          <li :class="{active:$route.path=='/slides'}">
            <router-link to="slides">图片轮播</router-link>
          </li>
          <li :class="{active:$route.path=='/settings'}">
            <router-link to="settings">网站设置</router-link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "aside",
    data() {
      return {
        routePath: ''
      }
    },
    created() {
      window.onhashchange = () => {
        this.routePath = window.location.hash.substr(2)
      }
    },
    watch: {},
    methods: {
      handPostClik(e) {
        this.routePath = 'menu-posts'
      },
      handleRouterClick() {
        this.routePath = ''
      },
      handleSettingClick() {
        this.routePath = 'menu-settings'
      }
    }


  }
</script>

<style scoped>

</style>
