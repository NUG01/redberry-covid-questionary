<template>
    <Form @submit="onSubmit" class="flex flex-col w-[100%] mt-[4.2rem]">
      <div class="flex flex-col gap-[4.6rem]">
     <div class="flex flex-col gap-[8px]">
      <p class="mb-[1.3rem]">უკვე აცრილი ხარ?*</p>
      <div class="flex flex-col gap-[1.1rem]">
        <radio-input @radio-data="setAlreadyVaccinatedValue" rules="required" value="yes" type="radio" name="had_vaccine" id="vaccine1" label="კი"/>
        <radio-input @radio-data="setNotVaccinatedValue" rules="required" value="no" type="radio" name="had_vaccine" id="vaccine2" label="არა"/>
       <ErrorMessage style="color:#F15524;font-size:16px;margin-left:2rem" name="had_vaccine"/>
      </div>
      </div>
      <div v-if="showFirstInputs" class="flex flex-col gap-[8px]">
      <p class="mb-[1.3rem]">აირჩიე რა ეტაპზე ხარ*</p>
      <div class="flex flex-col gap-[1.1rem]">
        <radio-input @radio-data="setStageAsRegistered" rules="required" type="radio" name="vaccination_stage" value="first_dose_and_registered" id="stage1" label="პირველი დოზა და დარეგისტრირებული ვარ მეორეზე"/>
        <radio-input @radio-data="setStageAsVaccinated" rules="required" type="radio" name="vaccination_stage" value="fully_vaccinated" id="stage2" label="სრულიად აცრილი ვარ"/>
        <radio-input @radio-data="setStageAsFirstDose" rules="required" type="radio" name="vaccination_stage" value="first_dose_and_not_registered" id="stage3" label="პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე"/>
       <ErrorMessage style="color:#F15524;font-size:16px;margin-left:2rem" name="vaccination_stage"/>
      </div>
      </div>
      <div v-if="showSecondInputs" class="flex flex-col gap-[8px]">
      <p class="mb-[1.3rem]">რას ელოდები?*</p>
      <div class="flex flex-col gap-[1.1rem]">
        <radio-input @radio-data="setWaitingStage" rules="required" type="radio" value="registered_and_waiting" name="waiting" id="wait1" label="დარეგისტრირებული ვარ და ველოდები რიცხვს"/>
        <radio-input @radio-data="setNotPlanningStage" rules="required" type="radio" value="not_planning" name="waiting" id="wait2" label="არ ვგეგმავ"/>
        <radio-input @radio-data="setPlanningStage" rules="required" type="radio" value="planning_vaccination" name="waiting" id="wait3" label="გადატანილი მაქვს და ვგეგმავ აცრას"/>
       <ErrorMessage style="color:#F15524;font-size:16px;margin-left:2rem" name="waiting"/>
      </div>
      </div>
     <link-text v-if="link"></link-text>
     <protocol-text v-if="protocol"></protocol-text>
      </div>
    <route-buttons to="covid-questions"></route-buttons>
    </Form>
</template>


<script>
import { Form,ErrorMessage } from 'vee-validate';
import { ref, onMounted } from 'vue';
import RadioInput from '@/components/inputs/RadioInput.vue';                                                                         
import LinkText from '@/components/texts/LinkText.vue';    
import ProtocolText from '@/components/texts/ProtocolText.vue';      
import RouteButtons from '@/components/RouteButtons.vue';    
import { useRouter } from 'vue-router'              
import { useStore } from 'vuex'              
export default {
  name:"QuestionForm",
  emits:['radio-data'],
 components:{Form,RadioInput,LinkText,ProtocolText,ErrorMessage,RouteButtons},
  setup(){
     const router = useRouter();
     const store = useStore();

     const readyToShowFirst=ref(false);
     const readyToShowSecond=ref(false);
     const linkShow=ref(false);
     const protocolShow=ref(false);

     function setAlreadyVaccinatedValue(value){
          store.dispatch('updateWait','');
          protocolShow.value=false;
          readyToShowSecond.value=false;
          readyToShowFirst.value=true;
        }
     function setNotVaccinatedValue(value){
          store.dispatch('updateStage', '');
          linkShow.value=false;
          readyToShowFirst.value=false;
          readyToShowSecond.value=true;
        }
     
     
     function setStageAsRegistered(value){
          linkShow.value=false;  
        }
     function setStageAsVaccinated(value){
          linkShow.value=false;
          }
     function setStageAsFirstDose(value){
          protocolShow.value=false;
          linkShow.value=true;
          }
     
     
     
     function setWaitingStage(value){
          protocolShow.value=false;
        }
     function setNotPlanningStage(value){
          protocolShow.value=false;
        }
     function setPlanningStage(value){
          linkShow.value=false;
          protocolShow.value=true;
        }


           function onSubmit(values){
            store.dispatch('updateVaccine', values.had_vaccine);
            store.dispatch('updateStage', values.vaccination_stage);
            store.dispatch('updateWait',values.waiting);
            return router.push('/advices');
           }
     
     
    

    return{
      showFirstInputs:readyToShowFirst,
      showSecondInputs:readyToShowSecond,
      setAlreadyVaccinatedValue,
      setNotVaccinatedValue,
      setStageAsRegistered,
      setStageAsVaccinated,
      setStageAsFirstDose,
      setWaitingStage,
      protocol:protocolShow,
      link:linkShow,
      setPlanningStage,
      setNotPlanningStage,
      onSubmit
    }
  }
}
</script>


<style scoped>
form{
  font-family: sans-serif;
  letter-spacing: 1px;
}
p{
  font-size: 2.2rem;
  color:#232323;
  font-weight: 700;
}
</style>