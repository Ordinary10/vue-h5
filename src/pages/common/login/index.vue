<template>
  <div class="pages">
    <div class="pages flex_column" v-show="$route.path==='/login'">
      <div class="loginHeader flex_1">
        <div class="loginText">
          <p style="font-size: 20px;">Hello！</p>
          <p>欢迎加入资本之鹰</p>
          <p style="font-size: 12px;color: #999;margin-top: 5px;">登录代表你已同意<span style="color: #407BFF">《用户条款与隐私协议》</span></p>
        </div>
        <div class="loginWay">
          <div class="loginBtn flex_column" @click="$router.push('/login/smsLogin')">
            <img src="https://ordinary10.oss-cn-hangzhou.aliyuncs.com/zbzyImages/yzm.png" alt="">
            <span>验证码登录</span>
          </div>
          <div class="loginBtn flex_column">
            <img src="https://ordinary10.oss-cn-hangzhou.aliyuncs.com/zbzyImages/wechat.png" alt="">
            <span>微信登录</span>
          </div>
        </div>
      </div>
      <img class="loginBgcImage" src="https://ordinary10.oss-cn-hangzhou.aliyuncs.com/zbzyImages/bg_img%402x.png" alt="">
    </div>
    <div class="pages" v-show="$route.path!=='/login'">
      <topBar></topBar>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index'
}
</script>

<style scoped lang="scss">
.pages{
  .loginBgcImage{
    width: 100%;
    height: 377px;
  }
  .loginHeader{
    padding: 30px 50px 22px;
    .loginText{
      color: #111111;
      font-size:27px;
      font-weight:600;
    }
    .loginWay{
      margin-top: 55px;
      display: flex;
      justify-content: space-around;
    }
    .loginBtn{
      align-items: center;
      img{
        width: 44px;
        height: 44px;
      }
      span{
        font-size:12px;
        font-weight:500;
        color:rgba(153,153,153,1);
        margin-top: 10px;
      }
    }
  }
}
</style>
