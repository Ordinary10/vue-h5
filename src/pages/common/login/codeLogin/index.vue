<template>
    <div class="pages">
        <div class="title">
            <span style="color:#4C526B;">验证码已发送至</span>
            <span style="color:#407BFF;">{{phone}}</span>
        </div>
        <div class="container">
            <div class="vcode" id='vertifycode'>
                <input
                   type="tel"
                   maxlength='4'
                   v-model="code"
                   ref='code'
                   class='code'
                   id='code'
                   @focus='focus = true'
                   @blur='focus = false'
                   :disabled='disabled'
                >
                <div class="labels">
                    <label class='label' for="code"
                           :class='[{active: focus===true && index===currentIndex},{isNumber: index<currentIndex}]'
                           v-for='(item,index) in length'
                           v-text='arrCode[index]'
                           :key="index">
                    </label>
                </div>
            </div>
        </div>
        <div class="toObtain" v-show="timer>0">
            <span style="color: #407BFF;">{{timer}}s</span>
            <span>后重新获取</span>
        </div>
        <div class="toObtain" v-show="timer===0">
            <span style="color: #407BFF;padding-right: 20px">重新获取</span>
        </div>
    </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      phone: '',
      length: 4,
      code: '',
      focus: false,
      disabled: false,
      timer: 59
    }
  },
  created () {
    this.phone = this.$route.query.phone
  },
  computed: {
    arrCode: function () {
      return this.code.split('')
    },
    currentIndex: function () {
      return this.code.length
    }
  },
  methods: {

  },
  watch: {
    code: function (newV, oldV) {
      let self = this
      this.code = newV.replace(/[^\d]/g, '') // 限制非数字
      if (newV.length >= this.length) {
        this.disabled = true
        this.$refs.code.blur()
        alert('submit:' + self.code + '')
        this.$router.push('/')
      }
    }
  }
}
</script>

<style scoped lang="scss">
.pages{
    padding: 20px 20px 0;
    box-sizing: border-box;
    .title{
        font-size:17px;
        font-weight:600;
        color:rgba(76,82,107,1);
        line-height:24px;
    }
    .toObtain{
        margin-top: 20px;
        text-align: right;
        color: #4C526B;
        font-size:12px;
    }
    @keyframes animate {
        100% {
            opacity: 0;
        }
    }
    .container{
        margin-top: 80px;
        padding: 5%;
    }
    .vcode{
        position: relative;
        width: 100%;
        overflow: hidden;
    }
    .code{
        width: 100%;
        padding: 0;
        height: 40px;
        font-size: 35px;
        overflow: hidden;
        border: none;
        outline: none;
        opacity: 0;
        margin-left: -100%; // ios上透明度为0时依然有光标
        -webkit-tap-highlight-color: transparent;
    }
    .labels{
        display: flex;
        display: -webkit-flex;
        width: 100%;
        height: 40px;
        justify-content: space-between;
        -webkit-justify-content: space-between;
        margin-top: -40px;
        -webkit-tap-highlight-color: transparent;// 解决ios点击灰色阴影的问题
    }
    .label{
        height: 34px;
        width: 50px;
        border-bottom:1px solid #E9EAEE;
        float: left;
        color: #313131;
        font-size: 35px;
        text-align: center;
        padding-bottom: 4px;
    }
    .isNumber.label{
        border-bottom:1px solid #4E556D;
    }
    .active:after{ // 伪类实现光标效果
        content: ' ';
        display: inline-block;
        height: 100%;
        width: 2px;
        background: #313131;
        animation: .8s animate infinite;
    }
}
</style>
