<template>
   <van-cell-group class="item">
    <div class="header-date">
        <div>2023-06-20</div>
        <div class="money">
            <span><b>支</b>1234.00</span>
            <span><b>收</b>51234.00</span>
        </div>
    </div>
    <van-cell 
        title="餐饮" 
        value="-12.00"
        label="12:00 | 备注"
     />
    

   </van-cell-group>
</template>

<script setup>

</script>

<style lang='less' scoped>
  @import url('@/assets/style/custom.less');
  .item {
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.1);
    margin-bottom: 10px;
    .header-date {
      height: 60px;
      display: flex;
      background-color: #f9f9f9;
      align-items: center;
      justify-content: space-between;
      padding: 0 10px;
      div {
        color: @color-text-base;
      }
      .money {
        span {
          margin-left: 20px;
          b {
            color: @color-text-caption;
            font-weight: normal;
            background-color: #f5f5f5;
            padding: 3px;
            margin-right: 2px;
          }
        }
      }
    }
  }
</style>
<style lang='less'>
  @import url('@/assets/style/custom.less');
  .expense {
    .van-cell__value {
      color: @color-text-base!important;
    }
  }
  .income {
    .van-cell__value {
      color: @text-warning!important;
    }
  }
  
</style>