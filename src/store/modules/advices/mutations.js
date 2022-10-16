export default {
  newMeetings(state,payload){
    state.non_formal_meetings=payload;
  },
  newOffice(state,payload){
    state.number_of_days_from_office=payload;
  },
  newLiveMeetings(state,payload){
    state.what_about_meetings_in_live=payload;
  },
  newOpinion(state,payload){
    state.tell_us_your_opinion_about_us=payload;
  }
};