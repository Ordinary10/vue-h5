<template>
    <div class="pages">
      <div class="wode-page" v-show="$route.path==='/wode'">
        <img src="https://ordinary10.oss-cn-hangzhou.aliyuncs.com/zbzyImages/grzx_bg.png" alt="">
        <div class="userInfoCard">
          <div class="top-info x_box">
            <img class="left" src="https://ordinary10.oss-cn-hangzhou.aliyuncs.com/zbzyImages/qzxx.png"/>
            <div class="center">
              王麻子
            </div>
            <i class="iconfont icon-fanhuicopy right"></i>
          </div>
          <div class="footer-info flex_centerY">
            <div class="footer-item flex_column" @click="$router.push('/wode/collection')">
              <span class="number">320</span>
              <span class="text">收藏</span>
            </div>
            <span class="vertical_short_line"></span>
            <div class="footer-item flex_column" @click="$router.push('/wode/residual')">
              <span class="number">320.45</span>
              <span class="text">余额</span>
            </div>
          </div>
        </div>
        <div class="lists">
          <div class="listItem x_box click_active" v-for="(item,index) in carList" :key="index" @click="$router.push(item.goBackPath)">
            <i class="left iconfont" :class="item.icon"></i>
            <span class="center">{{item.text}}</span>
            <i class="iconfont icon-fanhuicopy right"></i>
          </div>
        </div>
        <tabBar tabName="wode"></tabBar>
      </div>
      <div class="wode-page" v-show="$route.path!=='/wode'">
        <topBar></topBar>
        <router-view></router-view>
      </div>
    </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      carList: [
        {
          text: '实名认证',
          icon: 'icon-shimingrenzheng',
          goBackPath: '/wode/real-name'
        },
        {
          text: '我的商机',
          icon: 'icon-wodeshangji',
          goBackPath: '/wode/businessOpportunities'
        },
        {
          text: '我的人脉',
          icon: 'icon-woderenmai',
          goBackPath: '/wode/contacts'
        },
        {
          text: '我的话题',
          icon: 'icon-wodehuati',
          goBackPath: '/wode/topic'
        },
        {
          text: '交易密码',
          icon: 'icon-jiaoyimima',
          goBackPath: '/wode/change-password'
        },
        {
          text: '设置',
          icon: 'icon-shezhi',
          goBackPath: '/wode/set-up'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
    .wode-page{
      height: 100%;
      position: relative;
    }
    .userInfoCard{
        position: absolute;
        left: 16px;
        top: 45px;
        z-index: 999;
        width:342px;
        height:162px;
        background:white;
        box-shadow:0px 0px 20px 0px rgba(207,213,220,0.5);
        border-radius:8px;
        padding: 14px 10px 0;
        box-sizing: border-box;
        .top-info{
            border-bottom: 1px solid $borerColor;
            .left{
                width: 60px;
                height: 60px;
            }
            .center{
                padding: 0 8px;
                font-size:18px;
                font-weight:400;
                color:rgba(17,17,17,1);
            }
          .right{
            color: $retrunIconColor;
          }
        }
        .footer-info{
            width: 100%;
            height: 75px;
            box-sizing: border-box;
            padding-bottom: 14px;
            .footer-item{
                width: 50%;
                text-align: center;
                align-items: center;
                justify-content: center;
                .number{
                    font-size:20px;
                    font-family:PingFangSC-Medium,PingFang SC;
                    font-weight:500;
                    color:rgba(17,17,17,1);
                    line-height:28px;
                }
                .text{
                    font-size:12px;
                    font-family:PingFangSC-Regular,PingFang SC;
                    font-weight:400;
                    color:rgba(102,102,102,1);
                    line-height:17px;
                }
            }
        }
    }
    .lists{
    padding: 0 20px;
    margin-top: 50px;
    .listItem{
        height: 56px;
        border-bottom: 1px solid $borerColor;
        .left{
          color: $leftIconColor;
          font-size: 18px;
        }
        .right{
          color: $retrunIconColor;
        }
        .center{
            padding: 0 12px;
            font-weight:500;
            color:rgba(51,51,51,1);
            font-size: 16px;
        }
    }
}
</style>
