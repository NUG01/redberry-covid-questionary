export default {
  newVaccine(state,payload){
    state.vaccine=payload;
  },
  newStage(state,payload){
    state.stage=payload;
  },
  newWait(state,payload){
    state.wait=payload;
  }
};