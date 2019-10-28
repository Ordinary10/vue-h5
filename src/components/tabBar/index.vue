<template>
    <div class="tab-bar">
        <div class="tab-item" v-for="(item,index) in tabList" :key="item.path" @click="tabClick(index)">
            <i class="iconfont" :class="[item.icon,{activeIcon: tabName === item.name}]"></i>
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
          icon: 'icon-dongtai'
        },
        {
          path: '/message',
          name: 'message',
          text: '消息',
          icon: 'icon-xiaoxi'
        },
        {
          path: '/wode',
          name: 'wode',
          text: '我的',
          icon: 'icon-wode'
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
  /*:class样式*/
  .activeIcon{
    color: #407BFF !important;
  }
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
        .iconfont{
          color: #C5D0E4;
          font-size: 26px;
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
