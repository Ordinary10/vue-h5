<template>
    <div class="tab-bar">
        <div class="tab-item" v-for="(item,index) in tabList" :key="item.path" @click="tabClick(index)">
            <img :src="item.activeImg" alt="" v-show="tabIndex === index">
            <img :src="item.img" alt="" v-show="tabIndex !== index">
            <span class="tab-name" :class="{'active': item.isActive}">{{item.name}}</span>
        </div>
    </div>
</template>

<script>
export default {
  name: 'index',
  props: ['tabIndex'],
  data () {
    return {
      tabList: [
        {
          path: '/home',
          name: '动态',
          img: '../../../static/images/dt01.png',
          activeImg: '../../../static/images/dt02.png'
        },
        {
          path: '/message',
          name: '消息',
          img: '../../../static/images/xx01.png',
          activeImg: '../../../static/images/xx02.png'

        },
        {
          path: '/wode',
          name: '我的',
          img: '../../../static/images/wode01.png',
          activeImg: '../../../static/images/wode02.png'

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
