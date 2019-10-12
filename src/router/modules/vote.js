const Index = () => import('@/views/vote/index')
const My = () => import('@/views/vote/my')
const TeamRec = () => import('@/views/vote/teamRec')


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
}, {
  path: '/vote/teamRec',
  name: 'voteTeamRec',
  meta: {
    index: 2,
  },
  component: TeamRec,
}]
