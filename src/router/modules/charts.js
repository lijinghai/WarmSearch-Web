/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const chartsRouter = {
  path: '/charts',
  component: Layout,
  redirect: 'noRedirect',
  name: 'Monitor',
  meta: {
    title: 'Monitor',
    icon: 'international'
  },
  children: [
    {
      path: 'mix-chart',
      component: () => import('@/views/charts/mix-chart'),
      name: 'Online',
      meta: { title: 'Online',
        icon: 'eye-open'
      }
    },
    {
      path: 'keyboard',
      component: () => import('@/views/monitor/log/index'),
      name: 'log',
      meta: { title: 'log',
        icon: 'skill'
      }
    }
  ]
}

export default chartsRouter
