<template>
    <div class="home">
        <div class="module1">
            <video src="/uploadFiles/file/20200326/4a8ae83a91334310b56593b830745b36.mp4"
                   poster="../../assets/img/yy.jpg"
                   class="video"></video>
        </div>
        <div class="module2">
            <el-carousel indicator-position="outside" height="717px">
                <el-carousel-item v-for="item in 4" :key="item">
                    <transition name="slide-fade">
                        <img src="../../assets/img/aa.jpg" alt="">
                    </transition>
                    <transition name="slide-fade">
                        <div class="location">
                            <p class="p1">可立刻有限公司</p>
                            <p class="p2">从吃什么到怎么吃，从小酌怡情到合家团圆，从产品到背后蕴藏的文化、情怀、格调、趣味，柏厨，更懂中国人的厨房文化追求。</p>
                        </div>
                    </transition>
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="module3">
            <img src="../../assets/img/cc.jpg" alt="">
            <div class="module3-box">
                <p class="titile">可立刻有限公司</p>
                <p>描述说分手快发货IFFif必胜法宝司法部客服部覅社保费死不死啊腐败干部阿古柏卡不过iabib</p>
                <p class="top">描述说分手快发货IFFif必胜法宝司法部客服部覅社保费死不死啊腐败干部阿古柏卡不过iabib</p>
                <p class="top">描述说分手快发货IFFif必胜法宝司法部客服部覅社保费死不死啊腐败干部阿古柏卡不过iabib</p>
                <div class="mover">
                    <ul>
                        <li>
                            <img src="../../assets/img/fang.gif" alt="">
                            <p class="guide">专卖服务</p>
                        </li>
                        <li>
                            <img src="../../assets/img/ma.gif" alt="">
                            <p class="guide">专卖服务</p>
                        </li>
                        <li>
                            <img src="../../assets/img/fuwu.gif" alt="">
                            <p class="guide">专卖服务</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="module4">
            <el-carousel :interval="4000" type="card" height="717px">
                <el-carousel-item v-for="item in 6" :key="item">
                    <img src="../../assets/img/aa.jpg" alt="">
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>
</template>

<script>
    export default {
        name: "home",
        data(){
            return{
                show: true
            }
        }
    }
</script>

<style scoped>
    .home {
        width: 100%;
    }

    .module1 {
        width: 100%;
    }

    .module2 {
        width: 100%;
        position: relative;
    }

    .location {
        position: absolute;
        top: 150px;
        left: 100px;
        width: 570px;
    }

    .p1 {
        font-size: 40px;
        font-weight: bold;
    }

    .p2 {
        margin-top: 30px;
        color: #333;
        line-height: 26px;
    }

    .module3 {
        width: 100%;
        position: relative;

    }

    .module4 {
        width: 100%;
    }

    .video {
        width: 100%;
    }

    .slide-fade-enter-active {
        transition: all .3s ease;
    }

    .slide-fade-leave-active {
        transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }

    .slide-fade-enter, .slide-fade-leave-to
        /* .slide-fade-leave-active for below version 2.1.8 */
    {
        transform: translateX(10px);
        opacity: 0;
    }
    .module3> img {
        width: 100%;
    }
    .module3-box{
        color: #fff;
        position: absolute;
        top: 120px;
        left: 130px;
        width: 490px;
        height: 450px;
        padding: 70px 60px 50px;
        background: rgba(0,0,0,0.4);
        border-radius: 50px;
        z-index: 99;
    }
    .module3-box>.titile{
        font-size: 30px;
        font-weight: bold;
    }
    .module3-box>p:nth-child(2){
        margin-top: 50px;
        line-height: 26px;
    }
    .top{
        margin-top: 20px;
    }
    .mover{
        width: 100%;
        margin-top: 60px;
    }
    .mover>ul{
        display: flex;
        justify-content: space-between;
    }
    .mover>ul>li{
        width: 72px;
    }
    .mover>ul>li>img{
        width: 72px;
        height: 63.74px;
        margin: 0 auto;
    }
    .guide{
        margin-top: 15px;
        font-size: 18px;
    }
</style>
