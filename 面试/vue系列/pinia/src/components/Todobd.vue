<template>
    <div>
        <ul>
            <li v-for="item in store.state.todos">{{ item }}</li>
        </ul>
    </div>
</template>
  
<script setup>
import { useStore } from '../store/myVuex.js'

const store = useStore()
// console.log(store.state.todos);
</script>
  
<style lang="css" scoped></style>