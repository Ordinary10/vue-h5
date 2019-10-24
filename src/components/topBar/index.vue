<template>
  <div class="top-bar title_text">
      <a :href="$props.topBarConfig.path"><img src="../../../static/images/return.png" alt=""></a>
      <span>{{$props.topBarConfig.name}}</span>
  </div>
</template>

<script>
export default {
  name: 'index',
  props: ['topBarConfig']
}
</script>

<style scoped lang="scss">
.top-bar{
    width: 100%;
    height: 44px;
    position: relative;
    text-align: center;
    line-height: 44px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    img{
        width: 18px;
        height: 12px;
        &:active{
            background-color: #999;
        }
    }
    span{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }
}
</style>
