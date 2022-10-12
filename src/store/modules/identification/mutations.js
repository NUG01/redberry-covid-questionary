export default {
  newName(state,payload){
    state.name=payload;
  },
  newSurname(state,payload){
    state.surname=payload;
  },
  newEmail(state,payload){
    state.email=payload;
  }
};