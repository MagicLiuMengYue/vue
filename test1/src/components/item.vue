<template>
  <div :class="['todo-item',todo.completed?'completed':'']">
    <input
      type="checkbox"
      class="toggle"
      v-model="todo.completed"
    >
    <label>{{todo.content}}</label>
    <button class="destory" @click="deleteTodo">X</button>
  </div>
</template>

<script>
export default {
  name: 'Item',
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  data () {
    return {

    }
  },
  methods: {
    deleteTodo: function () {
      this.$emit('del', this.todo.id)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
