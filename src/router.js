import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '@/views/Landing.vue';
import IdentifyPage from '@/views/Identify.vue';
import QuestionsPage from '@/views/Questions.vue';
import VaccinationPage from '@/views/Vaccination.vue';
import AdvicesPage from '@/views/Advices.vue';
import ThankfulPage from '@/views/Thankful.vue';

const router = createRouter({
  history : createWebHistory(),
  routes: [
    {path: '/', redirect: '/start', name:'main'},
    {path: '/start', component: LandingPage, name:'landing'},
    {path: '/identification', component: IdentifyPage, name:'identification'},
    {path: '/covid-questions', component: QuestionsPage, name:'questions'},
    {path: '/vaccination', component: VaccinationPage, name:'vaccination'},
    {path: '/advices', component: AdvicesPage, name:'advices'},
    {path: '/thanks', component: ThankfulPage, name:'thanks'},
    ],
});


export default router;