<!--  -->
<template>
<div class='nowPlaying'>
    <div>
        <div class="item" v-for="item in flim" :key="item.filmId" @click="toDetail(item.filmId)">
        <div class="img">
            <img :src="item.poster" width="69" height="91"/>
        </div>
        <div class="des">
            <p>{{item.name}}  <van-tag color='#d2d6dc'>{{item.filmType.name}}</van-tag></p>
            <p>观众评分: {{item.grade}}</p>
            <p>主演: {{item.director}}</p>
            <p>{{item.nation}}|{{item.runtime}}分钟</p>
        </div>
        <span><van-tag plain type="warning">购买</van-tag></span>
    </div>
    <div class="nomore">无更多电影</div>
    </div>
    <van-loading type="spinner" v-show="!flim"/>
</div>
</template>

<script>
import axios from 'axios'
export default {
    data: function () {
      return {
          flim:null
       }
    },
    methods: {
        toDetail (id) {
            this.$router.push({path:`/film/${id}`})
        }
    },
    created () {
       axios({
        url: 'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=9397195',
        headers: {
            'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"159110876597491462651905","bc":"110100"}',
            'X-Host': 'mall.film-ticket.film.list'
        }
      }).then(res => {
        console.log(res.data);
            this.flim = res.data.data.films
      })
    }
}
</script>
<style lang='less' scoped>
.nowPlaying {
    background: whitesmoke;
    height: 100%;
}
.item {
    display: flex;
    align-items: center;
    height: 124px;
    justify-content: space-around;
    padding:5px 20px;
    background: #fff;
    .des {
        text-align: left;
        flex: 1;
        padding: 0px 20px;
    }

}
.nomore {
  background-color: #ededed;
  height: 50px;
  line-height: 50px;
  text-align: center;
  color: #bdc0c5

}
</style>