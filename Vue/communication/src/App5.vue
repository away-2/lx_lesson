<template>
    <div class="input-group">
      <input type="text" v-model="value">
        <button @click="handle">添加</button>
    </div> 
    <Child5 />
  </template>
  
  <script setup>
  import Child5 from './components/Child5.vue'
  import { ref, provide } from 'vue'
  
  const value =ref('')
  const list = ref(['html'])
  const handle = () =>{
    list.value.push(value.value)
  }

  provide('list',list.value)

  </script>
  
  <style scoped>
  #app{
    width: 196px;
  
  }
  .input-group{
    display: flex;
    width: 100%;
  }
  </style>
  