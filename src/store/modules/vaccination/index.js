import mutations from "@/store/modules/vaccination/mutations.js"; 
import actions from "@/store/modules/vaccination/actions.js"; 
import getters from "@/store/modules/vaccination/getters.js"; 

export default{
  state(){
    return{
      had_vaccine:'',
      vaccination_stage:'',
      waiting:''
    };

  },
  mutations: mutations,
  actions: actions,
  getters: getters
}