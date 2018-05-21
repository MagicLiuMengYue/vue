import Vue from 'vue'
import Router from 'vue-router'
import Index from '../page/index'
import Article from '../page/article'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Index
    },
    {
      path: '/topic/:id&auther=:name',
      name: 'post_content',
      components: {
        main: Article
        // sidebar: SideBar
      }
    }
    // {
    //   path: '/user/:name',
    //   name: 'user_info',
    //   components: {
    //     main: UserInfo
    //   }
    // }
  ]
})
