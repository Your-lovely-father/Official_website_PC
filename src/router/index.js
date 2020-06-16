/*
 * @Descripttion:
 * @version:
 * @Date: 2020-04-08 12:00:06
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'
import store from '../store'

Vue.use(VueRouter)

const routes = [
    //--------------------------------------   首页    -------------------------------------
    // 首页
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    // 联系我们
    {
        path: '/contact',
        name: 'contact',
        component: () => import('../views/Contact/Contact.vue'),
    },
    //关于我们
    {
        path: '/about',
        name: 'about',
        component: () => import('../views/About/About.vue'),
    },
    //企业荣誉
    {
        path: '/honor',
        name: 'honor',
        component: () => import('../views/Honor/Honor.vue'),
    },
    //招商加盟
    {
        path: '/league',
        name: 'league',
        component: () => import('../views/League/League.vue'),
    },
    //---------------------------------------------------    4 0 4       ----------------------------------------------
    {
        path: "/404",
        name: "notFound",
        component: () => import('../views/Home/404.vue'),
        // FIXME: header nav 部分完成后应该去掉该部分 showHeaderNav showHeaderLogo
        meta: {
            showHeaderNav: true
        }
    },
    {
        path: "*", // 此处需特别注意置于最底部
        redirect: "/404"
    }
]
const router = new VueRouter({
    routes
})



router.beforeEach((to, from, next) => {

    // 设置路由path，用于header组件判断active状态
    store.commit('changeCurrentRoute', to.path);

    // 判断header组件的 nav 部分显示
    store.commit('changeHeaderNavShow', to.meta.showHeaderNav);


    next();
})






export default router
