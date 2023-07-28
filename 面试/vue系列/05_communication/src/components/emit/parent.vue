<template>
     <h2>{{ title }}</h2>
    
    <Child @add="handleAdd"/>
</template>

<script setup>
import { ref } from 'vue'
import Child from '../emit/child.vue'

const title = ref('hello world')
const handleAdd = (msg) => {
    title.value = msg
}


</script>

<style lang="css" scoped></style>