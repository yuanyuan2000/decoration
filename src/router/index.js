import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/view/HelloWorld.vue'
import First from '@/components/view/First.vue'
import Material from '@/components/view/Material.vue'
import Purchase from '@/components/view/Purchase.vue'
import User from '@/components/view/User.vue'
import Shop from '@/components/view/Shop.vue'
import Budget from '@/components/view/Budget.vue'
import UploadMaterial from '@/components/view/UploadMaterial.vue'
import Collect from '@/components/view/Collect.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/first',
      name: 'First',
      component: First
    },
    {
      path: '/material',
      name: 'Material',
      component: Material
    },
    {
      path: '/purchase',
      name: 'Purchase',
      component: Purchase
    },
    {
      path: '/user',
      name: 'User',
      component: User
    },
    {
      path: '/shop',
      name: 'Shop',
      component: Shop
    },
    {
      path: '/budget',
      name: 'Budget',
      component: Budget
    },
    {
      path: '/uploadMaterial',
      name: 'UploadMaterial',
      component: UploadMaterial
    },
    {
      path: '/collect',
      name: 'Collect',
      component: Collect
    }
  ]
})
