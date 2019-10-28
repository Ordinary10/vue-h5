<template>
    <div class="pages message-page">
        <topBar :config="config"></topBar>
        <van-list class="van-list" v-show="$route.name==='Message'">
          <van-cell>
            <div class="list-cell flex_centerY click_active" @click="goBack('chat')">
              <img class="left bgc1" src="https://ordinary10.oss-cn-hangzhou.aliyuncs.com/zbzyImages/ltxx(1).png" alt="">
              <div class="center flex_1">
                聊天消息
                <span class="message-tag">11</span>
              </div>
              <i class="iconfont icon-fanhuicopy right"></i>
            </div>
          </van-cell>
          <van-cell>
            <div class="list-cell flex_centerY click_active" @click="goBack('circle')">
              <img class="left bgc2" src="https://ordinary10.oss-cn-hangzhou.aliyuncs.com/zbzyImages/qzxx(1).png" alt="">
              <div class="center flex_1">
                圈子消息
                <span class="message-tag">11</span>
              </div>
              <i class="iconfont icon-fanhuicopy right"></i>
            </div>
          </van-cell>
          <van-cell>
            <div class="list-cell flex_centerY click_active" @click="goBack('system')">
              <img class="left bgc3" src="https://ordinary10.oss-cn-hangzhou.aliyuncs.com/zbzyImages/xtxx(1).png" alt="">
              <div class="center flex_1">
                系统消息
                <span class="message-tag">11</span>
              </div>
              <i class="iconfont icon-fanhuicopy right"></i>
            </div>
          </van-cell>
        </van-list>
        <router-view class="flex_1"></router-view>
        <tabBar tabName="message"></tabBar>
    </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      config: {
        title: '',
        goBackPath: ''
      }
    }
  },
  created () {
    this.init()
  },
  methods: {
    init () {
      this.topBarConfig = {
        title: '消息',
        path: '/dynamic'
      }
    },
    goBack (type) {
      switch (type) {
        case 'chat':
          this.topBarConfig = {
            title: '聊天消息',
            path: '/message'
          }
          this.$router.push(`/message/${type}`)
          break
        case 'circle':
          this.topBarConfig = {
            title: '圈子消息',
            path: '/message'
          }
          this.$router.push(`/message/${type}`)
          break
        case 'system':
          this.topBarConfig = {
            title: '系统消息',
            path: '/message'
          }
          this.$router.push(`/message/${type}`)
          break
      }
    }
  },
  watch: {
    '$route.name': function (val1, val2) {
      if (val1 === 'Message') {
        this.topBarConfig = {
          title: '消息',
          path: '/dynamic'
        }
      }
    }
  }
}
</script>
<style lang="scss">
  .message-page{
    .van-list{
      padding: 0 20px;
      .van-cell{
        padding: 0;
      }
    }
    .van-nav-bar__title.van-ellipsis{
      font-size:18px;
      font-family:PingFangSC-Semibold,PingFang SC;
      font-weight:600;
      color:rgba(0,0,0,1);
    }
  }
</style>
<style scoped lang="scss">
  .pages{
    display: flex;
    flex-direction: column;
  }
  .list-cell{
    height: 60px;
    .left{
      border-radius: 50%;
    }
    .bgc1{
      background:linear-gradient(180deg,rgba(255,78,66,1) 0%,rgba(255,0,0,1) 100%);
    }
    .bgc2{
      background:linear-gradient(180deg,rgba(74,104,255,1) 0%,rgba(106,70,255,1) 100%);
    }
    .bgc3{
      background:linear-gradient(360deg,rgba(31,94,235,1) 0%,rgba(60,121,252,1) 100%);
    }
    .center{
      font-size:16px;
      font-family:PingFang-SC-Heavy,PingFang-SC;
      font-weight:800;
      color:rgba(51,51,51,1);
      position: relative;
      box-sizing: border-box;
      padding: 0 4px;
      .message-tag{
        width: 18px;
        height: 18px;
        border-radius: 50%;
        text-align: center;
        line-height: 18px;
        background-color: #F11209;
        font-size:12px;
        font-family:PingFangSC-Semibold,PingFang SC;
        font-weight:600;
        color:rgba(255,255,255,1);
        position: absolute;
        top: 50%;
        right: 4px;
        transform: translateY(-50%);
      }
    }
    .right{
      color: #D5D8E5;
    }
  }
</style>
