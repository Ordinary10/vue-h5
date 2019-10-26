<template>
  <div class="top-bar title_text">
    <van-nav-bar
      class="van-nav-bar"
      :title="config.title?config.title:$route.meta.title"
      left-arrow
      @click-left="$router.push(config.goBackPath?config.goBackPath:$route.meta.goBackPath)"
    />
  </div>
</template>

<script>
export default {
  name: 'index',
  props: {
    'config': {
      type: Object,
      default: function () {
        return {
          title: '',
          goBackPath: ''
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
.top-bar{
    width: 100%;
    box-sizing: border-box;
    .van-nav-bar{
      height: 44px;
    }
}
</style>
