import { createRouter, createWebHistory } from 'vue-router';
import CoachDetail from './pages/coaches/CoachDetail.vue';
import CoachList from './pages/coaches/CoachesList.vue';
import CoachRegistration from './pages/coaches/CoachRegistration.vue';
import NotFound from './pages/NotFound.vue';
import ContactCoach from './pages/requests/ContactCoach.vue';
import RequestRecieved from './pages/requests/RequestsRecieved.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches' },
    { path: '/coaches', component: CoachList },
    {
      path: '/coaches/:id',
      component: CoachDetail,
      children: [{ path: 'contact', component: ContactCoach }],
    },
    { path: '/register', component: CoachRegistration },
    { path: '/requests', component: RequestRecieved },
    { path: '/:notFound(.*)', component: NotFound },
  ],
});

export default router;
