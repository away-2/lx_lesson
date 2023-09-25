<template>
    <div>
        <button @click="add">{{ state.title[0] }}{{ state.count }}</button>
    </div>
</template>

<script>
import { reactive } from 'vue';
export default {
    setup () {
         const state = reactive({
            title: ['写个demo','今天有个好天气','你不会又有bug吧','你是菜狗啊，这个都不会'],
            count: 0,
         })
         const add = () => {
            // console.log(state.title.length);
            // let i = state.title.length;
            let randomNum = Math.floor(Math.random() * 3);
            state.count++,
            state.title = state.title[randomNum]
         }   
        return {
            state,
            add
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
