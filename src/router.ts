import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

var router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
  ],
});
/**
 * to: Route: 即将要进入的目标 路由对象
 * from: Route: 当前导航正要离开的路由
 * next 继续执行下一个钩子函数 next('/') 或者 next({ path: '/' }): 跳转到一个不同的地址。当前的导航被中断
 */
router.beforeEach((to, from, next) => {
  
  next();
})
/**
 * 全局后置钩子
 */
router.afterEach((to, from) => {
  
})
export default router;
