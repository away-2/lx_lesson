<template>
  <!-- App.vue -->
  <div class="input-group">
    <input type="text" v-model="value">
      <button @click="handle">添加</button>
  </div> 
  <Child :list="list"/>
</template>

<script setup>
import Child from './components/Child1-1.vue'
import { ref } from 'vue'

const value =ref('')
const list = ref(['html'])
const handle = () =>{
  list.value.push(value.value)
}
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
