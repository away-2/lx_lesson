<template>
    <van-popup v-model:show="show" :style="{ height:'46%' }" position="bottom">
        <van-number-keyboard
            :show="show"
            @blur="show = false"
            @input="onInput"
            @delete="onDelete"
        />
    </van-popup>
</template>

<script setup>
import {ref} from 'vue';
const show = ref(false)

// const emits = defineEmits(['select'])
// const chooseMonth = ({selectedValues}) =>{
//     // console.log(selectedValues);
//     show.value = false
//     emits('select', selectedValues)
// } 
// 暴露属性让让父组件得到
defineExpose({
    show
})

</script>

<style lang="less" scoped>

</style>