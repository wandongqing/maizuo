<!--  -->
<template>
<div class='comingSoon'>
     <div class="item" v-for="item in flim" :key="item.filmId"  @click="toDetail(item.filmId)">
        <div class="img">
            <img :src="item.poster" width="69" height="91"/>
        </div>
        <div class="des">
            <p>{{item.name}}  <van-tag color='#d2d6dc'>{{item.filmType.name}}</van-tag></p>
            <p class="actors">主演: <span v-for="(name,index) in item.actors" :key="index">{{name.name}}</span>,</p>
            <p>上映日期:周五12月18日</p>
        </div>
    </div>
    <div class="nomore">无更多电影</div>
</div>
</template>

<script>
import axios from 'axios'
export default {
    data: function () {
      return {
          flim: []
      }
    },
    methods: {
        toDetail (id) {
            this.$router.push({path:`/film/${id}`})
        }
    },
    created () {
       axios({
        url: 'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=2&k=7410232',
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15610855429195524981146"}',
          'X-Host': 'mall.film-ticket.film.list'
        }
      }).then(res => {
          this.flim = res.data.data.films
          console.log( this.flim)
      })
    }
}
</script>
<style lang='less' scoped>
.comingSoon {
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
        width: 229px;
        .actors {
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
            margin-top: 20px;
        }
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