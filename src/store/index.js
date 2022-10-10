import { createStore } from "vuex";

import identificationModule from '@/store/modules/identification/index.js';
import questionsModule from '@/store/modules/questions/index.js';
import advicesModule from '@/store/modules/advices/index.js';
import vaccinationModule from '@/store/modules/vaccination/index.js';

const store= createStore({
  modules:{
    identification: identificationModule,
    advices: advicesModule,
    questions: questionsModule,
    vaccination: vaccinationModule
  }
});

export default store;