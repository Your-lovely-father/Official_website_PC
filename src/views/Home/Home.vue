<template>
    <div class="home">
        <div class="module1">
            <video src="/uploadFiles/file/20200326/4a8ae83a91334310b56593b830745b36.mp4"
                   poster="../../assets/img/yy.jpg"
                   class="video"></video>
        </div>
        <div class="module2">
            <img src="../../assets/img/aa.jpg" alt="">
            <div class="module2-text">
                <p class="p1">可立刻有限公司</p>
                <p class="p2">可立刻</p>
                <p class="p3">从吃什么到怎么吃，从小酌怡情到合家团圆，从产品到背后蕴藏的文化、情怀、格调、趣味，柏厨，更懂中国人的厨房文化追求。</p>
                <p class="p4">从吃什么到怎么吃，从小酌怡情到合家团圆，从产品到背后蕴藏的文化、情怀、格调、趣味，柏厨，更懂中国人的厨房文化追求。</p>
                <a href="javascript:;" class="p5">了解详情</a>
            </div>
        </div>
        <div class="module3">
            <img src="../../assets/img/bb.jpg" alt="">
            <div class="module3-swiper">
                <el-carousel :interval="5000" arrow="always">
                    <el-carousel-item v-for="item in 4" :key="item">
                        <div class="text-swiper">
                            <p>高楼大厦</p>
                            <p>描述乐意对的时刻改变登记卡滚吧滚吧打开过把空格空间的观看大肯德基就不敢靠近</p>
                        </div>
                    </el-carousel-item>
                </el-carousel>
            </div>
        </div>
        <div class="module4">
            <img src="../../assets/img/cc.jpg" alt="">
            <div class="module4-box">
                <p class="titile">可立刻有限公司</p>
                <p>描述说分手快发货IFFif必胜法宝司法部客服部覅社保费死不死啊腐败干部阿古柏卡不过iabib</p>
                <div class="mover">
                    <ul>
                        <li>
                            <div class="image">
                                <img src="../../assets/img/fang.gif" alt="">
                            </div>
                            <p class="guide">专卖服务</p>
                        </li>
                        <li>
                            <div class="image">
                                <img src="../../assets/img/fang.gif" alt="">
                            </div>
                            <p class="guide">专卖服务</p>
                        </li>
                        <li>
                            <div class="image">
                                <img src="../../assets/img/fang.gif" alt="">
                            </div>
                            <p class="guide">专卖服务</p>
                        </li>
                    </ul>
                </div>
                <p class="details">了解详情</p>
            </div>
        </div>
        <div class="module5">

        </div>
    </div>
</template>

<script>
    export default {
        name: "home"
    }
</script>

<style scoped>
    .home {
        width: 100%;
    }

    .module1 {
        width: 100%;
    }

    .video {
        width: 100%;
    }

    .p1 {
        font-size: 40px;
        font-weight: bold;
    }

    .p2 {
        font-size: 40px;
        font-weight: bold;
        display: none;
    }

    .p3 {
        margin-top: 30px;
        color: #333;
    }

    .p4 {
        margin-top: 30px;
        color: #333;
        display: none;
    }

    .p5 {
        margin-top: 80px;
        display: block;
        width: 135px;
        height: 35px;
        border: 1px solid #e60012;
        text-align: center;
        line-height: 35px;
        border-radius: 35px;
        box-shadow: 1px 1px 5px #777;
        color: black;
    }

    .module2 {
        width: 100%;
        position: relative;
    }

    .module2-text {
        width: 570px;
        height: 26px;
        position: absolute;
        top: 250px;
        left: 200px;
    }

    .module2 > img {
        width: 100%;
    }

    .module3 {
        width: 100%;
        position: relative;
    }

    .module3 > img {
        width: 100%;
    }
    .module4{
        width: 100%;
        position: relative;
    }
    .module4 > img {
        width: 100%;
    }
    .module4-box{
        color: #fff;
        position: absolute;
        top: 120px;
        left: 130px;
        width: 490px;
        height: 490px;
        padding: 70px 60px 50px;
        background: rgba(0,0,0,0.4);
        border-radius: 50px;
        z-index: 99;
    }
    .module3-swiper {
        width: 500px;
        height: 580px;
        position: absolute;
        top: 300px;
        right: 200px;
        overflow: hidden;
    }

    .el-carousel__item h3 {
        color: #475669;
        font-size: 18px;
        opacity: 0.75;
        line-height: 330px;
        margin: 0;
    }

    .module3-swiper >>> .el-carousel {
        height: 330px;
        margin-top: 200px;
    }

    .module3-swiper >>> .el-carousel__item {
        border-radius: 50% !important;
        width: 330px;
        height: 330px;
        margin-left: 86px !important;
        overflow: visible !important;
    }

    .module3-swiper >>> .el-carousel--horizontal {
        overflow: visible !important;
    }

    .module3-swiper >>> .el-carousel__arrow--right {
        border: 1px solid #e60012 !important;
        color: #e60012 !important;
    }

    .module3-swiper >>> .el-carousel__arrow--left {
        border: 1px solid #e60012 !important;
        color: #e60012 !important;
    }

    .module3-swiper >>> .el-carousel__button {
        width: 10px;
        height: 10px;
        border-radius: 50% !important;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }

    .text-swiper {
        position: absolute;
        top: -150px;
        z-index: 99;
        width: 330px;
        height: 100px;
        text-align: center;
    }

    .text-swiper > p:nth-child(1) {
        font-size: 20px;
        font-weight: bold;
    }

    .text-swiper > p:nth-child(2) {
        margin-top: 20px;
    }
    .titile{
        font-size: 30px;
        font-weight: bold;
    }
    .module4-box>p:nth-child(2){
         margin-top: 80px;
     }
    .details{
        color: #fff;
        display: block;
        width: 150px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        border: 1px solid #fff;
        border-radius: 40px;
        box-shadow: 1px 1px 5px #777;
    }
    .details:hover{
        background: red;
        border: none;
        border: 1px solid rgba(0,0,0,0);
    }
    .mover{
        width: 100%;
    }
    .mover>ul{
        display: flex;
    }
    .mover>ul>li{
        margin-right: 120px;
        width: 100px;
    }
    .guide{
        margin-top: 100px;
    }
</style>