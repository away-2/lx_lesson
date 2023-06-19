<template>
   <van-nav-bar :title="props.title" left-text="返回" left-arrow>
  <template #right>
    <van-icon name="ellipsis" size="20"/>
  </template>
</van-nav-bar>

</template>

<script setup>
const props = defineProps({
    title:{
        type:String,
        default: ''
    }
})


</script>

<style lang="less" scoped>

</style>