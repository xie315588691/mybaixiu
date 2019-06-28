import VueRouter from 'vue-router'

import index from './components/container/index.vue'
import container from './container.vue'
import comments from './components/container/comments.vue'
import users from './components/container/users.vue'
import posts from './components/container/posts.vue'
import postAdd from './components/container/postAdd.vue'
import categories from './components/container/categories.vue'
import navMenus from './components/container/navMenus.vue'
import slides from './components/container/slides.vue'
import settings from './components/container/settings.vue'
import err from './components/err.vue'
import login from './components/login.vue'



export default new VueRouter({
  routes: [
    {
      path:'/',
      redirect:'/index'
    },
    {
      path: '/',
      component: container,
      children: [
        {
          path: '/index',
          component: index
        },
        {
          path: '/comments',
          component: comments
        }, {
          path: '/users',
          component: users
        },
        {
          path: '/posts',
          component: posts
        },
        {
          path: '/post-add',
          component: postAdd
        },
        {
          path: '/categories',
          component: categories
        },
        {
          path: '/nav-menus',
          component: navMenus
        },
        {
          path: '/slides',
          component: slides
        },
        {
          path: '/settings',
          component: settings
        }
      ]
    }, {
      path: '/login',
      component: login
    },{
    path:'*',
      component:err
    }
  ]
})
