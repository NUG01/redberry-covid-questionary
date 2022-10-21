<template>
  <Form @submit="onSubmit" class="flex flex-col w-[100%] mt-[4.2rem]">
      <div class="flex flex-col gap-[4.6rem]">
      <div class="flex flex-col gap-[8px]">
      <p class="mb-[1.3rem]">გაქვს გადატანილი Covid-19?*</p>
      <div class="flex flex-col gap-[1.1rem]" rules="required">
        <radio-input @radio-data="setHadCovidValue" rules="required" value="yes" type="radio" id="radio1" name="had_covid" label="კი"/>
        <radio-input @radio-data="setHadntCovidValue" rules="required" value="no" type="radio" id="radio2" name="had_covid" label="არა"/>
        <radio-input @radio-data="setNotHavingCovidValue" rules="required" value="not_now" type="radio" id="radio3" name="had_covid" label="ახლა მაქვს"/>
       <ErrorMessage style="color:#F15524;font-size:16px;margin-left:2rem" name="had_covid"/>
       </div>
      </div>
     <div v-if="showSecondRadio" class="flex flex-col gap-[8px]">
      <p class="mb-[1.3rem]">ანტისხეულების ტესტი გაქვს გაკეთებული?*</p>
      <div class="flex flex-col gap-[1.1rem]">
        <radio-input type="radio" rules="required" @radio-data="setAntibodyValue" value="true" id="anti-radio1" name="had_antibody_test" label="კი"/>
        <radio-input type="radio" rules="required" @radio-data="setNotAntibodyValue" value="false" id="anti-radio2" name="had_antibody_test" label="არა"/>
      <ErrorMessage style="color:#F15524;font-size:16px;margin-left:2rem" name="had_antibody_test"/>
      </div>
      </div>
      <div v-if="showPeriodInput">
      <p class="mb-[3rem]">თუ გახსოვს, გთხოვ მიუთითე ტესტის მიახლოებითი რიცხვი და ანტისხეულების რაოდენობა</p>
      <div class="flex flex-col gap-[2.5rem] ml-[2rem]">
        <basic-input name="antibody_date" type="date" placeholder="რიცხვი"/>
        <basic-input name="antibody_quantity" type="number" placeholder="ანტისხეულების რაოდენობა"/>
      </div>
      </div>
    <div v-if="showPeriodTwoInput">
      <p class="mb-[3rem]">მიუთითე მიახლოებითი პერიოდი<br>(დღე/თვე/წელი) როდის გქონდა Covid-19*</p>
      <div class="flex flex-col gap-[1rem] ml-[2rem]">
        <basic-input name="covid_date" rules="required" type="date" placeholder="დდ/თთ/წწ"/>
      </div>
      </div>
      </div>
      <route-buttons to="identification"></route-buttons>
    </Form>
</template>


<script>
import { Form,ErrorMessage,Field } from 'vee-validate';
import RadioInput from '@/components/inputs/RadioInput.vue';                         
import BasicInput from '@/components/inputs/BasicInput.vue'; 
import RouteButtons from '@/components/RouteButtons.vue';    
import { ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router'
export default {
  emits:["radio-data","save-data"],
  name:"QuestionForm",
 components:{Form,Field,RadioInput,BasicInput,ErrorMessage, RouteButtons},
  setup(){
    const router = useRouter();
    const store = useStore();

    const readyToShow=ref(false);
    const readyToShowInput=ref(false);
    const readyToShowTwoInput=ref(false);

     
        function setHadCovidValue(value){
        readyToShow.value=true;
        }
        function setHadntCovidValue(value){
          readyToShow.value=false;
          readyToShowInput.value=false;
          readyToShowTwoInput.value=false;
          store.dispatch('updateAntiradio','');
          store.dispatch('updateDate', '');
          store.dispatch('updateNumberdate', '');
          store.dispatch('updateAntibody', '');
        }
        function setNotHavingCovidValue(value){
          readyToShow.value=false;
          readyToShowInput.value=false;
          readyToShowTwoInput.value=false;
          store.dispatch('updateAntiradio','');
          store.dispatch('updateDate', '');
          store.dispatch('updateNumberdate', '');
          store.dispatch('updateAntibody', '');
        }
        function setAntibodyValue(value){
          readyToShowInput.value=true;
          readyToShowTwoInput.value=false;
          store.dispatch('updateDate', '');
        }
        function setNotAntibodyValue(value){
          readyToShowInput.value=false;
          readyToShowTwoInput.value=true;
          store.dispatch('updateNumberdate', '');
          store.dispatch('updateAntibody', '');
        }

      function onSubmit(values){
      store.dispatch('updateRadio', values.had_covid);
      store.dispatch('updateAntiradio',values.had_antibody_test);
      store.dispatch('updateNumberdate', values.antibody_date);
      store.dispatch('updateAntibody', values.antibody_quantity);
      store.dispatch('updateDate', values.covid_date);
      return router.push('/vaccination');
  
    }

      return {
        setHadCovidValue,
        setNotHavingCovidValue,
        setHadntCovidValue, 
        showSecondRadio:readyToShow,
        showPeriodInput:readyToShowInput,
        showPeriodTwoInput:readyToShowTwoInput,
        setNotAntibodyValue, 
        setAntibodyValue,
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