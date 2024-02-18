import { createRouter, createWebHistory } from 'vue-router'

import OperationBintoInt from '@/components/calculator/OperationBinToInt.vue'
import OperationIntToBin from '@/components/calculator/OperationIntToBin.vue'
import OperationA2 from '@/components/calculator/OperationA2.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/BinToInt',
      name: 'BinToInt',
      component: OperationBintoInt
    },
    {
      path: '/IntToBin',
      name: 'IntToBin',
      component: OperationIntToBin
    },
    {
      path: '/A2',
      name: 'A2',
      component: OperationA2
    }
  ]
})

export default router
