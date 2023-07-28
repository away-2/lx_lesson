<template>
     <div>
        <input type="text" v-model="msg">
        <button @click="handle">添加</button>
    </div>
    <Child />
</template>

<script setup>
import { provide, ref } from 'vue'
import Child from './child.vue'

const msg = ref('')
provide('title', mag.value)
const handle = () => {

}


</script>

<style lang="css" scoped></style>