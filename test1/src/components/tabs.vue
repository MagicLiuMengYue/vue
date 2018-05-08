<template>
  <div class="tabs">
    <span class="left"> {{unFinishedTodoLength}} item</span>
    <span>
      <span
        v-for="state in states"
        :key="state"
        :class="[state,filter === state ? 'actived':'']"
        @click="toggleFilter(state)"
      >
        {{state}}
      </span>
    </span>
    <span class="clear" @click="clearAllCompleted">clear completed</span>
  </div>
</template>

<script>
export default {
  name: 'Tabs',
  props: {
    filter: {
      type: String,
      required: true
    },
    todos: {
      type: Array,
      require: true
    }
  },
  data () {
    return {
      states: ['all', 'active', 'completed']
    }
  },
  computed: {
    unFinishedTodoLength () {
      return this.todos.filter(todo => !todo.completed).length
    }
  },
  methods: {
    toggleFilter: function (state) {
      this.$emit('toggle', state)
    },
    clearAllCompleted: function () {
      this.$emit('clearAllCompleted')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
