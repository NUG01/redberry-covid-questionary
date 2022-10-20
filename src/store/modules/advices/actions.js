export default {
  updateMeetings(context, payload){
    context.commit('setNewMeetings', payload);
  },
  updateOffice(context, payload){
    context.commit('setNewOffice', payload);
  },
  updateLiveMeetings(context, payload){
    context.commit('setNewLiveMeetings', payload);
  },
  updateOpinion(context, payload){
    context.commit('setNewOpinion', payload);
  }
};