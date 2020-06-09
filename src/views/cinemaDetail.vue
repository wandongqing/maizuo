<!--  -->
<template>
<div class='cinemaDetail' v-if="obj">
    <van-nav-bar
        left-arrow
        @click-left="onClickLeft"
    />
     <van-nav-bar class="cname"
       :title="obj.name"
    />
    <van-cell>
    <template #title>
        <van-tag class="mark" plain type="warning" v-for="(item, index) in obj.services" :key="index">{{item.name}}</van-tag> <van-icon color="#ffb232" name="arrow" />
    </template>
    </van-cell>
    <div class="bottom">
        <div class="one">
            <van-icon name="location-o" size="26"/>
            <p>{{obj.address}}</p>
            <a :href="'tel:+' + obj.phone"><van-icon name="phone-o" size="26"/></a>
        </div>
        <div>
            <van-image
            width="10rem"
            height="10rem"
            fit="contain"
            :src="obj.logoUrl"
            />
        </div>
    </div>
</div>
</template>

<script>
import axios from "axios";
export default {
    data: function () {
        return {
            obj: null
            // cobj: null
        }
    },
    created () {
        // this.cobj = this.$route.query.obj
        // console.log(this.cobj)
        let cinemaId = this.$route.query.obj.cinemaId
        axios({
            url: `https://m.maizuo.com/gateway/?cinemaId=${cinemaId}&k=798166`,
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"159110876597491462651905","bc":"110100"}',
                'X-Host': 'mall.film-ticket.cinema.info'
            }
        }).then((res) => {
            this.obj = res.data.data.cinema
        console.log(this.obj)
        })
    },
    methods: {
        onClickLeft () {
            this.$router.back()
        }
    }
}
</script>
<style lang='less' scoped>
.cname {
  font-weight: bolder;
  font-family: 微软雅黑;
}
.mark{
    margin: 0px 3px;
}
.van-cell {
    padding: 10px;
    align-items: center;
}
.one{
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 10px;
    p {
        width: 300px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        text-align: left;
    }
}
</style>