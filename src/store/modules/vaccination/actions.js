export default {
  updateVaccine(context, payload){
    context.commit('newVaccine', payload);
  },
  updateStage(context, payload){
    context.commit('newStage', payload);
  },
  updateWait(context, payload){
    context.commit('newWait', payload);
  }
};