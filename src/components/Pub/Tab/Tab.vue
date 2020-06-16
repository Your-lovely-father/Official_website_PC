/**
* @Description: 页签组件
* @author ZhiYuanWang
* @date 2020/6/15 17:33
*/
<template>
    <div class="comp-topnav-container">
        <div class="link__wrap">
            <router-link :to="root.root">{{root.name}}</router-link>
            <span>&gt;</span>
            <router-link :to="link.link">{{link.name}}</router-link>
        </div>
    </div>
</template>

<script>

    export default {
        components: {},
        props: ['root', 'link'],


    }
</script>

<style scoped lang="stylus">
    .link__wrap{
        line-height :80px;
    }
    a {
        color: #FFFFFF;
    }

    span {
        color: #fc6666;
    }
</style>