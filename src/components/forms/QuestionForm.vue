<template>
  <Form @submit="onSubmit" class="flex flex-col w-[100%] mt-[4.2rem]">
      <div class="flex flex-col gap-[4.6rem]">
      <div class="flex flex-col gap-[8px]">
      <p class="mb-[1.3rem]">გაქვს გადატანილი Covid-19?*</p>
      <div class="flex flex-col gap-[1.1rem]" rules="required">
        <radio-cmp @radio-data="yesValue" rules="required" value="yes" type="radio" id="radio1" name="had_covid" label="კი"/>
        <radio-cmp @radio-data="noValue" rules="required" value="no" type="radio" id="radio2" name="had_covid" label="არა"/>
        <radio-cmp @radio-data="notNowValue" rules="required" value="not_now" type="radio" id="radio3" name="had_covid" label="ახლა მაქვს"/>
       <ErrorMessage style="color:#F15524;font-size:16px;margin-left:2rem" name="had_covid"/>
       </div>
      </div>
     <div v-if="showSecondRadio" class="flex flex-col gap-[8px]">
      <p class="mb-[1.3rem]">ანტისხეულების ტესტი გაქვს გაკეთებული?*</p>
      <div class="flex flex-col gap-[1.1rem]">
        <radio-cmp type="radio" rules="required" @radio-data="yesValueAnti" value="true" id="anti-radio1" name="had_antibody_test" label="კი"/>
        <radio-cmp type="radio" rules="required" @radio-data="noValueAnti" value="false" id="anti-radio2" name="had_antibody_test" label="არა"/>
      <ErrorMessage style="color:#F15524;font-size:16px;margin-left:2rem" name="had_antibody_test"/>
      </div>
      </div>
      <div v-if="showPeriodInput">
      <p class="mb-[3rem]">თუ გახსოვს, გთხოვ მიუთითე ტესტის მიახლოებითი რიცხვი და ანტისხეულების რაოდენობა</p>
      <div class="flex flex-col gap-[2.5rem] ml-[2rem]">
        <input-cmp name="antibody_date" type="text" placeholder="რიცხვი" onfocus="(this.type='date')"/>
        <input-cmp name="antibody_quantity" type="number" placeholder="ანტისხეულების რაოდენობა"/>
      </div>
      </div>
    <div v-if="showPeriodTwoInput">
      <p class="mb-[3rem]">მიუთითე მიახლოებითი პერიოდი<br>(დღე/თვე/წელი) როდის გქონდა Covid-19*</p>
      <div class="flex flex-col gap-[1rem] ml-[2rem]">
        <input-cmp name="covid_date" rules="required" type="text" placeholder="დდ/თთ/წწ" onfocus="(this.type='date')"/>
      </div>
      </div>
      </div>
      <route-buttons to="identification"></route-buttons>
    </Form>
</template>


<script>
import { Form,ErrorMessage,Field } from 'vee-validate';
import RadioCmp from '@/components/inputs/RadioButton.vue';                          
import InputCmp from '@/components/inputs/BasicInput.vue'; 
import RouteButtons from '@/components/RouteButtons.vue';    
import { ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router'
export default {
  emits:["radio-data","save-data"],
  name:"QuestionForm",
 components:{Form,Field,RadioCmp,InputCmp,ErrorMessage, RouteButtons},
  setup(){
    const router = useRouter();
    const store = useStore();

    const readyToShow=ref(false);
    const readyToShowInput=ref(false);
    const readyToShowTwoInput=ref(false);

     
        function yesValue(value){
        readyToShow.value=true;
         store.dispatch('updateRadio', value);
        }
        function noValue(value){
          readyToShow.value=false;
          readyToShowInput.value=false;
          readyToShowTwoInput.value=false;
          store.dispatch('updateAntiradio','');
          store.dispatch('updateDate', '');
          store.dispatch('updateNumberdate', '');
          store.dispatch('updateAntibody', '');
          store.dispatch('updateRadio', value);
        }
        function notNowValue(value){
          readyToShow.value=false;
          readyToShowInput.value=false;
          readyToShowTwoInput.value=false;
          store.dispatch('updateAntiradio','');
          store.dispatch('updateDate', '');
          store.dispatch('updateNumberdate', '');
          store.dispatch('updateAntibody', '');
          store.dispatch('updateRadio', value);
        }
        function yesValueAnti(value){
          readyToShowInput.value=true;
          readyToShowTwoInput.value=false;
          store.dispatch('updateDate', '');
          store.dispatch('updateAntiradio',value);
        }
        function noValueAnti(value){
          readyToShowInput.value=false;
          readyToShowTwoInput.value=true;
          store.dispatch('updateNumberdate', '');
          store.dispatch('updateAntibody', '');
          store.dispatch('updateAntiradio',value);
        }
        function saveDate(value){
          store.dispatch('updateNumberdate', value);
        }
        function saveQuantity(value){
          store.dispatch('updateAntibody', value);
        }
        function covidDate(value){
          store.dispatch('updateDate', value);
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
        yesValue,
        notNowValue,
        noValue, 
        showSecondRadio:readyToShow,
        showPeriodInput:readyToShowInput,
        showPeriodTwoInput:readyToShowTwoInput,
        noValueAnti, 
        yesValueAnti,
        saveDate,
        saveQuantity,
        covidDate,
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