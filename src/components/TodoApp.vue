<template>
    <div class="w-full max-w-md mx-auto">
        <div class="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
            <todo-header :moveCompleted="moveCompleted" @update:moveCompleted="moveCompleted = $event" />
            <todo-list :todos="todos" :moveCompleted="moveCompleted" @add-todo="addTodo"
                @toggle-complete="toggleComplete" @delete="deleteTodo" @clear-completed="clearCompleted"
                @clear-all="clearAll" />
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import TodoHeader from './TodoHeader.vue'
import TodoList from './TodoList.vue'

export default {
    name: 'TodoApp',
    components: {
        TodoHeader,
        TodoList
    },
    setup() {
        // Note perso: utiliser le Composition API pour organiser la logique
        // plus tard extraire ça dans un composable "useTodos" pour réutiliser

        // État - les données de l'app
        const todos = ref([])
        const moveCompleted = ref(false)

        // Charger les données du localStorage au démarrage
        const loadFromLocalStorage = () => {
            const savedTodos = localStorage.getItem('todos')
            if (savedTodos) {
                todos.value = JSON.parse(savedTodos)
            }

            const savedMoveCompleted = localStorage.getItem('moveCompleted')
            if (savedMoveCompleted !== null) {
                moveCompleted.value = JSON.parse(savedMoveCompleted)
            }
        }

        // Sauvegarder dans localStorage à chaque changement
        const saveToLocalStorage = () => {
            localStorage.setItem('todos', JSON.stringify(todos.value))
            localStorage.setItem('moveCompleted', JSON.stringify(moveCompleted.value))
        }

        // Ajouter une nouvelle tâche
        const addTodo = (text) => {
            const newTodo = {
                id: Date.now(),
                text,
                completed: false
            }
            todos.value.push(newTodo)
            saveToLocalStorage()
        }

        // Basculer l'état "complété" d'une tâche
        const toggleComplete = (id) => {
            const todo = todos.value.find(todo => todo.id === id)
            if (todo) {
                todo.completed = !todo.completed
                saveToLocalStorage()
            }
        }

        // Supprimer une tâche par son id
        const deleteTodo = (id) => {
            todos.value = todos.value.filter(todo => todo.id !== id)
            saveToLocalStorage()
        }

        // Supprimer toutes les tâches complétées
        const clearCompleted = () => {
            todos.value = todos.value.filter(todo => !todo.completed)
            saveToLocalStorage()
        }

        // Tout effacer
        const clearAll = () => {
            todos.value = []
            saveToLocalStorage()
        }

        // Charger les données au démarrage
        loadFromLocalStorage()

        return {
            todos,
            moveCompleted,
            addTodo,
            toggleComplete,
            deleteTodo,
            clearCompleted,
            clearAll
        }
    }
}
</script>