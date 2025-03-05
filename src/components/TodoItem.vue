<template>
    <div :class="[
        'flex items-center p-3 bg-white border border-gray-200 rounded-md mb-2 shadow-sm transition-all duration-300',
        { 'bg-gray-100': todo.completed }
    ]">
        <input type="checkbox"
            class="mr-3 h-5 w-5 rounded border-2 border-primary-light checked:bg-primary appearance-none cursor-pointer relative"
            :checked="todo.completed" @change="toggleComplete" />
        <span :class="['flex-1 font-medium text-gray-800', { 'line-through text-gray-500': todo.completed }]">
            {{ todo.text }}
        </span>
        <button @click="deleteItem" class="text-danger hover:bg-red-50 p-1 rounded-full"
            aria-label="Supprimer la tâche">
            <span class="text-xl">×</span>
        </button>
    </div>
</template>

<script>
export default {
    name: 'TodoItem',
    props: {
        todo: {
            type: Object,
            required: true
        }
    },
    methods: {
        // J'émets les événements au parent, qui les gère
        // Note: architecture en flux descendant (props) et ascendant (events)
        toggleComplete() {
            this.$emit('toggle-complete', this.todo.id)
        },
        deleteItem() {
            this.$emit('delete', this.todo.id)
        }
    }
}
</script>