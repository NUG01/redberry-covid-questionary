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
        <input-cmp name="antibody_date" @save-data="saveDate" type="text" placeholder="რიცხვი" onfocus="(this.type='date')"/>
        <input-cmp name="antibody_quantity" @save-data="saveQuantity" type="number" placeholder="ანტისხეულების რაოდენობა"/>
      </div>
      </div>
    <div v-if="showPeriodTwoInput">
      <p class="mb-[3rem]">მიუთითე მიახლოებითი პერიოდი<br>(დღე/თვე/წელი) როდის გქონდა Covid-19*</p>
      <div class="flex flex-col gap-[1rem] ml-[2rem]">
        <input-cmp name="covid_date" @save-data="covidDate" rules="required" type="text" placeholder="დდ/თთ/წწ" onfocus="(this.type='date')"/>
      </div>
      </div>
      </div>
       <div class="flex items-center justify-center gap-[12rem] absolute bottom-0 left-[50%] -translate-x-[50%] mb-[10rem]">
   <router-link to="identification" class="z-50"><left-arrow></left-arrow></router-link>
   <button type="submit" class="z-50"><right-arrow></right-arrow></button>
  </div>
    </Form>
</template>


<script>
import { Form, Field,ErrorMessage } from 'vee-validate';
import RadioCmp from '@/components/inputs/Radio.vue'; 
import InputCmp from '@/components/inputs/Input.vue';
import LeftArrow from '@/components/svg/LeftArrow.vue';
import RightArrow from '@/components/svg/RightArrow.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router'
import { useStore } from 'vuex';
export default {
  emits:["radio-data","save-data"],
  name:"QuestionForm",
 components:{Form,Field,RadioCmp,InputCmp,LeftArrow,RightArrow, ErrorMessage},
  setup(){
    const store = useStore();
    const router = useRouter();

    const readyToShow=ref(false);
    const readyToShowInput=ref(false);
    const readyToShowTwoInput=ref(false);

     
        function yesValue(value){
          readyToShow.value=true;
          localStorage.setItem('had_covid', value)
        }
        function noValue(value){
          readyToShow.value=false;
          readyToShowInput.value=false;
          readyToShowTwoInput.value=false;
          localStorage.removeItem("had_antibody_test");
          localStorage.removeItem("covid_date");
          localStorage.removeItem("antibody_date");
          localStorage.removeItem("antibody_quantity");
          localStorage.setItem('had_covid',value)
        }
        function notNowValue(value){
          readyToShow.value=false;
          readyToShowInput.value=false;
          readyToShowTwoInput.value=false;
          localStorage.removeItem("had_antibody_test");
          localStorage.removeItem("covid_date");
          localStorage.removeItem("antibody_date");
          localStorage.removeItem("antibody_quantity");
          localStorage.setItem('had_covid',value)
        }
        function yesValueAnti(value){
          readyToShowInput.value=true;
          readyToShowTwoInput.value=false;
           localStorage.removeItem("covid_date");
          localStorage.setItem('had_antibody_test',value)
        }
        function noValueAnti(value){
          readyToShowInput.value=false;
          readyToShowTwoInput.value=true;
          localStorage.removeItem("antibody_date");
          localStorage.removeItem("antibody_quantity");
          localStorage.setItem('had_antibody_test',value)
        }
        function saveDate(value){
          localStorage.setItem('antibody_date', value);
        }
        function saveQuantity(value){
          localStorage.setItem('antibody_quantity', value)
        }
        function covidDate(value){
          localStorage.setItem('covid_date', value)
        }

      function onSubmit(values){
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