import { defineStore } from 'pinia'

export const useTodoStore = defineStore({
    id: 'app',
    state() {
        return {
            todos: ['css', 'js']
        }
    },
    actions:{
        add(val){
            this.todos.push(val)
        }
    }
})