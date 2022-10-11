import mutations from "./mutations.js"; 
import actions from "./actions.js"; 
import getters from "./getters.js"; 

export default{
  state(){
    return{
      name:'',
      surname:'',
      email:'',
      nameErr:false,
      nameErr2:false
    };
  },
  mutations: mutations,
  actions: actions,
  getters: getters
}