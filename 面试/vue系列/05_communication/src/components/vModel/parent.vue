<template>
     <h2>{{ title }}</h2>
    
    <Child v-model:msg="title"/>
</template>

<script setup>
import { ref } from 'vue'
import Child from '../vModel/child.vue'

const title = ref('hello world')


</script>

<style lang="css" scoped></style>