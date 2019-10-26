<template>
    <div class="tab-bar">
        <div class="tab-item" v-for="(item,index) in tabList" :key="item.path" @click="tabClick(index)">
            <img :src="item.activeImg" alt="" v-show="tabName === item.name">
            <img :src="item.img" alt="" v-show="tabName !== item.name">
            <span class="tab-name" :class="{'active': tabName === item.name}">{{item.text}}</span>
        </div>
    </div>
</template>

<script>
export default {
  name: 'index',
  props: ['tabName'],
  data () {
    return {
      tabList: [
        {
          path: '/dynamic',
          name: 'dynamic',
          text: '动态',
          img: 'https://ordinary10.oss-cn-hangzhou.aliyuncs.com/zbzyImages/dt01.png',
          activeImg: 'https://ordinary10.oss-cn-hangzhou.aliyuncs.com/zbzyImages/dt02.png'
        },
        {
          path: '/message',
          name: 'message',
          text: '消息',
          img: 'https://ordinary10.oss-cn-hangzhou.aliyuncs.com/zbzyImages/xx01.png',
          activeImg: 'https://ordinary10.oss-cn-hangzhou.aliyuncs.com/zbzyImages/xx02.png'

        },
        {
          path: '/wode',
          name: 'wode',
          text: '我的',
          img: 'https://ordinary10.oss-cn-hangzhou.aliyuncs.com/zbzyImages/wode01.png',
          activeImg: 'https://ordinary10.oss-cn-hangzhou.aliyuncs.com/zbzyImages/wode02.png'

        }
      ]
    }
  },
  methods: {
    tabClick (index) {
      if (this.$props.tabIndex === index) return
      this.$router.push(this.tabList[index].path)
    }
  }
}
</script>

<style scoped lang="scss">
.tab-bar{
    border-top: 1px solid #F1F1F1;
    position: fixed;
    z-index: 2000;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 50px;
    background:rgba(255,255,255,0.9);
    box-shadow:0px 1px 0px 0px rgba(213,216,229,1);
    display: flex;
    align-items: center;
    justify-content: space-around;
    .tab-item{
        width: 48px;
        height: 44px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        img{
            width: 26px;
            height: 26px;
        }
        .tab-name{
            width:48px;
            font-size:10px;
            text-align: center;
            font-family:PingFang-SC-Medium,PingFang-SC;
            font-weight:500;
            color:rgba(142,142,147,1);
            line-height:14px;
        }
        .tab-name.active{
            color: #0076FF;
        }
    }
}
</style>
