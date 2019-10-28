<template>
    <div class="pages flex_column">
      <div class="nav">
        <span
          class="navItem"
          v-for="(item,index) in navList"
          :class="{'isNacActive': isActive === index}"
          @click="navClick(index)"
          :key="index"
        >
          {{item.title}}
        </span>
        <span class="navAdd">
          <i class="iconfont icon-tianjia"></i>
        </span>
      </div>
      <div class="shuffling">
        <van-swipe
          :autoplay="3000"
          class="vanSwipe">
          <van-swipe-item
            class="vanSwipeItem"
            v-for="(item,index) in swipeList"
            :key="index"
          >
            <img :src="item.img" alt="">
          </van-swipe-item>
        </van-swipe>
      </div>
      <div class="content flex_1 scrollY">
        <div class="contentItem" v-for="(item) in contentList" :key="item.type">
          <div class="itemHeader">
            <div class="typeInfo">
              <div class="title flex_column">
                <span class="titleH1">{{item.type_name}}</span>
                <span class="titleP1 nowrap">{{item.type_text}}</span>
              </div>
              <div class="more">
                <span>{{item.type===1?'更多项目':'更多人脉'}}</span>
                <i class="iconfont icon-fanhuicopy"></i>
              </div>
            </div>
            <div class="typeStatistical" v-if="item.type===1">
              <div class="statistical flex_column">
                <span class="number">{{item.number1}}</span>
                <span class="numberInfo">融资对接成功（个）</span>
              </div>
              <div class="statistical flex_column">
                <span class="number">{{item.number2}}</span>
                <span class="numberInfo">业务对接成功（个）</span>
              </div>
            </div>
          </div>
          <div class="itemCardList scrollX" v-if="item.type===1">
            <div class="cardItem" v-for="(val,i) in item.data" :key="i">
              <div class="top">
                <span class="typeName">【{{val.type_name}}】</span>
                <span class="flex_1 nowrap">{{val.name}}</span>
              </div>
              <div class="center">
                <div class="centerBox">
                  <span>公司：</span>
                  <span class="flex_1">{{val.company}}</span>
                </div>
                <div class="centerBox">
                  <span>内容：</span>
                  <span class="flex_1">{{val.content}}</span>
                </div>
              </div>
              <div class="footer">
                <span>{{val.number1}}人对此项目感兴趣</span>
                <span>
                  查看详情
                  <i class="iconfont icon-fanhuicopy"></i>
                </span>
              </div>
            </div>
          </div>
          <div class="itemCardList scrollX" v-if="item.type===2">
            <div class="cardItem" v-for="(val,i) in item.data" :key="i">
              <div class="top type_2">
                <span class="type_2Name">{{val.name}}</span>
                <span class="vertical_short_line"></span>
                <span class="type_2TypeName">{{val.type_name}}</span>
              </div>
              <div class="center">
                <div class="centerBox">
                  <span>机构类型：</span>
                  <span class="flex_1">{{val.company_type}}</span>
                </div>
                <div class="centerBox">
                  <span>所在位置：</span>
                  <span class="flex_1">{{val.company_address}}</span>
                </div>
                <div class="cardMoney">
                  <span style="font-size: 10px;">￥</span>
                  <span>{{val.money}}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <tabBar tabName="dynamic"></tabBar>
    </div>
</template>

<script>

