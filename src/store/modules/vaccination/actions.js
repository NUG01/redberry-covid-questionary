export default {
  updateVaccine(context, payload){
    context.commit('setNewVaccine', payload);
  },
  updateStage(context, payload){
    context.commit('setNewStage', payload);
  },
  updateWait(context, payload){
    context.commit('setNewWait', payload);
  }
};