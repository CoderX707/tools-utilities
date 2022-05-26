import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import UtilitiesView from '../views/UtilitiesView.vue';
import NotesView from '../views/NotesView.vue';
import GamesView from '../views/GamesView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
      meta: {
        title: 'Home',
      },
    },
    {
      path: '/utilities',
      name: 'utilities',
      meta: {
        title: 'Utilities',
      },
      component: UtilitiesView,
    },
    {
      path: '/notes',
      name: 'Notes',
      meta: {
        title: 'Notes',
      },
      component: NotesView,
    },
    {
      path: '/games',
      name: 'Games',
      meta: {
        title: 'Games',
      },
      component: GamesView,
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('../views/AboutView.vue'),
      meta: {
        title: 'About',
      },
    },
  ],
});

export default router;
