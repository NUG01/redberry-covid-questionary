export default {
  updateRadio(context, payload){
  context.commit('setNewRadio', payload);
},
updateAntiradio(context, payload){
  context.commit('setNewAntiradio', payload);
},
updateNumberdate(context, payload){
  context.commit('setNewNumberdate', payload);
},
updateAntibody(context, payload){
  context.commit('setNewAntibody', payload);
},
updateDate(context, payload){
  context.commit('setNewDate', payload);
}
};