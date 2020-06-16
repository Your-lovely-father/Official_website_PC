<template>
    <div class="league">
        <div class="condition">
            <div class="condition-img">
                <img src="../../assets/img/ren.png" alt="">
            </div>
            <div class="condition-text-box">
                <div class="title">
                    <p class="el-icon-user-solid"></p>
                    <p class="title-text">加盟条件</p>
                </div>
                <div class="condition-text">
                    <div class="text-box">
                        <p></p>
                        <p>愿全心全力投入柏厨事业的发展</p>
                    </div>
                    <div class="text-box">
                        <p></p>
                        <p>具有较强的营销管理及市场运作能力，能组建优秀的经营管理团队</p>
                    </div>
                    <div class="text-box">
                        <p></p>
                        <p>愿全心全力投入柏厨事业的发展</p>
                    </div>
                    <div class="text-box">
                        <p></p>
                        <p>熟悉当地市场，有良好而广泛的当地社会关系和行业资源尤佳</p>
                    </div>
                    <div class="text-box">
                        <p></p>
                        <p>愿全心全力投入柏厨事业的发展</p>
                    </div>
                    <div class="text-box">
                        <p></p>
                        <p>深入了解并认同柏厨企业文化价值观、商业理念和经营管理模式</p>
                    </div>
                    <div class="text-box">
                        <p></p>
                        <p>具有与目标城市相匹配的资金实力，有良好的资金信用</p>
                    </div>
                    <div class="text-box">
                        <p></p>
                        <p>经销目标城市经济发展较好、投资环境良好</p>
                    </div>

                </div>
            </div>
        </div>
        <div class="flow">
            <div class="title">
                <p class="el-icon-share"></p>
                <p class="text-jiameng">加盟流程</p>
            </div>
            <img src="../../assets/img/flow1.png" alt="">
        </div>
        <div class="region">
            <div class="region-left">
                <img src="../../assets/img/map.png" alt="">
            </div>
            <div class="region-right">
                <div class="title">
                    <p class="el-icon-map-location"></p>
                    <p>招商区域</p>
                </div>
                <div class="phone">
                    <div class="hq">
                        <p class="el-icon-phone-outline"></p>
                        <p class="dianhua">总部服务热线：<em>4000-315-666</em></p>
                    </div>
                    <div class="retail">
                        <p class="el-icon-phone-outline"></p>
                        <p class="dianhua">零售财富热线：：<em>4000-315-666</em></p>
                    </div>
                </div>
                <div class="principal">
                    <div class="north">
                        <p>
                            <span>北区</span>
                            <span class="span1">负责人</span>:
                            <span class="p1">张经理</span>
                        </p>
                        <p>
                            <span>联系方式</span>:
                            <span class="p1">15942999934</span>
                        </p>
                    </div>
                    <div class="north austral">
                        <p>
                            <span>南区</span>
                            <span class="span1">负责人</span>:
                            <span class="p1">张经理</span>
                        </p>
                        <p>
                            <span>联系方式</span>:
                            <span class="p1">15942999934</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="apply">
            <div class="apply-box">
                <div class="box-title">
                    <p class="el-icon-document"></p>
                    <p>申请加盟</p>
                </div>
                <div class="box">
                    <div class="apply-box-left">
                        <div class="contact">
                            <p class="unify">
                                <label>
                                    <em class="must">*</em>
                                    联系人
                                </label>
                                <el-input v-model="input" placeholder="请输入内容"
                                          style="display: block;width: 350px"></el-input>
                                <span style="display: block" class="must">必点字段</span>
                            </p>
                            <p style="margin-left: 15px" class="unify">
                                <label>
                                    <em class="must">*</em>
                                    联系电话
                                </label>
                                <el-input v-model="input" placeholder="请输入内容"
                                          style="display: block;width: 350px"></el-input>
                                <span style="display: block" class="must">必点字段</span>
                            </p>
                        </div>
                        <div class="diqu">
                            <p>
                                <label>
                                    <em class="must">*</em>
                                    地区
                                </label>
                            </p>
                            <div class="select">
                                <el-select v-model="value" placeholder="请选择" style="display: block;width: 229px">
                                    <el-option
                                            v-for="item in options"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                    </el-option>
                                </el-select>
                                <el-select v-model="value" placeholder="请选择"
                                           style="display: block;width: 229px;margin-left: 15px">
                                    <el-option
                                            v-for="item in options"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                    </el-option>
                                </el-select>
                                <el-select v-model="value" placeholder="请选择"
                                           style="display: block;width: 229px;margin-left: 15px">
                                    <el-option
                                            v-for="item in options"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                    </el-option>
                                </el-select>
                            </div>
                        </div>
                        <div class="remarks">
                            <p>
                                <label>
                                    备注
                                </label>
                            </p>
                            <el-input
                                    type="textarea"
                                    :rows="2"
                                    placeholder="请输入内容"
                                    v-model="textarea" style="width: 717px;">
                            </el-input>
                        </div>
                        <div class="btn">
                            <el-button type="primary" style="width: 190px;height: 40px;background:#d34c56;outline: none;border: none">提交</el-button>
                        </div>
                    </div>
                    <div class="apply-box-right">
                        <p class="title">已经加盟<span>877</span>家</p>
                        <div class="border-content">
                            <ul>
                                <li>
                                    <p></p>
                                    <p>成**</p>
                                    <p>沈阳铁西</p>
                                </li>
                                <li>
                                    <p></p>
                                    <p>成**</p>
                                    <p>沈阳铁西</p>
                                </li>
                                <li>
                                    <p></p>
                                    <p>成**</p>
                                    <p>沈阳铁西</p>
                                </li>
                                <li>
                                    <p></p>
                                    <p>成**</p>
                                    <p>沈阳铁西</p>
                                </li>
                                <li>
                                    <p></p>
                                    <p>成**</p>
                                    <p>沈阳铁西</p>
                                </li>
                                <li>
                                    <p></p>
                                    <p>成**</p>
                                    <p>沈阳铁西</p>
                                </li>
                                <li>
                                    <p></p>
                                    <p>成**</p>
                                    <p>沈阳铁西</p>
                                </li>
                                <li>
                                    <p></p>
                                    <p>成**</p>
                                    <p>沈阳铁西</p>
                                </li>
                                <li>
                                    <p></p>
                                    <p>成**</p>
                                    <p>沈阳铁西</p>
                                </li>
                                <li>
                                    <p></p>
                                    <p>成**</p>
                                    <p>沈阳铁西</p>
                                </li>
                                <li>
                                    <p></p>
                                    <p>成**</p>
                                    <p>沈阳铁西</p>
                                </li>


                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "League",
        data() {
            return {
                options: [{
                    value: '选项1',
                    label: '黄金糕'
                }, {
                    value: '选项2',
                    label: '双皮奶'
                }, {
                    value: '选项3',
                    label: '蚵仔煎'
                }, {
                    value: '选项4',
                    label: '龙须面'
                }, {
                    value: '选项5',
                    label: '北京烤鸭'
                }],
                value: ''
            }
        }
    }
