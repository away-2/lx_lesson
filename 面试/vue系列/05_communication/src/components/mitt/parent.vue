<template>
    <div>
       <input type="text" v-model="msg">
       <button @click="handle">添加</button>
   </div>
   <Child />
</template>

<script setup>
// import mitt from 'mitt'
import { ref, getCurrentInstance } from 'vue'
import Child from './child.vue'
const msg = ref('')
const app = getCurrentInstance()
app.appContext.config.globalProperties.$emitter.emit('foo',msg.value)


const handle = () => {

}

// const emitter = mitt()
// $emitter.emit('foo', msg.value)

</script>

<style lang="css" scoped></style>