<template>
    <header class="bg-primary text-white p-6 text-center">
        <h1 class="text-2xl font-semibold mb-1">Todo List</h1>
        <p class="text-sm opacity-90">Organisez vos tâches, une par une.</p>
        <div class="h-px bg-white bg-opacity-20 my-4"></div>
        <div class="flex items-center justify-end">
            <label for="move-completed" class="text-sm mr-2">
                Placer les tâches terminées à la fin
            </label>
            <div class="relative inline-block w-12 h-6 transition duration-200 ease-in-out">
                <input id="move-completed" type="checkbox" class="opacity-0 w-0 h-0" v-model="moveCompletedValue"
                    @change="updateMoveCompleted" />
                <span
                    class="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-gray-300 transition-all duration-300 rounded-full before:absolute before:h-4 before:w-4 before:left-1 before:bottom-1 before:bg-white before:rounded-full before:transition-all before:duration-300"
                    :class="{ 'bg-primary-light before:translate-x-6': moveCompletedValue }"></span>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: 'TodoHeader',
    props: {
        moveCompleted: {
            type: Boolean,
            required: true
        }
    },
    data() {
        return {
            moveCompletedValue: this.moveCompleted
        }
    },
    methods: {
        updateMoveCompleted() {
            this.$emit('update:moveCompleted', this.moveCompletedValue)
        }
    }
}
</script>