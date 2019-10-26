<template>
    <div class="errPage404">
      <img src="https://ordinary10.oss-cn-hangzhou.aliyuncs.com/zbzyImages/404.jpg" alt="">
      <span>你访问的页面无法到达</span>
      <router-link to="/">返回首页</router-link>
    </div>
</template>

<script>
export default {
  name: 'page404',
  data () {
    return {}
  },
  methods: {
    backToHome () {
      this.$router.push('/')
    }
  }
}
</script>
<style  lang="scss" scoped>
.errPage404{
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img{
    border-radius: 50%;
  }
  span,a{
    color: #999;
    font-size: 16px;
    line-height: 32px;
    margin: 16px 0;
  }
  a{
    color: #3d4c8b;
    text-decoration: underline;
    &:hover{
      color: #2b3c8b;
    }
  }
}
</style>
