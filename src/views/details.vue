<!--  -->
<template>
<div class='details'>
    <van-nav-bar
    :title="film && film.name"
    left-arrow
    fixed
    @click-left="back"
    v-if="headerShow"
    />
    <div class="wrap" ref="myscroll" v-if="film">
        <div class="poster">
            <img :src="film && film.poster"/>
            <span class="arrow">
                <van-icon name="arrow-left" @click="back"/>
            </span>
        </div>
        <div class="type-grade">
            <span><b style="font-size:18px">{{film.name}}</b> <van-tag>{{film.filmType.name}}</van-tag></span>
            <span style="color:orange"><i style="font-size:18px">{{film.grade}}</i>分</span>
        </div>
        <div class="context">
            <p>{{film.category}}</p>
            <p>2020-01-25日上映</p>
            <p>{{film.nation}}|{{film.runtime}}</p>
            <p :class="{'fixed': isadd}" ref="other">{{film.synopsis}}</p>
            <P class="toggle" @click="toggle"><van-icon :name="curIcon" /></P>
            <div class="leader">
                <b>演职人员</b>
               <div>
                  <section class="imgItem" v-for='(item, index) in film.actors' :key="index">
                    <van-image width="85" height="85" :src="item.avatarAddress" />
                    <span>{{item.name}}</span>
                    <span>{{item.role}}</span>
                  </section>
               </div>
            </div>
            <div class="photos" style="padding-top:10px">
                <van-cell >
                    <template #title>
                        <span class="custom-title">剧照</span>
                    </template>
                    <template>
                        <span class="custom-title">全部({{film.photos.length}})张</span> <van-icon name="arrow" />
                    </template>
                </van-cell>
                <div class="imgwrap">
               <van-image  v-for="(item,index) in film.photos" :key="index" :src="item"/>
                </div>
            </div>
        </div>
    </div>
    <van-button type="primary" block class="btn" @click="getSeat" v-if="film && film.isSale">选座购票</van-button>
</div>
</template>

<script>
import axios from 'axios'
import { Dialog } from 'vant';
export default {
    data: function () {
        return {
            film:null,
            headerShow:false,
            curIcon:'arrow-down',
            isadd: true
        }
    },
    methods: {
        back () {
            this.$router.back()
        },
        getSeat () {
           Dialog.confirm({
                message: '对不起，客观，当前工能没有开放'
            })
        },
        toggle () {
            this.isadd = ! this.isadd;
            this.curIcon = this.curIcon == 'arrow-up' ?'arrow-down' :'arrow-up'
        },
        handleScroll () {
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            if (scrollTop > 0) {
                this.headerShow = true
            } else {
                 this.headerShow = false
            }
        }
    },
    created() {

        let id = this.$route.params.filmId
        // console.log(this.$route)
        axios({
            url: `https://m.maizuo.com/gateway?filmId=${id}&k=2657539`,
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"159110876597491462651905","bc":"110100"}',
                'X-Host': 'mall.film-ticket.film.info'
            }
        }).then(({data}) => {
            this.$nextTick(()=>{})
            this.film = data.data.film

            if (!this.film.isSale) {
                 Dialog.confirm({
                    message: '对不起，客观，当前工能没有开放',
                    cancelButtonText: '拒绝',
                    confirmButtonText: '接受'
                })

            }

        })
    },
    mounted () {
         window.addEventListener('scroll', this.handleScroll)
    }
}
</script>
<style lang='less' scoped>
.poster {
    position: relative;
    .arrow {
        width: 20px;
        height: 20px;
        position: absolute;
        left: 10px;
        top: 10px;
        background: whitesmoke;
        text-align: center;
        line-height: 20px;
        border-radius: 50%;
        opacity: .5;

    }
    img {
        width: 375px;
        height: 210px;

    }
}
.type-grade{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
}
.btn {
    position: fixed;
    bottom: 0px;
    background: orangered;
}
.context {
    font-size: 13px;
    color: #797d82;
    text-align: left;
    background: whitesmoke;
    p {
        height: auto;
        background: #fff;
        padding: 5px 15px;
    }
    .fixed {
        height: 40px;
        transition: all linear .3s;
        overflow: hidden;

    }
    .toggle {
        text-align: center;
    }
    .leader {
        margin-top: 10px;
        background: #fff;
        padding: 0px 15px;
        b {
            font-size: 20px;

        }
        div {
            padding: 10px 0px;
            display: flex;
        }
    }
    .imgwrap {
        width: 375px;

    }
    .imgItem {
        display: flex;
        flex-direction: column;
        align-items: center;

    }
}

</style>