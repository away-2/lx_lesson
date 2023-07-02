<template>
    <div class="input-group">
      <input type="text" v-model="value">
      <button @click="handle">添加</button>
    </div>
    
  </template>
  
  <script>
  import { ref } from 'vue'
  export default {
    setup(props, ctx){
        const value = ref('')
        const handle = () =>{
            ctx.emits('add',value.value)
        }
        return{value, handle}
    }
  }
  </script>
  
  <style scoped>
  .input-group{
    width: 100%;
    display: flex;
  }
  </style>