<template>
  <div>
    <input type="text" v-model="content">
    <button @click="add">添加</button>
  </div>
  <div>
    <ul>
      <li v-for="item in list">{{ item.title }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, Ref } from 'vue'

interface List {
  id: number
  title: string
}
const list: Ref<List[]> = ref([])

const content = ref('')

const add = () => {
  list.value.push({ id: 3, title: content.value })
}

defineProps({
  msg: {
    type: String,
    required: true
  }

})

</script>

<style scoped></style>