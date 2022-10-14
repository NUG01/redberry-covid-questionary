import mutations from "@/store/modules/identification/mutations.js"; 
import actions from "@/store/modules/identification/actions.js"; 
import getters from "@/store/modules/identification/getters.js"; 

export default{
  state(){
    return{
      first_name:'',
      last_name:'',
      email:''
    };
  },
  mutations: mutations,
  actions: actions,
  getters: getters
}