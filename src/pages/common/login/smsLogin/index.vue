<template>
    <div class="pages">
        <div class="title">验证码登录</div>
        <div class="inputBox">
            <input type="tel" v-model="phone" @keyup="phoneChange" placeholder="请输入手机号" class="phoneInput">
            <i class="iconfont icon-shanchu" v-show="phone" @click="canel"></i>
        </div>
        <button class="nextBtn" :class="{'isSubmit': isSubmit}" @click="next">下一步</button>
    </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      phone: '',
      isSubmit: false
    }
  },
  methods: {
    phoneChange (e) {
      let phoneNum = this.phone.trim()
      let len = phoneNum.length
      let phonePre = /^1(3|4|5|7|8)\d{9}$/
      if (phonePre.test(phoneNum.replace(/\s*/g, ''))) {
        this.isSubmit = true
      } else {
        this.isSubmit = false
      }
      if (e.keyCode === 8) {
        this.phone = phoneNum
      } else if (e.keyCode === 13) {
        this.next()
      } else if (len === 3 || len === 8) {
        phoneNum += ' '
        this.phone = phoneNum
      }
    },
    canel () {
      this.phone = ''
      this.isSubmit = false
    },
    next () {
      let phone = this.phone.replace(/\s*/g, '')
      let phonePre = /^1(3|4|5|7|8)\d{9}$/
      if (phonePre.test(phone)) {
        this.$router.push(`/login/codeLogin?phone=${phone}`)
      }
    }
  }
}
</script>

<style scoped lang="scss">
    /*:class样式*/
    .isSubmit{
        background-color:rgba(64,123,255,1) !important;
    }
.pages{
    padding: 20px 20px 0;
    box-sizing: border-box;
    .title{
        font-size:17px;
        font-weight:600;
        color:rgba(76,82,107,1);
        line-height:24px;
        margin-bottom: 58px;
    }
    .inputBox{
        height: 52px;
        box-sizing: border-box;
        border-bottom: 1px solid $borerColor;
        padding-bottom: 14px;
        position: relative;
        .phoneInput{
            height: 37px;
            font-size:34px;
            font-weight:600;
            line-height:37px;
            border: none;
            &::-webkit-input-placeholder { /* Chrome/Opera/Safari */
                color: #D5D8E5;
                font-size: 26px;
            }
            &::-moz-placeholder { /* Firefox 19+ */
                color: #D5D8E5;
                font-size: 26px;
            }
            &:-ms-input-placeholder { /* IE 10+ */
                color: #D5D8E5;
                font-size: 26px;
            }
            &:-moz-placeholder { /* Firefox 18- */
                color: #D5D8E5;
                font-size: 26px;
            }
        }
        .iconfont{
            width: 20px;
            height: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 14px;
            box-sizing: border-box;
            border: 1px dashed #CFD5DC;
            color: #CFD5DC;
            position: absolute;
            right: 0;
            top: 50%;
            transform: translateY(-70%);
        }
    }
    .nextBtn{
        margin-top: 138px;
        width: 100%;
        height: 44px;
        text-align: center;
        background-color: #CFD5DC;
        border-radius:22px;
        font-size:16px;
        font-weight:600;
        color:rgba(255,255,255,1);
        line-height:44px;
        border: none;
        &:active{
            opacity: 0.8;
        }
    }
}
</style>
