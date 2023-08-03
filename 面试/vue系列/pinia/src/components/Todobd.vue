<template>
    <div>
      <ul>
        <li v-for="item in store.state.todos">{{item}}</li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { useStore } from '../store/myVuex.js'
  
  const store = useStore() // inject('store')
  console.log(store.state);
  </script>
  
  <style lang="css" scoped>
  
  </style>