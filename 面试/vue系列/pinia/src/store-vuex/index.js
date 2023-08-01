import { createStore } from 'vuex'

const store = createStore({
    state(){
        return {
            todos:['css', 'js']
        }
    },
    mutations: {
        add(state, val){
            state.todos.push(val)
        }
    }
})

export default store