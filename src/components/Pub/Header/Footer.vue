/**
* @Description: 底部组件
* @author ZhiYuanWang
* @date 2020/6/15 12:53
*/
<template>
    <div class="footer">
        <div class="footer-box">
            <div class="footer-right">
                <div class="right-top">
                    <a href="javascript:;">联系我们</a> | <a href="javascript:;">全国网点</a> | <a href="javascript:;">关于我们</a>
                </div>
                <div class="right-bootom">
                    <p>版权所有 © 1999-2018 北京中企网动力数码科技有限公司 (简称：中企动力) Copyright © 1999-2018 300.cn All Rights Reserved</p>
                    <p>京公网安备11030102010293号 京ICP证010249-2</p>
                    <p>地址：北京市经济技术开发区地盛西路1号 数码庄园A2座</p>
                </div>
            </div>
            <div class="footer-left">
                <div class="mobile">
                    <img src="//s.300.cn/v2.0/home/images/special/co/qr-1.png" alt="">
                    <p>进入手机版</p>
                </div>
                <div class="official">
                    <img src="//s.300.cn/v2.0/home/images/special/co/qr-2.png" alt="">
                    <p>进入公众号</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {}
</script>

<style scoped lang="stylus">
    .footer {
        width: 100%;
        height: 230px;
        background-color: #eee;
        display: flex;
        align-items: center;
    }

    .footer-box {
        width: 1200px;
        margin 0 auto;
        display: flex;
    }

    .footer-right {
        margin-right :100px;
    }

    .footer-left {
        display: flex;
    }
    .right-bootom{
        margin-top :30px;
    }
    .right-bootom>p{
        color: #999;
        line-height: 22px;
        font-size :12px;
    }
    .right-top {
        font-size: 14px;
        color: #666;
    }

    .right-top > a {
        color: #666;
    }

    .right-top > a:hover {
        color: #0891ff;
    }
    .mobile{
        margin-right :80px;
        text-align :center;
        color: #666;
        margin-top: 5px;
        font-size: 14px;
    }
    .official{
        text-align :center;
        color: #666;
        margin-top: 5px;
        font-size: 14px;
    }

</style>