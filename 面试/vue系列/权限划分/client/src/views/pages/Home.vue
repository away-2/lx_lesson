<template>
    <div>
         <h1>home</h1>
         <el-button type="danger" v-noLevel>通过审批</el-button>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { home } from '../../api/user.js';

onMounted(() => {
    home().then(res => {
        console.log(res);
    })
})
</script>

<style lang="css" scoped></style>