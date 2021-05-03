/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const tableRouter = {
  path: '/user',
  component: Layout,
  redirect: '/user/index',
  name: 'UserManage',
  meta: {
    title: 'UserManage',
    icon: 'peoples'
  },
  children: [
    // 学生管理
    {
      path: 'complex-table',
      component: () => import('@/views/user/index'),
      name: 'StudentManage',
      meta: { title: 'StudentManage',
        icon: 'people'
      }
    }
    // // 老师管理
    // {
    //   path: 'dynamic-table',
    //   component: () => import('@/views/teacher/index'),
    //   name: 'TeacherManage',
    //   meta: { title: 'TeacherManage',
    //     icon: 'user'
    //   }
    // }
    // {
    //   path: 'dynamic-table',
    //   component: () => import('@/views/table/dynamic-table/index'),
    //   name: 'DynamicTable',
    //   meta: { title: 'dynamicTable' }
    // },
    // {
    //   path: 'drag-table',
    //   component: () => import('@/views/table/drag-table'),
    //   name: 'DragTable',
    //   meta: { title: 'dragTable' }
    // },
    // {
    //   path: 'inline-edit-table',
    //   component: () => import('@/views/user/index'),
    //   name: 'InlineEditTable',
    //   meta: { title: 'inlineEditTable' }
    // }
  ]
}
export default tableRouter
