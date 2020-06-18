<template>
    <div class="about">
        <img src="../../assets/img/about.jpg" alt="">
        <div class="describe">
            <p class="title">一站式知识产权专业服务，全程陪伴你服务企业持续成长</p>
          <div class="text-box">
              <p class="text">
                  大连企业可立刻陪您成长大连企业可立刻陪您成长大连企业可立刻陪您成长大连企业可立刻陪您成长
                  大连企业可立刻陪您成长大连企业可立刻陪您成长大连企业可立刻陪您成长大连企业可立刻陪您成长
                  大连企业可立刻陪您成长大连企业可立刻陪您成长大连企业可立刻陪您成长
              </p>
              <p class="text">
                  大连企业可立刻陪您成长大连企业可立刻陪您成长大连企业可立刻陪您成长大连企业可立刻陪您成长
                  大连企业可立刻陪您成长大连企业可立刻陪您成长大连企业可立刻陪您成长大连企业可立刻陪您成长
                  大连企业可立刻陪您成长大连企业可立刻陪您成长大连企业可立刻陪您成长
              </p>
              <p class="text">
                  大连企业可立刻陪您成长大连企业可立刻陪您成长大连企业可立刻陪您成长大连企业可立刻陪您成长
                  大连企业可立刻陪您成长大连企业可立刻陪您成长大连企业可立刻陪您成长大连企业可立刻陪您成长
                  大连企业可立刻陪您成长大连企业可立刻陪您成长大连企业可立刻陪您成长
              </p>
              <p class="text">
                  大连企业可立刻陪您成长大连企业可立刻陪您成长大连企业可立刻陪您成长大连企业可立刻陪您成长
                  大连企业可立刻陪您成长大连企业可立刻陪您成长大连企业可立刻陪您成长大连企业可立刻陪您成长
                  大连企业可立刻陪您成长大连企业可立刻陪您成长大连企业可立刻陪您成长
              </p>
          </div>
            <div class="footer">
                <div class="footer-box">
                    <img src="https://www.cfldcn.com/uploadfile/2018/0623/20180623032719343.jpg" alt="">
                    <div class="footer-text">
                        <p>我们的使命</p>
                        <p>打造产业新城，建设幸福城市，</p>
                        <p> 使所开发的区域经济发展、社会和谐、人民幸福</p>
                    </div>
                </div>
                <div class="footer-box">
                    <img src="https://www.cfldcn.com/uploadfile/2018/0623/20180623032924266.jpg" alt="">
                    <div class="footer-text">
                        <p>我们的愿景</p>
                        <p>致力于成为全球产业新城的引领者</p>
                        <p></p>
                    </div>
                </div>
                <div class="footer-box">
                    <img src="https://www.cfldcn.com/uploadfile/2018/0623/20180623033010925.jpg" alt="">
                    <div class="footer-text">
                        <p>核心价值观</p>
                        <p>正直 、激情、卓越、创新、包容、共赢</p>
                        <p></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "About"
    }
</script>

<style scoped>
    .about {
        width: 100%;
    }

    .about > img {
        width: 100%;
    }
    .describe{
        width: 1200px;
        margin: 0 auto;
        margin-top: 60px;
    }
    .title{
        width: 100%;
        text-align: center;
        font-weight: bold;
        font-size: 30px;
    }
    .text-box{
        margin-top: 30px;
    }
    .text{
        line-height: 40px;
        color: #333;
    }
    .footer{
        width: 1200px;
        margin: 0 auto;
        margin-top: 60px;
        display: flex;
        justify-content: space-between;
        margin-bottom: 60px;
    }
    .footer-box{
        width: 380px;
        overflow: hidden;
        position: relative;
    }
    .footer-box>img{
        width: 100%;
        cursor: pointer;
        transition: all 0.6s;
    }
    .footer-box>img:hover{
        transform: scale(1.4);
    }
    .footer-text{
        position: absolute;
        bottom: 30px;
        left: 30px;
        color: #FFFFFF;
    }
    .footer-text>p:nth-child(1){
        font-size: 20px;
        font-weight: bold;
    }
    .footer-text>p:nth-child(2){
        margin-top: 15px;
    }
    .footer-text>p:nth-child(3){
        margin-top: 5px;
    }
</style>
