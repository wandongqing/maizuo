<template>
  <div class="home">
    <div class="wrap">
      <router-view></router-view>
    </div>
    <van-tabbar route class="bgcolor">
        <van-tabbar-item replace to="/films" icon="video-o">
          电影
        </van-tabbar-item>
        <van-tabbar-item replace to="/cinemas" icon="photo-o">
          影院
        </van-tabbar-item>
        <van-tabbar-item  url="http://baidu.com" icon="newspaper-o">
          咨询
        </van-tabbar-item>
        <van-tabbar-item replace to="/center" icon="manager-o">
          我的
        </van-tabbar-item>
  </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
  }
}
</script>
<style scoped lang="less">
.home {
  height: 100%;
  display: flex;
  flex-direction: column;
  .wrap {
    flex: 1;
  }
  .bgcolor {
    height: 49px;
    background-color: #fff;
  }
}
</style>
