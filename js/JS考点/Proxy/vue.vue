<template>
    <div>
  
    </div>
  </template>
  
  <script setup>
  import { watch, reactive } from 'vue'
  
  let state = reactive({
    count: 0,
    age: 18
  })
  
  watch(() => state.count, (newVal, oldVal) => {
    
  })
  
  </script>
  
  <style scoped>
  
  </style>