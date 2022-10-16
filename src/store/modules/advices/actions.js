export default {
  updateMeetings(context, payload){
    context.commit('newMeetings', payload);
  },
  updateOffice(context, payload){
    context.commit('newOffice', payload);
  },
  updateLiveMeetings(context, payload){
    context.commit('newLiveMeetings', payload);
  },
  updateOpinion(context, payload){
    context.commit('newOpinion', payload);
  }
};