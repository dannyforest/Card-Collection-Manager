import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/HomeView.vue';
import Collection from '@/views/Collection.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/collection',
      name: 'collection',
      component: Collection
    }
  ]
});

export default router;
