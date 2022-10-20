export default {
  setNewMeetings(state,payload){
    state.non_formal_meetings=payload;
  },
  setNewOffice(state,payload){
    state.number_of_days_from_office=payload;
  },
  setNewLiveMeetings(state,payload){
    state.what_about_meetings_in_live=payload;
  },
  setNewOpinion(state,payload){
    state.tell_us_your_opinion_about_us=payload;
  }
};