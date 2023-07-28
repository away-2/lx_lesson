<template>
    <div>
        <input type="text" v-model="val">
        <button @click="handle">添加</button>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const val = ref('')
const emits = defineEmits(['update:msg'])
const handle = () => {

    emits('update:msg',val.value)
}
</script>

<style lang="css" scoped></style>