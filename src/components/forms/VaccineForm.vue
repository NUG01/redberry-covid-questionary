<template>
    <Form @submit="onSubmit" class="flex flex-col w-[100%] mt-[4.2rem]">
      <div class="flex flex-col gap-[4.6rem]">
     <div class="flex flex-col gap-[8px]">
      <p class="mb-[1.3rem]">უკვე აცრილი ხარ?*</p>
      <div class="flex flex-col gap-[1.1rem]">
        <radio-button @radio-data="yesValue" rules="required" value="yes" type="radio" name="had_vaccine" id="vaccine1" label="კი"/>
        <radio-button @radio-data="noValue" rules="required" value="no" type="radio" name="had_vaccine" id="vaccine2" label="არა"/>
       <ErrorMessage style="color:#F15524;font-size:16px;margin-left:2rem" name="had_vaccine"/>
      </div>
      </div>
      <div v-if="showFirstInputs" class="flex flex-col gap-[8px]">
      <p class="mb-[1.3rem]">აირჩიე რა ეტაპზე ხარ*</p>
      <div class="flex flex-col gap-[1.1rem]">
        <radio-button @radio-data="registered" rules="required" type="radio" name="vaccination_stage" value="first_dose_and_registered" id="stage1" label="პირველი დოზა და დარეგისტრირებული ვარ მეორეზე"/>
        <radio-button @radio-data="vaccinated" rules="required" type="radio" name="vaccination_stage" value="fully_vaccinated" id="stage2" label="სრულიად აცრილი ვარ"/>
        <radio-button @radio-data="dose" rules="required" type="radio" name="vaccination_stage" value="first_dose_and_not_registered" id="stage3" label="პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე"/>
       <ErrorMessage style="color:#F15524;font-size:16px;margin-left:2rem" name="vaccination_stage"/>
      </div>
      </div>
      <div v-if="showSecondInputs" class="flex flex-col gap-[8px]">
      <p class="mb-[1.3rem]">რას ელოდები?*</p>
      <div class="flex flex-col gap-[1.1rem]">
        <radio-button @radio-data="waiting" rules="required" type="radio" value="registered_and_waiting" name="waiting" id="wait1" label="დარეგისტრირებული ვარ და ველოდები რიცხვს"/>
        <radio-button @radio-data="notPlanning" rules="required" type="radio" value="not_planning" name="waiting" id="wait2" label="არ ვგეგმავ"/>
        <radio-button @radio-data="planning" rules="required" type="radio" value="planning_vaccination" name="waiting" id="wait3" label="გადატანილი მაქვს და ვგეგმავ აცრას"/>
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
import RadioButton from '@/components/inputs/RadioButton.vue';                                                                         
import LinkText from '@/components/texts/LinkText.vue';    
import ProtocolText from '@/components/texts/ProtocolText.vue';      
import RouteButtons from '@/components/RouteButtons.vue';    
import { useRouter } from 'vue-router'              
import { useStore } from 'vuex'              
export default {
  name:"QuestionForm",
  emits:['radio-data'],
 components:{Form,RadioButton,LinkText,ProtocolText,ErrorMessage,RouteButtons},
  setup(){
     const router = useRouter();
     const store = useStore();

     const readyToShowFirst=ref(false);
     const readyToShowSecond=ref(false);
     const linkShow=ref(false);
     const protocolShow=ref(false);

     function yesValue(value){
          store.dispatch('updateWait','');
          protocolShow.value=false;
          readyToShowSecond.value=false;
          readyToShowFirst.value=true;
          store.dispatch('updateVaccine', value);
        }
     function noValue(value){
          store.dispatch('updateStage', '');
          linkShow.value=false;
          readyToShowFirst.value=false;
          readyToShowSecond.value=true;
          store.dispatch('updateVaccine', value);
        }
     
     
     function registered(value){
          linkShow.value=false;
          store.dispatch('updateStage', value);
        }
     function vaccinated(value){
          linkShow.value=false;
          store.dispatch('updateStage', value);
        }
     function dose(value){
          protocolShow.value=false;
          linkShow.value=true;
          store.dispatch('updateStage', value);
        }
     
     
     
     function waiting(value){
          protocolShow.value=false;
          store.dispatch('updateWait',value);
        }
     function notPlanning(value){
          protocolShow.value=false;
          store.dispatch('updateWait',value);
        }
     function planning(value){
          linkShow.value=false;
          protocolShow.value=true;
          store.dispatch('updateWait',value);
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
      yesValue,
      noValue,
      registered,
      vaccinated,
      dose,
      waiting,
      protocol:protocolShow,
      link:linkShow,
      planning,
      notPlanning,
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