<template>
    <div @click="add">
        vue项目测试
    </div>
</template>

<script setup>
const add = () => {
    console.log(123n);
}
</script>

<style lang="css" scoped>
div{
    color: red;
}
</style>