<template>
    <div class="contact">
        <div class="contact-box">
            <div class="tab">
<!--                <myTopNav-->
<!--                        :root="{name: '首页', root: '/'}"-->
<!--                        :link="{name: '联系我们', link: '/contact'}"-->
<!--                />-->
            </div>
            <div class="contact-content">
                <p>辽宁大连可立刻有限公司</p>
                <ul>
                    <li><span class="el-icon-location-outline"></span> <span class="span1">地址:浙江省宁波市杭州湾新区滨海六路28号</span>
                    </li>
                    <li><span class="el-icon-phone-outline"></span> <span class="span1">电话:4000-315-666</span></li>
                    <li><span class="el-icon-position"></span> <span class="span1">邮箱:FOTILE_borcci@borcci.com</span>
                    </li>
                    <li><span class="el-icon-position"></span> <span class="span1">邮编:315336</span></li>
                </ul>
                <div class="wechat-box">
                    <div class="qrdode" ref="flag">
                        <img src="//s.300.cn/v2.0/home/images/special/co/qr-2.png" alt="">
                    </div>
                    <div class="wechat" @mouseenter="enters()" @mouseleave="leaver()">
                        <p class="el-icon-s-custom"></p>
                        <p>微信官方</p>
                    </div>
                </div>
            </div>
            <div class="footer"></div>
        </div>
    </div>
</template>

<script>
    // import myTopNav from "../../components/Pub/Tab/Tab"

    export default {
        name: "contact",
        components: {
            // myTopNav
        },
        data(){
            return{
            }
        },
        methods:{
            enters(){
                this.$refs.flag.style.visibility='visible'
            },
            leaver(){
                this.$refs.flag.style.visibility='hidden'
            },
        }
    }
</script>

<style scoped>
    .contact {
        width: 100%;
        background-image: url("https://www.borcci.com/static/images/front/cantect_bg.jpg");
    }

    .contact-box {
        width: 1200px;
        margin: 0 auto;
    }

    .tab {
        padding-top: 130px;
    }

    .contact-content {
        border-radius: 20px;
        background: rgba(255, 255, 255, 0.9);
        padding: 40px 30px;
        position: relative;
        height: 330px;
    }
    .footer{
        padding-bottom: 130px;
    }
    .contact-content > p {
        color: #d0000e;
        font-size: 24px;
    }

    ul {
        margin-top: 50px;
    }

    ul > li {
        margin-bottom: 15px;
    }

    .span1 {
        color: #303030;
        font-size: 16px;
    }
    .wechat-box{
        width: 127px;
        margin-top: 50px;
        position: absolute;
        top: 140px;
    }
    .wechat{
        text-align: center;
    }
    .el-icon-s-custom{
        font-size: 30px;
    }
    .wechat:hover{
        color: red;
    }
    .qrdode{
        visibility:hidden;
    }
</style>
