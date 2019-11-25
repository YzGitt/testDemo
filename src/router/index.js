import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/layout/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      redirect:'/first',
      component: layout,
      children:[
        {
          path: 'first',
          name:'first',
          component: ()=>import('@/views/index'),
          children: [
            {
              path: 'bases',
              name:'bases',
              component: ()=>import('@/components/header/detiles/bases')
            },
            {
              path: 'other',
              name:'other',
              component: ()=>import('@/components/header/detiles/other')
            },
            {
              path: 'complete',
              name:'complete',
              component: ()=>import('@/components/header/detiles/complete')
            }
          ]
        },

      ]
    },
    {
      path:'/excel',
      name:'导出列表',
      component:layout,
      redirect:'/excel/export',
      children:[
        {
          path: 'export',
          name:'export',
          component: ()=>import('@/views/expro-excel'),
        }
      ]
    }
  ]
})
