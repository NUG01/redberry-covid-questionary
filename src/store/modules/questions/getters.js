export default {
  get_had_covid(state){
    return state.had_covid;
  },
  get_had_antibody_test(state){
    return state.had_antibody_test;
  },
  get_antibody_date(state){
    return state.antibody_date;
  },
  get_antibody_quantity(state){
    return state.antibody_quantity;
  },
  get_covid_date(state){
    return state.covid_date;
  }
};