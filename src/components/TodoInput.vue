<template>
    <form @submit.prevent="addTodo" class="flex gap-2 mt-6">
        <input type="text" v-model="newTodo" placeholder="Ajouter une nouvelle tâche..."
            class="w-3/4 px-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary-light focus:ring-opacity-30 transition-colors shadow-sm"
            ref="todoInput" />
        <button type="submit"
            class="w-1/4 bg-primary text-white px-2 py-2 rounded-md hover:bg-primary-dark disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium shadow-sm"
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

            // Envoyer le texte au parent pour ajouter la tâche
            this.$emit('add-todo', todoText)

            // Réinitialiser le champ et remettre le focus
            this.newTodo = ''
            this.$nextTick(() => {
                this.$refs.todoInput.focus()
            })
        }
    },
    mounted() {
        // Mettre le focus sur l'input au chargement
        this.$refs.todoInput.focus()
    }
}
</script>