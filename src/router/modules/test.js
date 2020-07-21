const Home = () =>
  import('@/components/HelloFromVux')
const DemoList = () =>
  import('@/views/demo/list')
const DemoListTwo = () =>
  import('@/views/demo/listtwo')
const DemoDetail = () =>
  import('@/views/demo/detail')
const DemoTest = () =>
  import('@/views/demo/test')
const DemoTestTwo = () =>
  import('@/views/demo/testtwo')
const DemoWSTest = () => import('@/views/demo/wsTest/wsTest')

export default [{
  path: '/',
  name: 'Home',
  meta: {
    index: 1
  },
  component: Home
}, {
  path: '/demo/list',
  name: 'DemoList',
  meta: {
    index: 2,
    isUseCache: false,
    keepAlive: true
  },
  component: DemoList,
}, {
  path: '/demo/listtwo',
  name: 'DemoListTwo',
  meta: {
    index: 2,
    isUseCache: false,
    keepAlive: true
  },
  component: DemoListTwo,
}, {
  path: '/demo/test',
  name: 'DemoTest',
  meta: {
    index: 2
  },
  component: DemoTest,
}, {
  path: '/demo/testtwo',
  name: 'DemoTestTwo',
  meta: {
    index: 2
  },
  component: DemoTestTwo,
}, {
  path: '/demo/detail/:id',
  name: 'DemoDetail',
  meta: {
    index: 3
  },
  component: DemoDetail
}, {
  path: '/demo/wsTest',
  name: 'DemoWSTest',
  meta: {
    index: 2
  },
  component: DemoWSTest,
}, ]
