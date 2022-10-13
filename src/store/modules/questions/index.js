import mutations from "@/store/modules/questions/mutations.js"; 
import actions from "@/store/modules/questions/actions.js"; 
import getters from "@/store/modules/questions/getters.js"; 

export default{
  state(){
    return{
      radio:'',
      antiRadio:'',
      numberDate:'',
      antiBody:'',
      date:''
    };
  },
  mutations: mutations,
  actions: actions,
  getters: getters
}