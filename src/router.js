import { createRouter, createWebHistory } from 'vue-router';
import StartPage from './pages/StartPage.vue';
import IdentifyPage from './pages/IdentifyPage.vue';
import QuestionsPage from './pages/QuestionsPage.vue';
import VaccinationPage from './pages/VaccinationPage.vue';
import AdvicesPage from './pages/AdvicesPage.vue';
import ThankfulPage from './pages/ThankfulPage.vue';

const router = createRouter({
  history : createWebHistory(),
  routes: [
    {path: '/', redirect: '/start', name:'main.page'},
    {path: '/start', component: StartPage, name:'start.page'},
    {path: '/identification', component: IdentifyPage, name:'identification.page'},
    {path: '/covid-questions', component: QuestionsPage, name:'questions.page'},
    {path: '/vaccination', component: VaccinationPage, name:'vaccination.page'},
    {path: '/advices', component: AdvicesPage, name:'advices.page'},
    {path: '/thanks', component: ThankfulPage, name:'thanks.page'},
    ],
});


export default router;