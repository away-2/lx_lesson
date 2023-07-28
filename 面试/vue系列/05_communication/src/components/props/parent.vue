<template>
    <div>
        <input type="text" v-model="value">
        <button>添加</button>
    </div>
    <Child :val="value"/>
</template>

<script setup>
import { ref } from 'vue'
import Child from '../props/child.vue'

const value = ref('hello')
</script>

<style lang="css" scoped></style>