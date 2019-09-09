const Index = () => import('@/views/vote/index')
const My = () => import('@/views/vote/my')


export default [{
  path: '/vote/index',
  name: 'voteIndex',
  meta: {
    index: 2,
  },
  component: Index,
}, {
  path: '/vote/my',
  name: 'voteMy',
  meta: {
    index: 2,
  },
  component: My,
}]
