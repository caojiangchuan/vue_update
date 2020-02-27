import Vue from 'vue'
import Router from 'vue-router'
import Vux from '../vuex/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: resolve => require(['../components/HelloWorld'], resolve)
    },
    {
      path: '/login',
      name: 'login',
      component: resolve => require(['../view/login'], resolve)
    },
    {
      path: '/main',
      name: 'main',
      component: resolve => require(['../view/main'], resolve),
      redirect: '/main/index',
      children: [
        {
          path: 'index',
          name: 'index',
          component: resolve => require(['../components/index'], resolve)
        },
        {
          path: 'component',
          name: 'component',
          component: resolve => require(['../components/component'], resolve)
        },
        {
          path: 'function',
          name: 'function',
          component: resolve => require(['../components/function'], resolve)
        },
        {
          path: 'my',
          name: 'my',
          component: resolve => require(['../components/my'], resolve)
        },
        {
          path: 'about',
          name: 'about',
          component: resolve => require(['../components/about'], resolve)
        },
        {
          path: 'lang',
          name: 'lang',
          component: resolve => require(['../components/lang'], resolve)
        },
        {
          path: 'linq',
          name: 'linq',
          component: resolve => require(['../components/linq'], resolve),
          
        },
        {
          path: 'lazy',
          name: 'lazy',
          component: resolve => require(['../components/lazy'], resolve),
          
        }

      ]

    },
    {
      path: '/active/:id',
      name: 'active',
      component: resolve => require(['../view/active'], resolve),
      beforeEnter(to,from,next){                                  //路由独享
        if(Vux.state.login==""||Vux.state.login==null){
          alert("请登录");
          next('/login'); // 禁止跳转
        }else{
          next()
        }
      }
    },
    {
      path: '/echarts',
      name: 'echarts',
      component: resolve => require(['../components/echats/echarts'], resolve)

    },
    {
      path:'*',
      name:'error',
      component: resolve => require(['../view/error'], resolve)

    }
   

  ]
  
})

