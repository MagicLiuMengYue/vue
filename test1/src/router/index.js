import Vue from 'vue'
import Router from 'vue-router'
import TodoList from '@/components/todo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TodoList',
      component: TodoList
    }
  ]
})
