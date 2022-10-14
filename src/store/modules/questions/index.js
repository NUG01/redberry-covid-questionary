import mutations from "@/store/modules/questions/mutations.js"; 
import actions from "@/store/modules/questions/actions.js"; 
import getters from "@/store/modules/questions/getters.js"; 

export default{
  state(){
    return{
      had_covid:'',
      had_antibody_test:'',
      antibody_date:'',
      antibody_quantity:'',
      covid_date:''
    };
  },
  mutations: mutations,
  actions: actions,
  getters: getters
}