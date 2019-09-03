const My = () =>
  import('@/views/vote/my')


export default [{
  path: '/vote/my',
  name: 'voteMy',
  meta: {
    index: 2,
  },
  component: My,
}]
