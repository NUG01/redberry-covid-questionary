import mutations from "./mutations.js"; 
import actions from "./actions.js"; 
import getters from "./getters.js"; 

export default{
  state(){
    return{
      name:'',
      surname:'',
      email:'',
    };
  },
  mutations: mutations,
  actions: actions,
  getters: getters
}