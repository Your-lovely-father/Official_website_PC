<template>
    <div class="honor">
        <img src="../../assets/img/about.jpg" alt="">
        <div class="safeguard">
            <div class="safeguard-text">
                <p class="title">实力有保障</p>
                <p class="describe">选我们，选放心</p>
            </div>
            <div class="safeguard-image">
               <div class="image-box">
                   <img src="../../assets/img/p9.png" alt="">
                   <p>消费吧消费吧</p>
               </div>
                <div class="image-box">
                    <img src="../../assets/img/p9.png" alt="">
                    <p>消费吧消费吧</p>
                </div>
                <div class="image-box">
                    <img src="../../assets/img/p9.png" alt="">
                    <p>消费吧消费吧</p>
                </div>
                <div class="image-box">
                    <img src="../../assets/img/p9.png" alt="">
                    <p>消费吧消费吧</p>
                </div>
                <div class="image-box">
                    <img src="../../assets/img/p9.png" alt="">
                    <p>消费吧消费吧</p>
                </div>
                <div class="image-box">
                    <img src="../../assets/img/p9.png" alt="">
                    <p>消费吧消费吧</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Honor"
    }
</script>

<style scoped>
    .honor {
        width: 100%;
    }

    .honor > img {
        width: 100%;
    }
    .safeguard{
        width: 1200px;
        margin: 0 auto;
        margin-top: 60px;
    }
    .safeguard-text{
        width: 100%;
        text-align: center;
    }
    .title{
        font-weight: bold;
        font-size: 30px;
    }
    .describe{
        font-size: 14px;
        color: #a7a7a7;
        margin-top: 10px;
    }
    .safeguard-image{
        width: 100%;
        margin-top: 60px;
        margin-bottom: 60px;
        display: flex;
        justify-content: space-between;
        flex-flow: wrap;
    }
    .image-box{
        width: 325px;
        text-align: center;
    }
    .image-box>p{
        color: #333;
        line-height: 60px;
    }
</style>
