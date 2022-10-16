export default {
  newRadio(state,payload){
    state.had_covid=payload;
  },
  newAntiradio(state,payload){
    state.had_antibody_test=payload;
  },
  newNumberdate(state,payload){
    state.antibody_date=payload;
  },
  newAntibody(state,payload){
    state.antibody_quantity=payload;
  },
  newDate(state,payload){
    state.covid_date=payload;
  }
};