export default {
  data () {
    return {
      isActive: 0,
      navList: [
        {
          title: '首页'
        },
        {
          title: '商机'
        },
        {
          title: '人脉'
        },
        {
          title: '圈子'
        }
      ],
      swipeList: [
        {
          img: 'https://ordinary10.oss-cn-hangzhou.aliyuncs.com/zbzyImages/bg_img%402x.png'
        },
        {
          img: 'https://ordinary10.oss-cn-hangzhou.aliyuncs.com/zbzyImages/bg_img%402x.png'
        },
        {
          img: 'https://ordinary10.oss-cn-hangzhou.aliyuncs.com/zbzyImages/bg_img%402x.png'
        },
        {
          img: 'https://ordinary10.oss-cn-hangzhou.aliyuncs.com/zbzyImages/bg_img%402x.png'
        }
      ],
      contentList: [
        {
          type: 1,
          type_name: '找项目/找资金',
          type_text: '几十个融资机构，上千上市公司采购精准对',
          number1: 3342,
          number2: 2348,
          data: [
            {
              id: 1,
              type_name: '找投资',
              name: '寻找资金三百万共同投资餐饮行业',
              company: '成都资本之鹰科技有限公司',
              content: '寻找资金三百万共同投资餐饮人工智能项目，前景好，风险小，利润高',
              number1: 22462
            },
            {
              id: 2,
              type_name: '找投资',
              name: '寻找资金三百万共同投资餐饮行业',
              company: '成都资本之鹰科技有限公司',
              content: '寻找资金三百万共同投资餐饮人工智能项目，前景好，风险小，利润高',
              number1: 22462
            }
          ]
        },
        {
          type: 2,
          type_name: '找人脉',
          type_text: '找行业关键人，轻松对接',
          data: [
            {
              id: 1,
              name: 'CEO',
              type_name: '互联网金融',
              company: '成都资本之鹰科技有限公司',
              company_type: '上市公司',
              company_address: '四川省成都市高新区',
              content: '寻找资金三百万共同投资餐饮人工智能项目，前景好，风险小，利润高',
              number1: 22462,
              money: 100
            },
            {
              id: 2,
              name: '渠道经理',
              type_name: '互联网金融',
              company: '成都资本之鹰科技有限公司',
              company_type: '上市公司',
              company_address: '四川省成都市高新区',
              content: '寻找资金三百万共同投资餐饮人工智能项目，前景好，风险小，利润高',
              number1: 22462,
              money: 200
            }
          ]
        }
      ]
    }
  },
  created () {
  },
  mounted () {
  },
  components: {
  },
  methods: {
    navClick (index) {
      this.isActive = index
    }
  }
}
</script>
<style scoped lang="scss">
  /*:class样式*/
  .isNacActive{
   font-size: 26px;
    font-weight: 600;
  }
  .pages{
    padding: 15px 0 51px;
    box-sizing: border-box;
    .nav{
      box-sizing: border-box;
      padding: 0 20px;
      position: relative;
      height: 44px;
      vertical-align:bottom;
      font-size:16px;
      font-weight:500;
      border-bottom: 1px solid $borerColor;
      .navItem{
        margin-right: 18px;
      }
      .navAdd{
        position: absolute;
        top: 50%;
        right: 20px;
        transform: translateY(-50%);
        width: 22px;
        height: 22px;
        box-sizing: border-box;
        border:1px dashed #888888;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    .shuffling{
      height: 164px;
      width: 100%;
      box-sizing: border-box;
      padding: 16px 20px 6px;
      .vanSwipe{
        height: 120px;
        border-radius: 10px;
        overflow: hidden;
        .vanSwipeItem{
          text-align: center;
          background:rgba(84,126,255,1);
          box-shadow:0px 20px 20px -12px rgba(64,123,255,0.3);
          img{
            width: 100%;
            height: 100%;
          }
        }
      }
    }
    .content{
      padding-left: 20px;
      box-sizing: border-box;
      .contentItem{
        .itemHeader{
          min-height: 40px;
          padding-right: 20px;
          box-sizing: border-box;
          .typeInfo{
            height: 40px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .title{
              flex: 1;
              .titleH1{
                font-size:18px;
                font-weight:600;
                line-height:20px;
                margin: 2px 0;
                padding-left: 4px;
                border-left:4px solid #407BFF;
              }
              .titleP1{
                width: 100%;
                box-sizing: border-box;
                font-size:10px;
                font-weight:500;
                color:rgba(142,142,147,1);
                line-height:14px;
                padding-left: 8px;
              }
            }
            .more{
              width: 76px;
              font-size:14px;
              font-weight:500;
              color:rgba(142,142,147,1);
              line-height:20px;
              .iconfont{
                font-size: 12px;
              }
            }
          }
          .typeStatistical{
            height: 96px;
            display: flex;
            align-items: center;
            .statistical{
              width: 50%;
              text-align: center;
              .number{
                font-size:26px;
                font-weight:600;
                line-height:37px;
              }
              .numberInfo{
                font-size:10px;
                font-weight:500;
                color:rgba(142,142,147,1);
                line-height:14px;
              }
            }
          }
        }
        .itemCardList{
          width: 100%;
          display: flex;
          align-items: center;
          padding: 20px 0;
          box-sizing: border-box;
          .cardItem{
            box-shadow:0px 0px 20px 0px rgba(207,213,220,0.5);
            border-radius:10px;
            margin-right: 10px;
            position: relative;
            .top{
              width: 310px;
              height: 44px;
              box-sizing: border-box;
              line-height: 44px;
              display: flex;
              border-bottom: 1px dashed #E9EBF1;
              font-size:16px;
              font-weight:600;
              color:rgba(51,51,51,1);
              padding: 0 10px;
              .typeName{
                color: #72C870;
              }
            }
            .top.type_2{
              display: flex;
              align-items: center;
              font-size: 16px;
              .type_2Name{
                color: #333333;
              }
              .vertical_short_line{
                height: 22px;
                margin: 0 8px;
              }
              .type_2TypeName{
                color: #4C526B;
              }
            }
            .center{
              padding: 9px 10px;
              font-size:14px;
              font-weight:500;
              color:rgba(153,153,153,1);
              border-bottom: 1px solid $borerColor;
              position: relative;
              .centerBox{
                margin: 2px;
                display: flex;
                align-content: flex-start;
              }
              .cardMoney{
                position: absolute;
                right: 30px;
                top: 50%;
                transform: translateY(-50%);
                color: #D83926;
                font-size: 20px;
                font-weight:600;

              }
            }
            .footer{
              padding: 0 10px;
              box-sizing: border-box;
              height: 40px;
              align-items: center;
              display: flex;
              justify-content: space-between;
              color: #AAACB4;
              font-weight: 500;
              font-size: 12px;
              .iconfont{
                font-size: 10px;
              }
            }
          }
        }
      }
    }
  }
</style>
