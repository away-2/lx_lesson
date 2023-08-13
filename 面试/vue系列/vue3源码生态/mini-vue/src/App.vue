<template>
  <div>
    <p>单价：{{ price }}</p>
    <p>数量：{{ num }}<button @click="add">+</button></p>
    <p>总价格：{{ totalPrice }}</p>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
const price = ref(12.5)
const num = ref(1)
// const totalPrice = ref(12.5)

const add = () => {
  num.value++
}
const totalPrice = computed(() => {
  return num.value * price.value
})

</script>

<style lang="css" scoped>

</style>