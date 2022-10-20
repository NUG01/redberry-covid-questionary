import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router.js';
import store from '@/store/index.js';
import '@/style.css'
import "@/config/vee-validate/rules.js";
import "@/config/vee-validate/messages.js";



const app=createApp(App);
app.use(router);
app.use(store);

router.isReady().then(function(){
  app.mount('#app');
});

