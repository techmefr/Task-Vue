<template>
    <form @submit.prevent="addTodo" class="flex gap-2 mt-6">
        <input type="text" v-model="newTodo" placeholder="Ajouter une nouvelle tâche..."
            class="flex-1 px-4 py-2 border-2 border-gray-200 rounded-md focus:outline-none focus:border-primary-light transition-colors"
            ref="todoInput" />
        <button type="submit"
            class="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            :disabled="!newTodo.trim()">
            Ajouter
        </button>
    </form>
</template>

<script>
export default {
    name: 'TodoInput',
    data() {
        return {
            newTodo: ''
        }
    },
    methods: {
        addTodo() {
            const todoText = this.newTodo.trim()
            if (!todoText) return

            this.$emit('add-todo', todoText)
            this.newTodo = ''
            this.$nextTick(() => {
                this.$refs.todoInput.focus()
            })
        }
    },
    mounted() {
        this.$refs.todoInput.focus()
    }
}
</script>