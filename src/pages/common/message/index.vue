<template>
    <div class="pages">
        <van-nav-bar
                title="消息"
                left-arrow
                @click-left="$router.push('/home')"
        />
        <van-list class="card-list">
            <van-cell class="card-item">
                <div class="left">
                    <img src="../../../../static/images/ltxx.png" alt="">
                </div>
                <div class="center">
                    聊天消息
                </div>
                <div class="right">
                    <img src="../../../../static/images/next4.png" alt="">
                </div>
            </van-cell>
            <van-cell>
                <div class="left">
                    <img src="../../../../static/images/qzxx.png" alt="">
                </div>
                <div class="center">
                    圈子消息
                </div>
                <div class="right">
                    <img src="../../../../static/images/next4.png" alt="">
                </div>
            </van-cell>
            <van-cell>
                <div class="left">
                    <img src="../../../../static/images/xtxx.png" alt="">
                </div>
                <div class="center">
                    系统消息
                </div>
                <div class="right">
                    <img src="../../../../static/images/next4.png" alt="">
                </div>
            </van-cell>
        </van-list>
        <tabBar :tabIndex="1"></tabBar>
    </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      topBarConfig: {
        name: '消息',
        path: '/home'
      }
    }
  }
}
</script>

<style scoped lang="scss">
.pages{
    .top-bar{
        border-bottom: 1px solid #F1F1F1;
        padding: 0 20px;
    }
    .card-list{
        padding: 0 20px;
        .card-item{
            height: 60px;
            display: flex;
            align-items: center;
            .left{
                img{
                    width: 36px;
                    height: 36px;
                }
            }
            .center{
                flex: 1;
                display: flex;
                justify-content: space-between;
            }
        }
    }
}
</style>
