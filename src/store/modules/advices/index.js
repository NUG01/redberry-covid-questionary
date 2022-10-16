import getters from "@/store/modules/advices/getters.js"; 
import actions from "@/store/modules/advices/actions.js"; 
import mutations from "@/store/modules/advices/mutations.js"; 

export default{
  state(){
    return{
      non_formal_meetings:'',
      number_of_days_from_office:'',
      what_about_meetings_in_live:'',
      tell_us_your_opinion_about_us:''

    }
  },
  mutations: mutations,
  actions: actions,
  getters: getters
}