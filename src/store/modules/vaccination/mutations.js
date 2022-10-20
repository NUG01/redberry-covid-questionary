export default {
  setNewVaccine(state,payload){
    state.had_vaccine=payload;
  },
  setNewStage(state,payload){
    state.vaccination_stage=payload;
  },
  setNewWait(state,payload){
    state.waiting=payload;
  }
};