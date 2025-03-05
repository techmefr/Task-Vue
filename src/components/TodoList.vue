<template>
    <div class="p-6">
        <div class="flex gap-2 justify-end mb-4">
            <button
                class="bg-warning text-white px-3 py-2 rounded-md hover:bg-amber-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm"
                @click="clearCompleted" :disabled="!hasCompletedTodos">
                Effacer complétées
            </button>
            <button
                class="bg-danger text-white px-3 py-2 rounded-md hover:bg-red-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm"
                @click="clearAll" :disabled="!todos.length">
                Tout effacer
            </button>
        </div>

        <div class="mb-6">
            <div v-if="todos.length === 0" class="text-center py-8 text-gray-500">
                <p class="mb-2">Aucune tâche pour le moment.</p>
                <p>Ajoutez votre première tâche ci-dessous!</p>
            </div>
            <template v-else>
                <todo-item v-for="todo in sortedTodos" :key="todo.id" :todo="todo"
                    @toggle-complete="$emit('toggle-complete', $event)" @delete="$emit('delete', $event)" />
            </template>
        </div>

        <todo-input @add-todo="$emit('add-todo', $event)" />

        <div class="text-right mt-4 text-sm text-gray-500">
            {{ completedCount }} sur {{ todos.length }} tâches complétées
        </div>
    </div>
</template>

<script>
import TodoItem from './TodoItem.vue'
import TodoInput from './TodoInput.vue'

export default {
    name: 'TodoList',
    components: {
        TodoItem,
        TodoInput
    },
    props: {
        todos: {
            type: Array,
            required: true
        },
        moveCompleted: {
            type: Boolean,
            default: false
        }
    },
    emits: ['add-todo', 'toggle-complete', 'delete', 'clear-completed', 'clear-all'],
    computed: {
        completedCount() {
            return this.todos.filter(todo => todo.completed).length
        },
        hasCompletedTodos() {
            return this.completedCount > 0
        },
        sortedTodos() {
            if (!this.moveCompleted) return [...this.todos]

            return [...this.todos].sort((a, b) => {
                if (a.completed === b.completed) return 0
                return a.completed ? 1 : -1
            })
        }
    },
    methods: {
        clearCompleted() {
            this.$emit('clear-completed')
        },
        clearAll() {
            this.$emit('clear-all')
        }
    }
}
</script>