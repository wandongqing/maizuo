<!--  -->
<template>
<div class='city'>
    <van-nav-bar class="adres" title="当前城市">
        <template #left>
           <van-icon name="cross" size="26" />
        </template>
    </van-nav-bar>
    <div class="search">
        <van-search background="#ffffff"
        placeholder="请输入城市名或者拼音"
        v-model="content"
        @input="getValue"
        @clear = "isChange = false "

        />

    </div>
    <div class="body">
        <div class="searchList" v-if="isChange">
            <van-cell :title="item.name" @click="toCinemal(item.cityId, item.name)" v-for="item in searchList" :key="item.cityId"/>
        </div>
        <div class="empty" v-else>
            <div class="hotcity">
                <p>热门城市</p>
                <article>
                    <van-button class="btn" type="default" v-for="item in hotCitys" @click="toCinemal(item.cityId, item.name)" :key="item.cityId">{{item.name}}</van-button>
                </article>
            </div>
            <van-index-bar >
                <template v-for="(item, index) in Index" >
                    <van-index-anchor :index="item"  :key="index" />
                    <van-cell :title="city.name" v-for="city in cityList[item]" @click="toCinemal(city.cityId, city.name)" :key="city.cityId"/>
                </template>
            </van-index-bar>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
    data () {
        return {
            cityList:null,
            Index:null,
            hotCitys: [],
            content:'',
            allCity:[],
            isChange:false
        }
    },
    computed: {
        searchList: function () {
            return this.allCity.filter(city => {
                return city.pinyin.includes(this.content) || city.name.includes(this.content)
            })
            // content
        }
    },
    methods: {
        toCinemal (id, name) {
            this.$router.push({
                name:'cinemas',
                params: {
                    cityId:id,
                    name
                }
            })
        },
        getChar () {

            console.log('getChar')
        },
        getValue () {
             this.isChange = true;
        }
    },
    created() {
        axios({
            url: 'https://m.maizuo.com/gateway?k=4400791',
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"159110876597491462651905","bc":"110100"}',
                'X-Host': 'mall.film-ticket.city.list'
            }
        }).then((res) => {
            var obj = {}
            let citys = res.data.data.cities
            let A_arr = citys.filter(city => {
                return city.pinyin.startsWith('a')
            })
            this.allCity = citys;
            this.hotCitys = citys.filter(city => {
                return city.isHot == 1
            })
            citys.forEach(city => {
                var firstChar = city.pinyin.substr(0,1).toUpperCase();
                if (! obj[firstChar]) {
                    obj[firstChar] = [];
                }
                obj[firstChar].push(city)

            });
            this.Index = Object.keys(obj).sort()
            this.cityList = obj;
            // console.log(obj)
            // console.log(res.data.data.cities)
        })
    },
}
</script>
<style lang='less' scoped>
.city {
    height: 100%;
    background-color: #f4f4f4;
    display: flex;
    flex-direction: column;
    .adres, .search {
        height: 40px;
    }
    .body {
        flex: 1 0 0;
        overflow-y: scroll;
        // display: fle;
        .searchList,.empty {
            text-align: left;
        }
        .hotcity {
            background: #fff;
            padding: 10px;
            article {
                //  display: flex;
                //  flex-wrap: wrap;
                //  align-content: flex-start;
                // justify-content: space-around;
            }
            .btn {
                width: 99px;
                height: 30px;
                margin: 5px;
            }
        }

    }
}
</style>