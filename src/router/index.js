import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import { useFetchResource } from "@/composables/useFetchResource";

const { data: users, fetchResource } = useFetchResource('https://jsonplaceholder.typicode.com/users')


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/user/:id',
      name: 'User',
      component: () => import('@/views/UserView.vue'),
      async beforeEnter(to) {
          await fetchResource()
          const exist = users.value.find(user => user.id === parseInt(to.params.id))
          if (!exist) return { name: 'NotFound' }
      }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/views/NotFound.vue')
    }
  ]
})

export default router
