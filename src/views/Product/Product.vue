<template>
    <div class="product">
        <div class="solution">
            <img src="../../assets/img/aa.jpg" alt="">
            <div class="solution-box">
                <div class="box">
                    <p>产品与解决方案</p>
                    <p>
                        现代化的社会发展过程中，对人们对舒适的建筑热环境的追求越来越高，导致建筑采暖和空调的能耗日益增长，对节能环保的呼声也日益提高。与此同时，越来越多的企业也开始逐渐意识到对节能环保和可持续发展的战略投资，将会对企业发展带来的经济效益和社会效益，从而将目光投向更有发展前景的清洁能源领域。我们将致力于为企业用户和个人用户提供薄膜太阳能产品和服务，满足您的个性化需求。
                    </p>
                    <div class="box-nav">
                        <ul>
                            <li>
                                <span class="el-icon-office-building"></span>
                                <span>建筑</span>
                            </li>
                            <li>
                                <span class="el-icon-truck"></span>
                                <span>交通</span>
                            </li>
                            <li>
                                <span class="el-icon-sunrise"></span>
                                <span>设施</span>
                            </li>
                            <li>
                                <span class="el-icon-data-line"></span>
                                <span>应急</span>
                            </li>
                            <li>
                                <span class="el-icon-cpu"></span>
                                <span>电子</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="centre">
            <div class="centre-text">
                <p class="case">案例中心</p>
                <p class="case-describe">
                    社会发展过程中，人们对舒适的建筑热环境的追求越来越高，导致建筑采暖和空调的能耗日益增长，对节能环保的呼声也日益提高。与此同时，越来越多的企业也开始逐渐意识到对节能环保和可持续发展的战略投资，将会对企业发展带来的经济效益和社会效益，从而将目光投向更有发展前景的清洁能源领域。
                </p>
            </div>
            <div class="exhibition">
                <div class="exhibition-box">
                    <img src="../../assets/img/case1.png" alt="">
                    <p>广汽本田17MW分布式光伏发电项目</p>
                </div>
                <div class="exhibition-box">
                    <img src="../../assets/img/case2.png" alt="">
                    <p>广汽本田17MW分布式光伏发电项目</p>
                </div>
                <div class="exhibition-box">
                    <img src="../../assets/img/case3.png" alt="">
                    <p>广汽本田17MW分布式光伏发电项目</p>
                </div>
                <div class="exhibition-box">
                    <img src="../../assets/img/case1.png" alt="">
                    <p>广汽本田17MW分布式光伏发电项目</p>
                </div>
                <div class="exhibition-box">
                    <img src="../../assets/img/case2.png" alt="">
                    <p>广汽本田17MW分布式光伏发电项目</p>
                </div>
                <div class="exhibition-box">
                    <img src="../../assets/img/case3.png" alt="">
                    <p>广汽本田17MW分布式光伏发电项目</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Product"
    }
</script>

<style scoped>
    .product {
        width: 100%;
    }

    .solution {
        width: 100%;
        height: 570px;
        position: relative;
    }

    .solution > img {
        width: 100%;
        height: 570px;
    }

    .solution-box {
        width: 100%;
        height: 570px;
        background: rgba(0, 0, 0, 0.4);
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 2;
    }

    .box {
        width: 1200px;
        margin: 0 auto;
        color: #FFFFFF;
    }

    .box > p:nth-child(1) {
        font-size: 36px;
        margin-top: 85px;
    }

    .box > p:nth-child(2) {
        width: 820px;
        line-height: 30px;
        margin-top: 30px;
    }

    .box-nav {
        width: 100%;
        margin-top: 150px;
    }

    .box-nav > ul {
        display: flex;
    }

    .box-nav > ul > li {
        display: flex;
        margin-left: 1px;
        width: 220px;
        height: 60px;
        background: rgba(0, 0, 0, 0.2);
        align-items: center;
        justify-content: center;
    }

    .box-nav > ul > li > span {
        display: flex;
    }

    .box-nav > ul > li > span:nth-child(1) {
        font-size: 24px;
    }

    .box-nav > ul > li > span:nth-child(2) {
        font-size: 24px;
        margin-left: 15px;
    }

    .box-nav > ul > li:hover {
        background: black;
    }

    .centre {
        width: 100%;
        height: 800px;
        background: url('../../assets/img/baiyun.jpg') no-repeat;
        background-size: 100% 100%;
        padding: 100px 0;
    }

    .centre-text {
        width: 100%;
        text-align: center;
    }

    .case {
        font-size: 36px;
        font-weight: normal;
        margin-bottom: 30px;
    }

    .case-describe {
        text-align: center;
        width: 805px;
        color: #797979;
        line-height: 26px;
        margin: 0 auto;

    }

    .exhibition {
        width: 1200px;
        margin: 0 auto;
        margin-top: 100px;
        display: flex;
        justify-content: space-between;
        flex-flow: wrap;
    }

    .exhibition-box {
        width: 370px;
        text-align: center;
        position: relative;
        margin-bottom: 40px;
    }

    .exhibition-box > img {
        width: 100%;
    }

    .exhibition-box > p {
        width: 100%;
        height: 44px;
        line-height: 44px;
        height: auto;
        background: rgba(0, 0, 0, 0.5);
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        color: #FFFFFF;
    }
</style>