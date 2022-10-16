export default {
  newName(state,payload){
    state.first_name=payload;
  },
  newSurname(state,payload){
    state.last_name=payload;
  },
  newEmail(state,payload){
    state.email=payload;
  }
};