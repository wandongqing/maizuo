<!--  -->
<template>
<div class='center'>
    <div class="login">
        <img src="../../assets/user.png"/><router-link to='/login'>立即登录</router-link>
    </div>
    <div class="nav">
        <div class="filmorder">
            <van-icon name="orders-o" size='40'/>
            <span>电影订单</span>
        </div>
        <div class="proorder">
            <van-icon name="shop-collect-o" size='40' />
            <span>商品订单</span>
        </div>
    </div>
    <div class="list">
      <van-cell title="单元格" icon="shop-o">
            <template #right-icon>
                <van-icon name="arrow" />
            </template>
        </van-cell>
      <van-cell title="单元格" icon="shop-o">
            <template #right-icon>
                <van-icon name="arrow" />
            </template>
        </van-cell>
      <van-cell title="单元格" icon="shop-o">
            <template #right-icon>
                <van-icon name="arrow" />
            </template>
        </van-cell>
      <van-cell title="单元格" icon="shop-o">
            <template #right-icon>
                <van-icon name="arrow" />
            </template>
        </van-cell>
    </div>
</div>
</template>

<script>

export default {
}
</script>
<style lang='less' scoped>
.center {
    height: 100%;
    background: whitesmoke;
    .login {
        height: 200px;
        background: orange;
        display: flex;
        align-items: center;
        font-size: 18px;
        color: #fff;
        a {
            color: #fff;
        }
        img {
            border-radius: 50%;
            width:63px;
            height: 63px;
            margin: 0px 20px;
        }
    }
    .nav {
        height: 80px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        background: #fff;
        >div {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }
    .list{
        margin-top: 10px;
        .van-cell__title {
            text-align: left;
        }
    }
}
</style>