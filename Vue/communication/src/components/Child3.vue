<template>
    <div class="input-group">
      <input type="text" v-model="value">
      <button @click="handle">添加</button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  const props = defineProps({
    list: Array
  })
  
  const value = ref('')
  const emits = defineEmits(['update:list'])  // 发布事件
  const handle = () => {
    const arr = props.list
    arr.push(value.value)
    emits('update:list',arr)
    // emits('add',value.value)
  }
  </script>
  
  <style scoped>
  .input-group{
    width: 100%;
    display: flex;
  }
  </style>