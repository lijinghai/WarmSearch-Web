/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const nestedRouter = {
  path: '/nested',
  component: Layout,
  redirect: '/nested/menu1/menu1-1',
  name: 'GoodsManage',
  meta: {
    title: 'GoodsManage',
    icon: 'skill'
  },
  children: [
    {
      path: 'menu1',
      component: () => import('@/views/goods/electronic/index'), // Parent router-view
      name: 'Precious',
      // 电子信息
      meta: { title: 'Precious',
        icon: 'star'
      }
      // redirect: '/nested/menu1/menu1-1',
      // children: [
      //   {
      //     path: 'menu1-1',
      //     component: () => import('@/views/nested/menu1/menu1-1'),
      //     name: 'Menu1-1',
      //     meta: { title: 'menu1-1' }
      //   },
      //   {
      //     path: 'menu1-2',
      //     component: () => import('@/views/nested/menu1/menu1-2'),
      //     name: 'Menu1-2',
      //     redirect: '/nested/menu1/menu1-2/menu1-2-1',
      //     meta: { title: 'menu1-2' },
      //     children: [
      //       {
      //         path: 'menu1-2-1',
      //         component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
      //         name: 'Menu1-2-1',
      //         meta: { title: 'menu1-2-1' }
      //       },
      //       {
      //         path: 'menu1-2-2',
      //         component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
      //         name: 'Menu1-2-2',
      //         meta: { title: 'menu1-2-2' }
      //       }
      //     ]
      //   },
      //   {
      //     path: 'menu1-3',
      //     component: () => import('@/views/nested/menu1/menu1-3'),
      //     name: 'Menu1-3',
      //     meta: { title: 'menu1-3' }
      //   }
      // ]
    },
    {
      path: 'menu2',
      name: 'Pens',
      // 文具类物品
      component: () => import('@/views/goods/pen/index'),
      meta: { title: 'Pens',
        icon: 'education'
      }
    }
  ]
}

export default nestedRouter
