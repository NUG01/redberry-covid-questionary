export default {
  setNewRadio(state,payload){
    state.had_covid=payload;
  },
  setNewAntiradio(state,payload){
    state.had_antibody_test=payload;
  },
  setNewNumberdate(state,payload){
    state.antibody_date=payload;
  },
  setNewAntibody(state,payload){
    state.antibody_quantity=payload;
  },
  setNewDate(state,payload){
    state.covid_date=payload;
  }
};