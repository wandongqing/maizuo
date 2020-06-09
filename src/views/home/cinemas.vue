<!--  -->
<template>
<div class='cinemas'>
   <van-nav-bar title="影院"  class="cinemas_nav">
    <template #right>
        <van-icon name="search" size="18" />
    </template>
    <template #left>
        <div class="cinemas_adress">
            <span>{{defaultCity.name}}</span>
            <van-icon name="arrow-down" size='18' @click="toCity"/>
        </div>
    </template>
    </van-nav-bar>
    <div class="cinemaList">
        <van-list >
        <van-cell v-for="item in list" :key="item.cinemaId" @click="toCinema(item.cinemaId, item)">
             <template #title>
                 <div class="top">
                     <p><b>{{item.name}}</b></p><span style="color:red">{{item.lowPrice | $ToY(1)}} 起</span>
                 </div>
                 <div class="bottom">
                      <p class="text">{{item.address}}</p><span>距离未知</span>
                 </div>
            </template>
        </van-cell>
        </van-list>
    </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
    data: function () {
        return {
            list: [],
            defaultCity:{
                name:'北京',
                cityId:110100
            }
        }
    },
    methods: {
        toCity () {
            this.$router.push({ name: 'city'})
        },
        toCinema (id, obj) {
            this.$router.push({ path: `/cinema/${id}/film`,query: { obj } })
        }
    },
    filters: {
        $ToY: function (data, payload) {
            return "￥" + (data/100).toFixed(payload)
        }
    },
    created () {
        // let cc = this.$route.params.cityId ? this.$route.params : this.defaultCity
        // let {name, cityId} = this.$route.params.cityId ? this.$route.params : this.defaultCity
        this.defaultCity = this.$route.params.cityId ? this.$route.params : this.defaultCity
        axios({
            url: `https://m.maizuo.com/gateway?cityId=${this.defaultCity.cityId}&ticketFlag=1&k=6046339`,
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"159110876597491462651905","bc":"110100"}',
                'X-Host': 'mall.film-ticket.cinema.list'
            }
        }).then((res) => {
            this.list = res.data.data.cinemas
        })
    }
}
</script>
<style lang='less' scoped>
.cinemas {
    height: 100%;
    display: flex;
    flex-direction: column;
    .cinemas_nav {
        height: 44px;
    }
    .cinemas_adress {
        display: flex;
        align-items: center;
    }
    .cinemaList {
        flex:1 0 0;
        overflow: scroll;
        .top, .bottom {
            padding: 0px 10px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 20px;
            padding: 5px;
            font-family: 微软雅黑;
        }
        .text {
            width: 250px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            text-align: left;
        }
    }
}
</style>