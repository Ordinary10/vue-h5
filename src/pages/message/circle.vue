<template>
  <div class="circle-page">
    <div class="chatList">
      <div class="chatItem click_active" v-for="item in chatList" :key="item.id" @click="goChatDetail(item)">
        <div class="top">
          <img class="nikeImg" :src="item.img" alt="">
          <div class="nikeName">
            <span class="userName">{{item.nikeName}}</span>
            <span class="timeText">{{item.timeText}}</span>
          </div>
        </div>
        <p class="center break-all">
          {{item.text}}
        </p>
        <div class="footer">
          <span>{{item.time}}</span>
          <span>{{item.tag}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'circle',
  data () {
    return {
      chatList: [
        {
          id: 0,
          nikeName: '李大柱',
          img: 'https://ordinary10.oss-cn-hangzhou.aliyuncs.com/zbzyImages/ltxx.png',
          text: '您过来的时候给我个电话吧，我等着啦啦啦！您过来的时候给我个电话吧，我等着啦啦啦您过来的时候给我个电话吧，我等着啦啦啦',
          time: '2019-10-16 11:30:28',
          timeText: '发布了新文章',
          tag: '【生活中的艺术】'
        },
        {
          id: 1,
          nikeName: '李大柱',
          img: 'https://ordinary10.oss-cn-hangzhou.aliyuncs.com/zbzyImages/ltxx.png',
          text: '您过来的时候给我个电话吧，您过来的时候给我个电话吧，我等着啦啦啦！！！您过来的时候给我个电话吧，我等着啦啦啦',
          time: '2019-10-16 11:30:28',
          timeText: '发布了新文章',
          tag: '【生活中的艺术】'
        },
        {
          id: 2,
          nikeName: '李大柱',
          img: 'https://ordinary10.oss-cn-hangzhou.aliyuncs.com/zbzyImages/ltxx.png',
          text: '您过来的时候给我个电话吧，您过来的时候给我个电话吧，我等着啦啦啦！！！！您过来的时候给我个电话吧，我等着啦啦啦！！！！！您过来的时候给我个电话吧，我等着啦啦啦！！！',
          time: '2019-10-16 11:30:28',
          timeText: '发布了新文章',
          tag: '【生活中的艺术】'
        }
      ]
    }
  },
  methods: {
    goChatDetail (item) {
      this.$router.push(`/message/circle/detail/${item.id}?data=${JSON.stringify(item)}`)
    }
  }
}
</script>

<style scoped lang="scss">
.circle-page{
  box-sizing: border-box;
  padding: 0 20px 51px;
  .chatList{
    .chatItem{
      padding: 10px 0 8px;
      height: 134px;
      box-sizing: border-box;
      border-bottom: 1px solid #F1F1F1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .top{
        height: 40px;
        display: flex;
        img{
          width: 40px;
          height: 40px;
        }
        .nikeName{
          display: flex;
          flex-direction: column;
          .userName{
            font-size:16px;
            font-weight:600;
            line-height: 22px;
          }
          .timeText{
            font-size:10px;
            font-weight:500;
            color:rgba(153,153,153,1);
            line-height:14px;
          }
        }
      }
      .center{
        height: 40px;
        line-height: 20px;
        overflow: hidden;
        position: relative;
        font-size:14px;
        font-weight:500;
        color:rgba(51,51,51,1);
        &::after{
          content:"...";
          font-weight:bold;
          position:absolute;
          bottom:0;
          right:0;
          padding:0 30px 1px 0;
          background-color: white;
        }
      }
      .footer{
        display: flex;
        justify-content: space-between;
        font-size:12px;
        font-family:PingFang-SC-Medium,PingFang-SC;
        font-weight:500;
        color:rgba(153,153,153,1);
      }
    }
  }
}
</style>
