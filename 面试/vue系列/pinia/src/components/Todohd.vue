<template>
    <div>
      <input type="text" v-model="content">
      <button @click="add">添加</button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useStore } from '../store/myVuex.js'
  
  const content = ref('')
  
  const store = useStore()
  const add = () => {
    store.commit('add', content.value)
  }
  </script>
  
  <style lang="css" scoped>
  
  </style>