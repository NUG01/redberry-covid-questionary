import { createStore } from "vuex";

import identificationModule from '@/modules/identification/index.js';
import questionsModule from '@/modules/questions/index.js';
import advicesModule from '@/modules/advices/index.js';
import vaccinationModule from '@/modules/vaccination/index.js';

const store= createStore({
  modules:{
    identification: identificationModule,
    advices: advicesModule,
    questions: questionsModule,
    vaccination: vaccinationModule
  }
});

export default store;