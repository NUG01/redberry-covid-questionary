import { createRouter, createWebHistory } from 'vue-router';
import StartPage from './pages/StartPage.vue';
import FirstPage from './pages/FirstPage.vue';
import SecondPage from './pages/SecondPage.vue';
import ThirdPage from './pages/ThirdPage.vue';
import FourthPage from './pages/FourthPage.vue';
import ThankfulPage from './pages/ThankfulPage.vue';

const router = createRouter({
  history : createWebHistory(),
  routes: [
    {path: '/', redirect: '/start'},
    {path: '/start', component: StartPage},
    {path: '/identification', component: FirstPage},
    {path: '/covid-questions', component: SecondPage},
    {path: '/vaccination', component: ThirdPage},
    {path: '/advices', component: FourthPage},
    {path: '/thanks', component: ThankfulPage},
        ],
});


export default router;