</script>

<style scoped>
    .league {
        width: 100%;
    }

    .condition {
        width: 100%;
        background: #eeeeee;
        display: flex;
        padding: 60px 0;
    }

    .condition-img {
        width: 700px;
    }

    .condition-img > img {
        width: 100%;
    }

    .condition-text-box {
        margin-left: 100px;
    }

    .title {
        display: flex;
        height: 40px;
        align-items: center;
    }

    .el-icon-user-solid {
        font-size: 35px;
        color: #d34c56;
    }

    .title-text {
        font-size: 30px;
        font-weight: bold;
        margin-left: 15px;
    }

    .condition-text {
        margin-top: 20px;
    }

    .text-box {
        display: flex;
        height: 24px;
        align-items: center;
        padding: 10px 0;
    }

    .text-box > p:nth-child(1) {
        width: 12px;
        height: 12px;
        border-radius: 100%;
        background: #d34c56;
        margin-right: 10px;
        margin-left: 5px;
    }

    .flow {
        width: 100%;
        margin-top: 5px;
    }

    .flow > img {
        width: 100%;
    }

    .flow > .title {
        width: 100%;
        background: #f6f6f6;
        display: flex;
        justify-content: center;
        padding: 60px 0 30px 0;
    }

    .el-icon-share {
        font-size: 35px;
        color: #d34c56;
    }

    .text-jiameng {
        font-size: 30px;
        font-weight: bold;
        margin-left: 15px;
    }

    .region {
        width: 100%;
        background: #f7f7f7;
        display: flex;
        padding-top: 60px;
        margin-top: -5px;
    }

    .region-right {
        margin-left: 80px;
    }

    .region-left {
        width: 717px;
        padding-left: 150px;
    }

    .region-left > img {
        width: 100%;
    }

    .region-right > .title > .el-icon-map-location {
        font-size: 35px;
        color: #d34c56;
    }

    .region-right > .title > p:nth-child(2) {
        font-size: 35px;
        color: #d34c56;
        margin-left: 15px;
    }

    .phone {
        margin-top: 40px;
    }

    .hq {
        display: flex;
        height: 35px;
        align-items: center;
    }

    .el-icon-phone-outline {
        font-size: 35px;
        color: #d34c56;
    }

    .retail {
        display: flex;
        height: 35px;
        align-items: center;
    }

    .el-icon-phone-outline {
        font-size: 35px;
        color: #d34c56;
    }

    .dianhua {
        font-size: 20px;
        margin-left: 15px;
    }

    .austral {
        margin-top: 20px;
    }

    .north {
        display: flex;
        font-size: 22px;
        font-weight: bold;
    }

    .span1 {
        margin-left: 30px;
    }

    .p1 {
        margin-left: 10px;
    }

    .principal {
        margin-top: 40px;
    }

    .apply {
        width: 100%;
    }

    .apply-box {
        width: 1200px;
        margin: 0 auto;
    }

    .box-title {
        width: 100%;
        height: 53px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 60px 0;
    }

    .el-icon-document {
        font-size: 35px;
        color: #d34c56;
    }

    .box-title > p:nth-child(2) {
        font-size: 40px;
        font-weight: bold;
        margin-left: 15px;
    }

    .box {
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-bottom: 60px;
    }

    .apply-box-left {
        width: 717px;
    }

    .apply-box-right {
        width: 400px;
    }

    .apply-box-right > .title {
        color: #d00217;
        font-size: 24px;
        width: 400px;
       display: flex;
        justify-content: center;
    }

    .border-content {
        width: 400px;
        border-radius: 8px;
        border: 1px solid #d00217;
        box-sizing: border-box;
        height: 490px;
        margin: 30px auto 0;
        padding: 30px;
    }

    .border-content > ul > li {
        display: flex;
        height: 20px;
        align-items: center;
        padding: 10px 0;
    }

    .border-content > ul > li > p:nth-child(1) {
        width: 12px;
        height: 12px;
        border-radius: 100%;
        background: #d34c56;
    }

    .border-content > ul > li > p:nth-child(2) {
        margin-left: 20px;
    }

    .border-content > ul > li > p:nth-child(3) {
        margin-left: 20px;
    }

    .contact {
        display: flex;
    }

    .must {
        color: #f00;
    }

    .select {
        display: flex;
    }

    .diqu {
        margin-top: 20px;
        line-height: 40px;
    }

    .remarks {
        line-height: 40px;
    }

    .unify {
        line-height: 40px;
    }

    .btn {
        width: 717px;
        text-align: center;
        margin-top: 100px;
    }
</style>
