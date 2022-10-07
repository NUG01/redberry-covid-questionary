import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '@/pages/Landing.vue';
import IdentifyPage from '@/pages/Identify.vue';
import QuestionsPage from '@/pages/Questions.vue';
import VaccinationPage from '@/pages/Vaccination.vue';
import AdvicesPage from '@/pages/Advices.vue';
import ThankfulPage from '@/pages/Thankful.vue';

const router = createRouter({
  history : createWebHistory(),
  routes: [
    {path: '/', redirect: '/start', name:'Main'},
    {path: '/start', component: LandingPage, name:'Landing'},
    {path: '/identification', component: IdentifyPage, name:'Identification'},
    {path: '/covid-questions', component: QuestionsPage, name:'Questions'},
    {path: '/vaccination', component: VaccinationPage, name:'Vaccination'},
    {path: '/advices', component: AdvicesPage, name:'Advices'},
    {path: '/thanks', component: ThankfulPage, name:'Thanks'},
    ],
});


export default router;