import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router.js';
import store from '@/store/index.js';
import '@/style.css'
import "@/config/rules.js";
import "@/config/messages.js";


const app=createApp(App);
app.use(router);
app.use(store);

router.isReady().then(function(){
  app.mount('#app');
});

