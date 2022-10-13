export default {
  updateName(context, payload){
    context.commit('newName', payload);
  },
  updateSurname(context, payload){
    context.commit('newSurname', payload);
  },
  updateEmail(context, payload){
    context.commit('newEmail', payload);
  }
};