<template>
    <div class="home">
        <div class="header">
            <div class="type-wrap" @click="changeType">
                <span class="title" >{{state.currentType.name || '全部类型'}}</span>
                <van-icon name="apps-o" />
            </div>
            <div class="data-wrap">
                <span class="time" @click="monthToggle">{{ state.currentMonth }}<i class="iconfont icon-sort-down"></i></span>
                <span class="expense">总支出￥ {{ state.totalExpense }}</span>
                <span class="income">总收入￥ {{ state.totalIncome }}</span>
            </div>
        </div>
        <div class="content-wrap">
            <van-pull-refresh v-model="state.refreshing" @refresh="onRefresh">
                <van-list
                v-model:loading="loading"
                :finished="state.finished"
                finished-text="没有更多了"
                @load="onLoad"
                >
                    <CartItem v-for="(item, index) in state.list" :key="index " :bill="item"/>
                </van-list>

            </van-pull-refresh>
        </div>  
        <div class="account" @click="getAccount">
          <van-icon name="records" size="25"/>
        </div>
      <PopMonth @select="selectMonth" ref="popMonthRef"/>
      <PopType @select="selectType" ref="popTypeRef"/>
      <Account @select="selectAccount" ref="getAccountRef"/>
    </div>
</template>

<script setup>
import { onMounted, reactive, ref } from 'vue';
import CartItem from '@/component/CartItem.vue';
import axios from '@/api/axios';
import PopMonth from '@/component/PopMonth.vue';
import PopType from '@/component/PopType.vue';
import Account from '@/component/Account.vue';
import dayjs from 'dayjs';

const popMonthRef = ref(null)
const popTypeRef = ref(null)
const state = reactive({
    loading: false,
    refreshing: false,
    finished: true,
    totalExpense: 0,
    totalIncome: 0,
    totalPage: 1,
    list: [],
    currentMonth: dayjs().format('YYYY-MM'),
    currentType: {}
})

onMounted(() =>{
    getBillList()
})

//获取账单数据
const getBillList = async() =>{
    const {data} = await axios.get(`/bill/list?date=${state.currentMonth}&type_id=${state.currentType.id || 'all'}&page=1&page_size=5`)
    console.log(data);
    state.totalExpense = data.totalExpense;
    state.totalIncome = data.totalIncome;
    state.list = data.list;

}

const onRefresh = async() =>{
    // console.log('下拉刷新');
    state.refreshing = true;
    await getBillList()
    state.refreshing = false;
           
}

// 列表加载更多
const onLoad = () =>{
    // console.log('加载更多');
}
// 选择年月
const monthToggle = () =>{
  // 修改子组件的show
  popMonthRef.value.show = true

}

const selectMonth = (value) =>{
  // console.log(value);
  state.currentMonth = value.join('-')
  getBillList()
}
// 修改选择类型
const changeType = () =>{
    popTypeRef.value.show = true
}
const selectType = (item) =>{
  // console.log(item);
  state.currentType = item;
  getBillList()

}
// 加入账单
const getAccount = () => {
    getAccountRef.value.show = true
}
 </script>

<style lang="less" scoped>
@import url('@/assets/style/custom.less');
.home {
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 80px;
  .header {
    box-sizing: border-box;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 80px;
    background-color: @primary;
    color: #fff;
    font-size: 14px;
    padding: 20px 20px;
    z-index: 100;
    .type-wrap {
      background-color: #50ca84;
      display: inline-block;
      padding: 6px;
      border-radius: 4px;
      position: relative;
      align-self: baseline;
      .title {
        margin-right: 22px;
      }
      .title::after {
        content: '';
        position: absolute;
        top: 12px;
        bottom: 11px;
        right: 32px;
        width: 1px;
        background-color: #e9e9e9;
      }
    }
    .data-wrap {
      margin-top: 10px;
      font-size: 13px;
      .time {
        margin-right: 12px;
        .icon-sort-down {
          font-size: 12px;
        }
      }
      .expense {
        margin-right: 10px;
      }
    }
  }
  .content-wrap {
    height: 100%;
    overflow: hidden;
    overflow-y: scroll;
    background-color: #f5f5f5;
    padding: 10px;
    // padding-bottom: 50px;
  }
  .add {
    position: fixed;
    bottom: 100px;
    right: 30px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid #e9e9e9;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    background-color: #fff;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
    color: @primary;
  }
  .account{
    position: fixed;
    height: 50px;
    width: 50px;
    bottom: 100px;
    right: 50px;
    background-color: #fff;
    border-radius: 50%;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
    .van-icon{
      position: absolute;
      top: 13px;
      left: 12px;
      color: @primary; 
    }
  }

}
</style>