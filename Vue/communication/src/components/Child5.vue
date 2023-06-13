<template>
    <ul class="list">
        <li class="list-item" v-for="(item, index) in upList" :key="index">{{ item }}</li>
    </ul>
</template>

<script setup>
import { inject } from 'vue'

const upList = inject('list')

</script>

<style scoped>
ul {
    padding: 0;
    margin: 0;
    margin-top: 10px;
}

li {
    list-style: none;
    height: 25px;
    width: 100%;
    padding: 4px 10px;
    box-sizing: border-box;
    /* line-height: 30px; */
    border: 1px solid #999;
    border-radius: 2px;
}
</style>