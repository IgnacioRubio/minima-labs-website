import { createWebHistory, createRouter } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import AppsView from '@/views/AppsView.vue'
import AboutView from '@/views/AboutView.vue'
import ContactView from '@/views/ContactView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/apps', component: AppsView },
  { path: '/about', component: AboutView },
  { path: '/contact', component: ContactView },
  { path: '/:pathMatch(.*)*', component: HomeView }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
