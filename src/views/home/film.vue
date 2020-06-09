<!--  -->
<template>
<div class='film'>
    <van-tabs v-model="active">
        <van-tab title="正在热映" replace to="/films/nowPlaying"></van-tab>
        <van-tab title="即将热映"  replace to="/films/comingSoon"></van-tab>

    </van-tabs>
    <div class="area">
        <router-view></router-view>
    </div>
</div>
</template>

<script>

export default {
    data: function() {
        return {
            active: 0
        }
    }
}

</script>
<style lang='less' scoped>
.film {
    height: 100%;
    display: flex;
    flex-direction: column;
    .area {
        flex: 1;
    }
}
</style>