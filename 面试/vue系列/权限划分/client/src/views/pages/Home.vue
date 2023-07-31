<template>
    <div>
        home
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