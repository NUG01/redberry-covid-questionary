export default {
  updateName(context, payload){
    context.commit('setNewName', payload);
  },
  updateSurname(context, payload){
    context.commit('setNewSurname', payload);
  },
  updateEmail(context, payload){
    context.commit('setNewEmail', payload);
  }
};