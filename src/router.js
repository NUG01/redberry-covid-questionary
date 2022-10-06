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
    {path: '/', redirect: '/start', name:'main'},
    {path: '/start', component: StartPage, name:'start'},
    {path: '/identification', component: IdentifyPage, name:'identification'},
    {path: '/covid-questions', component: QuestionsPage, name:'covid-questions'},
    {path: '/vaccination', component: VaccinationPage, name:'vaccination'},
    {path: '/advices', component: AdvicesPage, name:'advices'},
    {path: '/thanks', component: ThankfulPage, name:'thanks'},
    ],
});


export default router;