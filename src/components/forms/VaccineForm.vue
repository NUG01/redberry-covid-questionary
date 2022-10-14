<template>
    <Form @submit="onSubmit" class="flex flex-col w-[100%] mt-[4.2rem]">
      <div class="flex flex-col gap-[4.6rem]">
     <div class="flex flex-col gap-[8px]">
      <p class="mb-[1.3rem]">უკვე აცრილი ხარ?*</p>
      <div class="flex flex-col gap-[1.1rem]">
        <radio-cmp @radio-data="yesValue" rules="required" value="yes" type="radio" name="had_vaccine" id="vaccine1" label="კი"/>
        <radio-cmp @radio-data="noValue" rules="required" value="no" type="radio" name="had_vaccine" id="vaccine2" label="არა"/>
       <ErrorMessage style="color:#F15524;font-size:16px;margin-left:2rem" name="had_vaccine"/>
      </div>
      </div>
      <div v-if="showFirstInputs" class="flex flex-col gap-[8px]">
      <p class="mb-[1.3rem]">აირჩიე რა ეტაპზე ხარ*</p>
      <div class="flex flex-col gap-[1.1rem]">
        <radio-cmp @radio-data="registered" rules="required" type="radio" name="vaccination_stage" value="first_dose_and_registered" id="stage1" label="პირველი დოზა და დარეგისტრირებული ვარ მეორეზე"/>
        <radio-cmp @radio-data="vaccinated" rules="required" type="radio" name="vaccination_stage" value="fully_vaccinated" id="stage2" label="სრულიად აცრილი ვარ"/>
        <radio-cmp @radio-data="dose" rules="required" type="radio" name="vaccination_stage" value="first_dose_and_not_registered" id="stage3" label="პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე"/>
       <ErrorMessage style="color:#F15524;font-size:16px;margin-left:2rem" name="vaccination_stage"/>
      </div>
      </div>
      <div v-if="showSecondInputs" class="flex flex-col gap-[8px]">
      <p class="mb-[1.3rem]">რას ელოდები?*</p>
      <div class="flex flex-col gap-[1.1rem]">
        <radio-cmp @radio-data="waiting" rules="required" type="radio" value="registered_and_waiting" name="waiting" id="wait1" label="დარეგისტრირებული ვარ და ველოდები რიცხვს"/>
        <radio-cmp @radio-data="notPlanning" rules="required" type="radio" value="not_planning" name="waiting" id="wait2" label="არ ვგეგმავ"/>
        <radio-cmp @radio-data="planning" rules="required" type="radio" value="planning_vaccination" name="waiting" id="wait3" label="გადატანილი მაქვს და ვგეგმავ აცრას"/>
       <ErrorMessage style="color:#F15524;font-size:16px;margin-left:2rem" name="waiting"/>
      </div>
      </div>
     <link-text v-if="link"></link-text>
     <protocol-text v-if="protocol"></protocol-text>
      </div>
       <div class="flex items-center justify-center gap-[12rem] absolute bottom-0 left-[50%] -translate-x-[50%] mb-[10rem]">
   <router-link to="covid-questions"><left-arrow></left-arrow></router-link>
   <button type="submit"><right-arrow></right-arrow></button>
  </div>
    </Form>
</template>


<script>
import { Form,ErrorMessage } from 'vee-validate';
import { ref, onBeforeMount, onMounted } from 'vue';
import RadioCmp from '@/components/inputs/Radio.vue';                              
import LinkText from '@/components/texts/LinkText.vue';    
import ProtocolText from '@/components/texts/ProtocolText.vue';    
import LeftArrow from '@/components/svg/LeftArrow.vue';
import RightArrow from '@/components/svg/RightArrow.vue';    
import { useRouter } from 'vue-router'
import { useStore } from 'vuex';                  
export default {
  name:"QuestionForm",
 components:{Form,RadioCmp,LeftArrow,RightArrow,LinkText,ProtocolText,ErrorMessage},
  setup(){
     const store = useStore();
     const router = useRouter();

     const readyToShowFirst=ref(false);
     const readyToShowSecond=ref(false);
     const linkShow=ref(false);
     const protocolShow=ref(false);

       onBeforeMount(() =>{
      store.dispatch('updateVaccine', localStorage.getItem('had_vaccine'));
      store.dispatch('updateVaccine',localStorage.getItem('vaccination_stage'));
      store.dispatch('updateVaccine',localStorage.getItem('waiting'));
      });



     function yesValue(value){
          localStorage.removeItem("waiting");
          protocolShow.value=false;
          readyToShowSecond.value=false;
          readyToShowFirst.value=true;
          localStorage.setItem('had_vaccine', value)
        }
     function noValue(value){
          localStorage.removeItem("vaccination_stage");
          linkShow.value=false;
          readyToShowFirst.value=false;
          readyToShowSecond.value=true;
          localStorage.setItem('had_vaccine', value)
        }
     
     
     
     function registered(value){
          linkShow.value=false;
          localStorage.setItem('vaccination_stage', value)
        }
     function vaccinated(value){
          linkShow.value=false;
          localStorage.setItem('vaccination_stage', value)
        }
     function dose(value){
          protocolShow.value=false;
          linkShow.value=true;
          localStorage.setItem('vaccination_stage', value)
        }
     
     
     
     function waiting(value){
          protocolShow.value=false;
          localStorage.setItem('waiting', value)
        }
     function notPlanning(value){
          protocolShow.value=false;
          localStorage.setItem('waiting', value)
        }
     function planning(value){
          linkShow.value=false;
          protocolShow.value=true;
          localStorage.setItem('waiting', value)
        }


           function onSubmit(values){
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