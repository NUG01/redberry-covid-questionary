export default {
  updateRadio(context, payload){
  context.commit('newRadio', payload);
},
updateAntiradio(context, payload){
  context.commit('newAntiradio', payload);
},
updateNumberdate(context, payload){
  context.commit('newNumberdate', payload);
},
updateAntibody(context, payload){
  context.commit('newAntibody', payload);
},
updateDate(context, payload){
  context.commit('newDate', payload);
}
};