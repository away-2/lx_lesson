<template>
    <h1>hello wn</h1>
    <h2>
      <span>count is {{count}}</span>
      <button @click="count++">点我</button>
    </h2>
  </template>
  
  <script>
  import { ref } from 'vue'
  export default {
        setup() {
            const count = ref(1)
            return { count }
        }
  }
  
  
  </script>
  
  <style lang="css" scoped>
  h1{
    color: red;
  }
  </style>