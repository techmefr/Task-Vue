<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center p-4">
    <todo-app />
  </div>
</template>

<script>
import TodoApp from './components/TodoApp.vue'

export default {
  name: 'App',
  components: {
    TodoApp
  }
}
</script>

<style></style>