<template>
  <div class="chat-page scrollY">
    <div class="chatList">
      <div class="chatItem click_active" v-for="item in chatList" :key="item.id" @click="goChatDetail(item)">
        <img class="left" :src="item.img" alt="">
        <div class="center flex_1">
          <span class="userName">{{item.nikeName}}</span>
          <span class="userText nowrap">{{item.text}}</span>
        </div>
        <div class="right">
          {{item.timeText}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'chat',
  data () {
    return {
      chatList: [
        {
          id: 0,
          nikeName: '李大柱',
          img: 'https://ordinary10.oss-cn-hangzhou.aliyuncs.com/zbzyImages/ltxx.png',
          text: '您过来的时候给我个电话吧，我sssssssssssssssssssssssssssssssssssssssssss',
          time: '',
          timeText: '刚刚'
        },
        {
          id: 1,
          nikeName: '李大柱',
          img: 'https://ordinary10.oss-cn-hangzhou.aliyuncs.com/zbzyImages/ltxx.png',
          text: '您过来的时候给我个电话吧，我sssssssssssssssssssssssssssssssssssssssssss',
          time: '',
          timeText: '刚刚'
        },
        {
          id: 2,
          nikeName: '李大柱',
          img: 'https://ordinary10.oss-cn-hangzhou.aliyuncs.com/zbzyImages/ltxx.png',
          text: '您过来的时候给我个电话吧，我sssssssssssssssssssssssssssssssssssssssssss',
          time: '',
          timeText: '刚刚'
        }
      ]
    }
  },
  methods: {
    goChatDetail (item) {
      this.$router.push(`/message/chat/detail/${item.id}?data=${JSON.stringify(item)}`)
    }
  }
}
</script>

<style scoped lang="scss">
.chat-page{
  padding: 0 20px 51px;
  box-sizing: border-box;
  .chatList{
    .chatItem{
      height: 64px;
      box-sizing: border-box;
      border-bottom: 1px solid #F1F1F1;
      display: flex;
      align-items: center;
      .left{
        width: 44px;
        height: 44px;
        margin-right: 10px;
      }
      .center{
        display: flex;
        flex-direction: column;
        width: 100px;
        line-height:22px;
        .userName{
          font-size:16px;
          font-family:PingFangSC-Semibold,PingFang SC;
          font-weight:600;
        }
        .userText{
          font-size:14px;
          font-family:PingFang-SC-Medium,PingFang-SC;
          font-weight:500;
          color:rgba(153,153,153,1);
        }
      }
      .right{
        padding-left: 30px;
        text-align: right;
        font-size:14px;
        font-family:PingFang-SC-Medium,PingFang-SC;
        font-weight:500;
        color:rgba(153,153,153,1);
      }
    }
  }
}
</style>
