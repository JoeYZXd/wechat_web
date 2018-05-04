import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MemberCard from '@/components/wuchabang/MemberCard'
import TopUp from '@/components/wuchabang/TopUp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/wcb/membercard',
      name: 'MemberCard',
      component: MemberCard
    },
    {
      path: '/wcb/topup',
      name: 'TopUp',
      component: TopUp,
      meta: {
        title: '充值'
      }
    }
  ]
})
