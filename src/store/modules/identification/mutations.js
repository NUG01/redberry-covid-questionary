export default {
  setNewName(state,payload){
    state.first_name=payload;
  },
  setNewSurname(state,payload){
    state.last_name=payload;
  },
  setNewEmail(state,payload){
    state.email=payload;
  }
};