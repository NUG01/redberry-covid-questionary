export default {
  newName(state,payload){
    state.name=payload.target.value;
  },
  newSurname(state,payload){
    state.surname=payload.target.value;
  },
  newEmail(state,payload){
    state.email=payload.target.value;
  },
};