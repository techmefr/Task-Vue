<template>
    <header class="bg-primary text-white p-6 text-center">
        <h1 class="text-2xl font-bold mb-1">Todo List</h1>
        <p class="text-sm opacity-100 font-medium">Organisez vos tâches, une par une.</p>
        <div class="h-px bg-white bg-opacity-30 my-4"></div>
        <div class="flex items-center justify-end">
            <label for="move-completed" class="text-sm mr-2 font-medium">
                Placer les tâches terminées à la fin
            </label>
            <div class="relative inline-block w-12 h-6">
                <input id="move-completed" type="checkbox" class="sr-only" v-model="moveCompletedValue"
                    @change="updateMoveCompleted" />
                <div :class="[
                    'w-12 h-6 rounded-full transition-colors duration-200 ease-in-out cursor-pointer',
                    moveCompletedValue ? 'bg-primary-light' : 'bg-gray-300'
                ]" @click="moveCompletedValue = !moveCompletedValue; updateMoveCompleted()">
                    <div :class="[
                        'absolute w-4 h-4 bg-white rounded-full transform transition-transform duration-200 ease-in-out',
                        moveCompletedValue ? 'translate-x-7' : 'translate-x-1',
                        'top-1'
                    ]"></div>
                </div>
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
    },
    watch: {
        // Ajout d'un watcher pour s'assurer que le changement externe est répercuté
        moveCompleted(newVal) {
            this.moveCompletedValue = newVal
        }
    }
}
</script>