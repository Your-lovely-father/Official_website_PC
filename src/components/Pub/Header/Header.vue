/**
* @Description:
* @author ZhiYuanWang
* @date 2020/6/15 13:07
*/
<template>
    <div class="header">
        <div class="logo">
            <a href="javascript:;">
                <img src="../../../assets/img/logo1.png" alt="" class="img">
            </a>
        </div>
        <ul class="nav-list__wrap">
            <li v-for="(item, index) in navList"
                :key="index"
                class="hove"
                @mouseover="toOver(index)"
                @mouseleave="toLeave(index)">
                <router-link :disabled="item.disable" :to="item.link">{{ item.name }}</router-link>
                <ul v-if="item.list && showItem == index"
                    @mouseover="toOverList"
                    @mouseleave="toLeaveList">
                    <li v-for="(_item, _index) in item.list" :key="_index">
                        <router-link :to="_item.link">{{ _item.name }}</router-link>
                    </li>
                </ul>
            </li>
        </ul>
        <div class="linkman">
            <div class="QQ">
                <a href="javascript:;" class="qq_box">
                    <p class="qq">
                        <img src="../../../assets/img/qq.gif" alt="">
                    </p>
                    <p>QQ</p>
                </a>
            </div>
            <div class="phone">
                <div class="phone_img">
                    <img src="../../../assets/img/phone.gif" alt="">
                </div>
                <div class="phone_content">
                    <p><span>售前</span> : <span>400-602-8066</span></p>
                    <p><span>售后</span> : <span>400-602-8066</span></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import Api from '../../../api/nav/nav'

    export default {
        name: '',
        data() {
            return {
                navList: [
                    {
                        link: '/',
                        name: '首页'
                    }, {
                        link: '/advantage',
                        name: '平台优势',
                        // list: [
                        //   {
                        //     link: '404',
                        //     name: '0000'
                        //   },{
                        //     link: '404',
                        //     name: '555'
                        //   }
                        // ]
                    },
                    {
                        link: '/honor',
                        name: '企业荣誉'
                    },
                    {
                        link: '/league',
                        name: '招商加盟'
                    },
                    {
                        link: '/product',
                        name: '产品与案例'
                    },
                    {
                        link: '/contact',
                        name: '联系我们'
                    },
                    {
                        link: '/about',
                        name: '关于我们'
                    },
                ],
                showItem: null,
                timer: null,
                home:''
            }
        },

        computed: {
            ...mapState({
                currentRoute: state => state.currentRoute
            })
        },

        methods: {
            // 鼠标移入
            toOver(index) {
                clearTimeout(this.timer);
                this.showItem = index;
            },
            // 鼠标移出
            toLeave() {
                this.timer = setTimeout(() => {
                    this.showItem = null;
                }, 1000)
            },
            /**
             * 二级列表
             * 鼠标移入
             * 清除定时器
             */
            toOverList() {
                clearTimeout(this.timer);
            },
            toLeaveList() {
                this.timer = setTimeout(() => {
                    this.showItem = null;
                }, 500)
            },
            getNav() {
                Api.getNav().then(res => {
                    console.log(res)
                    // this.navList[0].name=res.data.data[0].name,
                    // this.navList[1].name=res.data.data[1].name,
                    // this.navList[2].name=res.data.data[2].name,
                    // this.navList[3].name=res.data.data[3].name,
                    // this.navList[4].name=res.data.data[4].name,
                    // this.navList[5].name=res.data.data[5].name,
                    // this.navList[6].name=res.data.data[6].name
                })
            }
        },

        mounted() {
            this.getNav()
        }
    }
</script>

<style scoped lang="stylus">
    .header {
        height: 70px;
        border-bottom: 1px solid rgba(255, 255, 255, .2);
        width: 100%;
        min-width: 1380px;
        z-index: 100;
        background-color: rgba(4, 14, 53, .8)
        display: flex;
        align-items: center;
        justify-content: space-around;
    }

    .hove:hover {
        border-bottom: 2px solid #FFFFFF;
    }

    .hove {
        border-bottom: 2px solid rgba(0, 0, 0, 0, 0);
        margin-right: 50px;
        padding 0 10px 0 10px;
    }

    .linkman {
        display: flex;
        color #FFFFFF;
    }

    .QQ {
        margin-right 30px;
    }

    .qq_box {
        color #FFFFFF;
        display: block;
        display: flex;
        height: 43px;
        align-items: center;
    }

    .qq {
        margin-right: 10px;
    }

    .phone {
        display: flex;
    }

    .phone_img {
        margin-right: 10px;
        margin-top: 5px;
    }

    .logo {
        width: 154px;
        height: 34px
    }

    .img {
        width: 100%;
        margin-top: -10px;
    }

    .nav-list__wrap
        display flex
        justify-content space-between

    & > li
        position relative
        line-height 70px

        & > a
            color #FFF

        ul
            position absolute
            top 70px
            left 50%
            transform translateX(-50%)
            z-index 10
            background #FFF
            width 100%
            min-width 169px
            border-radius 4px
            padding 4px 0

            & > li
                & > a
                    line-height 42px
                    text-align center
                    display block
                    color #333

                &:hover
                    background-color: rgba(4, 14, 53, 0.8);

                    & > a
                        color #FFF
</style>
