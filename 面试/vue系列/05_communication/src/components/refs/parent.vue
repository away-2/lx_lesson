<template>
     <h2>{{ childRef?.val }}</h2>
    
    <Child ref="childRef"/>
</template>

<script setup>
import { ref } from 'vue'
import Child from '../refs/child.vue'

const title = ref('hello world')
const childRef = ref(null)

</script>

<style lang="css" scoped></style>