<template>
    <div :class="[
        'flex items-center p-3 bg-gray-50 rounded-md mb-2 transition-all duration-300',
        { 'opacity-70 bg-gray-100': todo.completed }
    ]">
        <input type="checkbox"
            class="mr-3 h-5 w-5 rounded border-2 border-primary-light checked:bg-primary appearance-none cursor-pointer relative"
            :checked="todo.completed" @change="toggleComplete" />
        <span :class="['flex-1', { 'line-through text-gray-500': todo.completed }]">
            {{ todo.text }}
        </span>
        <button @click="deleteItem" class="text-danger opacity-70 hover:opacity-100 transition-opacity"
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
        toggleComplete() {
            this.$emit('toggle-complete', this.todo.id)
        },
        deleteItem() {
            this.$emit('delete', this.todo.id)
        }
    }
}
</script>