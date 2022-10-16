export default {
  newVaccine(state,payload){
    state.had_vaccine=payload;
  },
  newStage(state,payload){
    state.vaccination_stage=payload;
  },
  newWait(state,payload){
    state.waiting=payload;
  }
};