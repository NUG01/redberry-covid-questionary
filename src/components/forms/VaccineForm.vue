<template>
    <Form @submit="onSubmit" class="flex flex-col w-[100%] mt-[4.2rem]">
      <div class="flex flex-col gap-[4.6rem]">
     <div class="flex flex-col gap-[8px]">
      <p class="mb-[1.3rem]">უკვე აცრილი ხარ?*</p>
      <div class="flex flex-col gap-[1.1rem]">
        <radio-cmp @radio-data="yesValue" value="yes" type="radio" name="vaccine" id="vaccine1" label="კი"/>
        <radio-cmp @radio-data="noValue" value="no" type="radio" name="vaccine" id="vaccine2" label="არა"/>
      </div>
      </div>
      <div v-if="showFirstInputs" class="flex flex-col gap-[8px]">
      <p class="mb-[1.3rem]">აირჩიე რა ეტაპზე ხარ*</p>
      <div class="flex flex-col gap-[1.1rem]">
        <radio-cmp @radio-data="registered" type="radio" name="stage" value="first_dose_and_registered" id="stage1" label="პირველი დოზა და დარეგისტრირებული ვარ მეორეზე"/>
        <radio-cmp @radio-data="vaccinated" type="radio" name="stage" value="fully_vaccinated" id="stage2" label="სრულიად აცრილი ვარ"/>
        <radio-cmp @radio-data="dose" type="radio" name="stage" value="first_dose_and_not_registered" id="stage3" label="პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე"/>
      </div>
      </div>
      <div v-if="showSecondInputs" class="flex flex-col gap-[8px]">
      <p class="mb-[1.3rem]">რას ელოდები?*</p>
      <div class="flex flex-col gap-[1.1rem]">
        <radio-cmp @radio-data="waiting" type="radio" value="registered_and_waiting" name="wait" id="wait1" label="დარეგისტრირებული ვარ და ველოდები რიცხვს"/>
        <radio-cmp @radio-data="notPlanning" type="radio" value="not_planning" name="wait" id="wait2" label="არ ვგეგმავ"/>
        <radio-cmp @radio-data="planning" type="radio" value="planning_vaccination" name="wait" id="wait3" label="გადატანილი მაქვს და ვგეგმავ აცრას"/>
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
import { Form } from 'vee-validate';
import { ref, onBeforeMount } from 'vue';
import RadioCmp from '@/components/inputs/Radio.vue';                              
import LinkText from '@/components/texts/LinkText.vue';    
import ProtocolText from '@/components/texts/ProtocolText.vue';    
import LeftArrow from '@/components/svg/LeftArrow.vue';
import RightArrow from '@/components/svg/RightArrow.vue';    
import { useRouter } from 'vue-router'
import { useStore } from 'vuex';                  
export default {
  name:"QuestionForm",
 components:{Form,RadioCmp,LeftArrow,RightArrow,LinkText,ProtocolText},
  setup(){
     const store = useStore();
     const router = useRouter();

     const readyToShowFirst=ref(false);
     const readyToShowSecond=ref(false);
     const linkShow=ref(false);
     const protocolShow=ref(false);

       onBeforeMount(() =>{
      store.dispatch('updateVaccine', localStorage.getItem('vaccination'));
      store.dispatch('updateVaccine',localStorage.getItem('stage'));
      store.dispatch('updateVaccine',localStorage.getItem('waiting'));
      });


     function yesValue(value){
          localStorage.removeItem("waiting");
          protocolShow.value=false;
          readyToShowSecond.value=false;
          readyToShowFirst.value=true;
          localStorage.setItem('vaccination', value)
        }
     function noValue(value){
          localStorage.removeItem("stage");
          linkShow.value=false;
          readyToShowFirst.value=false;
          readyToShowSecond.value=true;
          localStorage.setItem('vaccination', value)
        }
     
     
     
     function registered(value){
      linkShow.value=false;
          localStorage.setItem('stage', value)
        }
     function vaccinated(value){
          linkShow.value=false;
          localStorage.setItem('stage', value)
        }
     function dose(value){
          protocolShow.value=false;
          linkShow.value=true;
          localStorage.setItem('stage', value)
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
            console.log('submit');
            return;
            return router.push('/vaccination');
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