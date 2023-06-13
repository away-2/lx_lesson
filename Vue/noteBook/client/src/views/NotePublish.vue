<template>
  <div class="note-publish">
    <div class="editor">
      <QuillEditor 
        theme="snow" 
        :options="options"
        v-model:content="state.content"
        contentType="html"
        @textChange="contentChange"
      />
    </div>

    <div class="note-wrap">
      <div class="note-cell">
        <van-field v-model="state.title" label="标题" placeholder="请输入笔记标题" />
      </div>
      <div class="note-cell">
        <van-field name="uploader" label="文件上传">
          <template #input>
            <van-uploader 
              v-model="state.picture" 
              multiple 
              :after-read="afterRead" 
              max-count="1"
            />
          </template>
        </van-field>
        
      </div>
      <div class="note-cell">
        <div class="sort" @click="() => state.sortShow = true">
          <span>选择分类</span>
          <span>{{state.note_type}}<van-icon name="arrow" /></span>
        </div>
        <van-action-sheet 
          v-model:show="state.sortShow" 
          :actions="state.actions" 
          @select="onSelect" />
      </div>
    </div>
    
    <div class="btn">
      <van-button type="primary" block @click="notePublish">发布笔记</van-button>
    </div>
  </div>
</template>

<script setup>
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import { reactive } from 'vue';
import axios from '@/api'
import { showSuccessToast } from 'vant';
import router from '@/router';


const options = {
  placeholder: "输入笔记内容"
}
const state = reactive({
  content: '',
  title: '',
  picture: [],
  sortShow: false,
  actions: [
    { name: '美食' },
    { name: '旅行' },
    { name: '汽车' },
    { name: '时尚' },
    { name: '科技' }
  ],
  note_type: '美食'
})


const contentChange = () => {
  console.log(state.content);
}
const afterRead = () => {
  console.log(state.picture);
}
// const unAllow = () => {
//   state.picture = []
//   console.log('上传文件不能超出1M');
// }
const onSelect = (item) => {
  // console.log(item.name);
  state.note_type = item.name
  state.sortShow = false
}

const notePublish = async() => {
  const userId = JSON.parse(sessionStorage.getItem('userInfo')).id
  const nickname = JSON.parse(sessionStorage.getItem('userInfo')).nickname
  const res = await axios.post('/note/publish', {
    title: state.title,
    note_type: state.note_type,
    head_img: state.picture[0].content,
    note_content: state.content,
    userId: userId,
    nikename: nickname
  })
  console.log(res);
  if (res.code = '80000') {
    showSuccessToast(res.msg)
    setTimeout(() => {
      router.push('/noteClass')
    }, 1500)
  }
}
</script>

<style lang="less" scoped>
.note-publish{
  min-height: 100vh;
  position: relative;
  .note-wrap{
    margin-top: 20px;
    .note-cell{
      border-bottom: 1px solid #d1d5db;
      .sort{
        display: flex;
        justify-content: space-between;
        font-size: 14px;
        line-height: 3;
        padding: 10px 16px;
        color: #323233;
      }
    }
  }
  .btn{
    width: 80%;
    margin: 0 auto;
    margin-top: 2rem;
    position: sticky;
    bottom: 10px;
  }
}
</style>

<style>
.ql-container.ql-snow{
  height: 200px;
}
.van-cell__title.van-field__label{
  width: 60px;
}
</style>