export default {
  newName(state,payload){
    state.name=payload;
  },
  newSurname(state,payload){
    state.surname=payload;
  },
  newEmail(state,payload){
    state.email=payload;
  },
  newErr(state,payload){
    state.nameErr=payload;
  },
  newErr2(state,payload){
    state.nameErr2=payload;
  },
};