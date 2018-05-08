<template>
  <div class="todoList">
    <input
      type="text"
      class="add-input"
      autofocus="autofocus"
      placeholder="接下去做什么"
      @keyup.enter="addTodo"
    >
    <item
      :todo="todo"
      v-for="todo in filterTodos"
      :key="todo.id"
      @del="deleteTodo"
    />
    <tabs
      :filter="filter"
      :todos="todos"
      @toggle="toggleFilter"
      @clearAllCompleted="clearAllCompleted"
    />

  </div>
</template>

<script>

import Tabs from './tabs.vue'
import Item from './item.vue'
let id = 0
export default {
  name: 'TodoList',
  components: {
    Item,
    Tabs
  },
  data () {
    return {
      todos: [],
      filter: 'all'
    }
  },
  computed: {
    filterTodos () {
      if (this.filter === 'all') {
        return this.todos
      }
      const completed = this.filter === 'completed'
      console.log(completed)

      return this.todos.filter(todo => completed === todo.completed)
    }
  },
  methods: {
    addTodo: function (e) {
      this.todos.unshift({
        id: id++,
        content: e.target.value.trim(),
        completed: false
      })
      e.target.value = ' '
    },
    deleteTodo (id) {
      this.todos.splice(this.todos.findIndex(todo => todo.id === id), 1)
    },
    toggleFilter (state) {
      this.filter = state
    },
    clearAllCompleted () {
      this.todos = this.todos.filter(todo => !todo.completed)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
