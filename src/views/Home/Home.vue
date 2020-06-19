<template>
    <div class="home">
        <div class="module1">
            <el-carousel trigger="click" height="600px">
                <el-carousel-item v-for="item in 4" :key="item">
                    <img src="../../assets/img/yy.jpg" alt="">
                </el-carousel-item>
            </el-carousel>
        </div>
        <myTitle
                :title="{name:'精品项目'}"
                :english="{name:'project'}"
        />
        <div class="back1" style="background-image: url(http://www.zhengye.citic:80/static/images/front_1/img/img33.jpg)">
            <div class="module3">
                <el-carousel :interval="4000" type="card" height="300px">
                    <el-carousel-item v-for="item in 6" :key="item">
                        <img src="../../assets/img/aa.jpg" alt="">
                    </el-carousel-item>
                </el-carousel>
            </div>
        </div>
        <myTitle
                :title="{name:'优质的服务'}"
                :english="{name:'service'}"
        />
        <div class="module2">
            <img :src="image" alt="">
            <div class="module2-box">
                <p class="titile">可立刻有限公司</p>
                <p>描述说分手快发货IFFif必胜法宝司法部客服部覅社保费死不死啊腐败干部阿古柏卡不过iabib</p>
                <p class="top">描述说分手快发货IFFif必胜法宝司法部客服部覅社保费死不死啊腐败干部阿古柏卡不过iabib</p>
                <p class="top">描述说分手快发货IFFif必胜法宝司法部客服部覅社保费死不死啊腐败干部阿古柏卡不过iabib</p>
                <div class="mover">
                    <ul>
                        <li @mouseenter="guide(1, 'hover')" @mouseleave="guide(1, 'hover')">
                            <img src="../../assets/img/fang.gif" alt="">
                            <p class="guide">专卖服务</p>
                        </li>
                        <li @mouseenter="guide(2, 'hover')" @mouseleave="guide(2, 'hover')">
                            <img src="../../assets/img/ma.gif" alt="">
                            <p class="guide">专卖服务</p>
                        </li>
                        <li @mouseenter="guide(3, 'hover')" @mouseleave="guide(3, 'hover')">
                            <img src="../../assets/img/fuwu.gif" alt="">
                            <p class="guide">专卖服务</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <myTitle
                :title="{name:'合作伙伴'}"
                :english="{name:'partners'}"
        />
        <div class="partners">
            <ul>
                <li><img src="http://resources.jsmo.xin/templates/upload/11870/201812/1545114059287.jpg" alt=""></li>
                <li><img src=" http://resources.jsmo.xin/templates/upload/11870/201809/1537258690312.jpg" alt=""></li>
                <li><img src=" http://resources.jsmo.xin/templates/upload/11870/201809/1537256957686.jpg" alt=""></li>
                <li><img src=" http://resources.jsmo.xin/templates/upload/11870/201809/1537258690312.jpg" alt=""></li>
                <li><img src=" http://resources.jsmo.xin/templates/upload/11870/201809/1537258690312.jpg" alt=""></li>
                <li><img src=" http://resources.jsmo.xin/templates/upload/11870/201809/1537256957686.jpg" alt=""></li>
                <li><img src=" http://resources.jsmo.xin/templates/upload/11870/201809/1537258690312.jpg" alt=""></li>
                <li><img src=" http://resources.jsmo.xin/templates/upload/11870/201809/1537257124675.jpg" alt=""></li>
                <li><img src=" http://resources.jsmo.xin/templates/upload/11870/201809/1537258690312.jpg" alt=""></li>
                <li><img src=" http://resources.jsmo.xin/templates/upload/11870/201809/1537258690312.jpg" alt=""></li>
                <li><img src=" http://resources.jsmo.xin/templates/upload/11870/201809/1537258690312.jpg" alt=""></li>
                <li><img src=" http://resources.jsmo.xin/templates/upload/11870/201809/1537257035303.jpg" alt=""></li>
            </ul>
        </div>
        <div class="news">
            <myTitle
                    :title="{name:'新闻动态'}"
                    :english="{name:'news'}"
            />
           <div class="news-box">
               <dl>
                   <dt>
                       <img src="http://resources.jsmo.xin/templates/upload/11870/201912/1577782694319.jpg" alt="">
                       <p class="time">2019-12-31</p>
                   </dt>
                   <dd>
                       <p>上海国际设计周最新主视觉形象出炉:设计的72变</p>
                       <div class="border-yi">
                           <div class="border-er"></div>
                       </div>
                       <p>2019上海国际设计周·中国设计师嘉年华将于12月16日至17日在上海新国际博览中心(SNIEC)举行，主视觉形象设计已新鲜出炉。</p>
                   </dd>
               </dl>
               <dl>
                   <dt>
                       <img src="http://resources.jsmo.xin/templates/upload/11870/201912/1577240016115.jpg" alt="">
                       <p class="time">2019-12-31</p>
                   </dt>
                   <dd>
                       <p>上海国际设计周最新主视觉形象出炉:设计的72变</p>
                       <div class="border-yi">
                           <div class="border-er"></div>
                       </div>
                       <p>2019上海国际设计周·中国设计师嘉年华将于12月16日至17日在上海新国际博览中心(SNIEC)举行，主视觉形象设计已新鲜出炉。</p>
                   </dd>
               </dl>
               <dl>
                   <dt>
                       <img src="http://resources.jsmo.xin/templates/upload/11870/201912/1577239250847.jpg" alt="">
                       <p class="time">2019-12-31</p>
                   </dt>
                   <dd>
                       <p>上海国际设计周最新主视觉形象出炉:设计的72变</p>
                       <div class="border-yi">
                           <div class="border-er"></div>
                       </div>
                       <p>2019上海国际设计周·中国设计师嘉年华将于12月16日至17日在上海新国际博览中心(SNIEC)举行，主视觉形象设计已新鲜出炉。</p>
                   </dd>
               </dl>
           </div>
        </div>
    </div>
