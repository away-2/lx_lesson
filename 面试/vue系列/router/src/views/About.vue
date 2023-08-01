<template>
    <div>
     about
     <button @click="toHome">to home</button>
    </div>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router'
  const router = useRouter()

  const toHome = () =>{
    router.push({path:'/'})
  }
  </script>
  
  <style lang="css" scoped>
  
  </style>