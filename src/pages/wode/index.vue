<template>
    <div class="pages">
        <img src="https://ordinary10.oss-cn-hangzhou.aliyuncs.com/zbzyImages/grzx_bg.png" alt="">
        <div class="userInfoCard">
            <div class="top-info x_box">
                <img class="left" src="https://ordinary10.oss-cn-hangzhou.aliyuncs.com/zbzyImages/qzxx.png"/>
                <div class="center">
                    王麻子
                </div>
                <img class="right" src="https://ordinary10.oss-cn-hangzhou.aliyuncs.com/zbzyImages/next4.png"/>
            </div>
            <div class="footer-info flex_centerY">
                <div class="footer-item flex_column">
                    <span class="number">320</span>
                    <span class="text">收藏</span>
                </div>
                <span class="vertical_short_line"></span>
                <div class="footer-item flex_column">
                    <span class="number">320.45</span>
                    <span class="text">余额</span>
                </div>
            </div>
        </div>
        <div class="lists">
            <div class="listItem x_box click_active" v-for="(item,index) in carList" :key="index">
                <img class="left" src="https://ordinary10.oss-cn-hangzhou.aliyuncs.com/zbzyImages/smrz.png" alt="">
                <span class="center">{{item.text}}</span>
                <img class="right" src="https://ordinary10.oss-cn-hangzhou.aliyuncs.com/zbzyImages/next4.png" alt="">
            </div>
        </div>
        <tabBar tabName="wode"></tabBar>
    </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      carList: [
        {
          text: '实名认证'
        },
        {
          text: '我的商机'
        },
        {
          text: '我的人脉'
        },
        {
          text: '我的话题'
        },
        {
          text: '交易密码'
        },
        {
          text: '设置'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
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
            border-bottom: 1px solid #F1F1F1;
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
        border-bottom: 1px solid #F1F1F1;
        img{
            width: 18px;
            height: 18px;
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