</template>

<script>
    import  myTitle from '../../components/Pub/Caption/Caption'
    export default {
        name: "home",
        data(){
            return{
                image:require('../../assets/img/cc.jpg'),
            }
        },
        components:{
            myTitle
        },
        methods:{
            guide(val){
                if(val===1){
                    this.image=require('../../assets/img/cc.jpg');
                    return false;
                }else  if(val===2){
                    this.image=require('../../assets/img/bb.jpg');
                    return false;
                }else  if(val===3){
                    this.image=require('../../assets/img/aa.jpg');
                    return false;
                }
            },
            handleScroll(){
                var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                console.log(parseInt(scrollTop))
            }
        },
        mounted(){
            window.addEventListener('scroll',this.handleScroll,true)
        },
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
        margin: 0 auto;
        position: relative;

    }
    .module2> img {
        width: 100%;
        height: 800px;
    }
    .module3 {
        width: 1200px;
        margin: 0 auto;
    }
    .module3>>>.el-carousel__arrow{
        display: none !important;
    }

    .module2-box{
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
    .module2-box>.titile{
        font-size: 30px;
        font-weight: bold;
    }
    .module2-box>p:nth-child(2){
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
    .partners{
        width: 1200px;
        margin: 0 auto;
        padding-bottom: 60px;
    }
    .partners>ul{
        display: flex;
        flex-flow: wrap;
        justify-content: space-between;
    }
    .partners>ul>li{
        width: 178px;
        height: 89px;
    }
    .partners>ul>li>img{
        width: 100%;
    }
    .news{
        width: 100%;
        background: #F7F7F7;
        height: 700px;
    }
    .news-box{
        width: 1200px;
        margin: 0 auto;
        height: 700px;
        display: flex;
        justify-content: space-between;
    }
    .news-box>dl{
        width: 380px;
        height: 430px;
        background: #FFFFFF;
    }
    .news-box>dl>dt{
        width: 100%;
        height: 213px;
        position: relative;
    }
    .news-box>dl>dt>img{
        width: 100%;
        height: 213px;
    }
    .news-box>dl>dt>p{
        position: absolute;
        bottom: 0;
        left: 0;
        padding: 10px;
        background: #fff;
        font-size: 12px;
        color: #939393;
    }
    .news-box>dl>dd{
        padding: 38px;
    }
    .news-box>dl>dd>p:nth-child(1){
        width: 100%;
        color: #232323;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
    }
    .border-yi{
        width: 100%;
        height: 1px;
        background: #dbdbdb;
        margin: 20px 0;
        position: relative;
    }
    .border-er{
        position: absolute;
        top: 0;
        width: 0;
        height: 1px;
        background: #232323;
    }
    .news-box>dl:hover .border-er{
        animation:myfirst 3s;
    }
    @keyframes myfirst
    {
        from {width: 0;}
        to {width: 100%;}
    }
    .news-box>dl>dd>p:nth-child(3){
        font-size: 13px;
        color: #939393;
        overflow: hidden;
        line-height: 26px;
    }
    .back1{
        width: 100%;
        padding: 60px 0;
    }
    /*.mover>ul>li:hover>.module2>img{*/
    /*    animation: myfirst 5s;*/
    /*}*/
    /*@keyframes myfirst*/
    /*{*/
    /*    from {*/
    /*        transition: opacity .5s;*/
    /*    }*/
    /*    to {*/
    /*        opacity:0.5;*/
    /*    }*/
    /*}*/

</style>
