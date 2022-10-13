<template>
  <Form @submit="onSubmit" class="flex flex-col w-[100%] mt-[4.2rem]">
      <div class="flex flex-col gap-[4.6rem]">
      <div class="flex flex-col gap-[8px]">
      <p class="mb-[1.3rem]">გაქვს გადატანილი Covid-19?*</p>
      <div class="flex flex-col gap-[1.1rem]" rules="required">
        <radio-cmp @radio-data="yesValue" rules="required" value="yes" type="radio" id="radio1" name="radio" label="კი"/>
        <radio-cmp @radio-data="noValue" rules="required" value="no" type="radio" id="radio2" name="radio" label="არა"/>
        <radio-cmp @radio-data="notNowValue" rules="required" value="not_now" type="radio" id="radio3" name="radio" label="ახლა მაქვს"/>
       </div>
      </div>
     <div v-if="showSecondRadio" class="flex flex-col gap-[8px]">
      <p class="mb-[1.3rem]">ანტისხეულების ტესტი გაქვს გაკეთებული?*</p>
      <div class="flex flex-col gap-[1.1rem]">
        <radio-cmp type="radio" rules="required" @radio-data="yesValueAnti" value="yes" id="anti-radio1" name="antiRadio" label="კი"/>
        <radio-cmp type="radio" rules="required" @radio-data="noValueAnti" value="no" id="anti-radio2" name="antiRadio" label="არა"/>
      </div>
      </div>
      <div v-if="showPeriodInput">
      <p class="mb-[3rem]">თუ გახსოვს, გთხოვ მიუთითე ტესტის მიახლოებითი რიცხვი და ანტისხეულების რაოდენობა</p>
      <div class="flex flex-col gap-[2.5rem] ml-[2rem]">
        <input-cmp name="numberDate" @save-data="saveDate" type="text" placeholder="რიცხვი"/>
        <input-cmp name="antiBody" @save-data="saveQuantity" type="text" placeholder="ანტისხეულების რაოდენობა"/>
      </div>
      </div>
    <div v-if="showPeriodTwoInput">
      <p class="mb-[3rem]">მიუთითე მიახლოებითი პერიოდი<br>(დღე/თვე/წელი) როდის გქონდა Covid-19*</p>
      <div class="flex flex-col gap-[1rem] ml-[2rem]">
        <input-cmp name="date" @save-data="covidDate" rules="required|covid_date" type="text" placeholder="დდ/თთ/წწ"/>
      </div>
      </div>
      </div>
       <div class="flex items-center justify-center gap-[12rem] absolute bottom-0 left-[50%] -translate-x-[50%] mb-[10rem]">
   <router-link to="identification"><left-arrow></left-arrow></router-link>
   <button type="submit"><right-arrow></right-arrow></button>
  </div>
    </Form>
</template>


<script>
import { Form, Field } from 'vee-validate';
import RadioCmp from '@/components/inputs/Radio.vue'; 
import InputCmp from '@/components/inputs/Input.vue';
import LeftArrow from '@/components/svg/LeftArrow.vue';
import RightArrow from '@/components/svg/RightArrow.vue';
import { ref, onBeforeMount } from 'vue';
import { useRouter } from 'vue-router'
import { useStore } from 'vuex';
export default {
  emits:["radio-data","save-data"],
  name:"QuestionForm",
 components:{Form,Field,RadioCmp,InputCmp,LeftArrow,RightArrow},
  setup(){
    const store = useStore();
    const router = useRouter();

    const readyToShow=ref(false);
    const readyToShowInput=ref(false);
    const readyToShowTwoInput=ref(false);

      onBeforeMount(() =>{
      store.commit('newRadio', localStorage.getItem('radio'));
      store.commit('newAntiradio', localStorage.getItem('antiRadio'));
      store.commit('newNumberdate', localStorage.getItem('numberDate'));
      store.commit('newAntibody', localStorage.getItem('antiBody'));
      store.commit('newDate', localStorage.getItem('date'));
      });

     
        function yesValue(value){
          readyToShow.value=true;
          localStorage.setItem('radio', value)
        }
        function noValue(value){
          readyToShow.value=false;
          readyToShowInput.value=false;
          readyToShowTwoInput.value=false;
          localStorage.setItem('radio',value)
        }
        function notNowValue(value){
          readyToShow.value=false;
          readyToShowInput.value=false;
          readyToShowTwoInput.value=false;
          localStorage.setItem('radio',value)
        }
        function yesValueAnti(value){
          readyToShowInput.value=true;
          readyToShowTwoInput.value=false;
           localStorage.removeItem("date");
          localStorage.setItem('antiRadio',value)
        }
        function noValueAnti(value){
          readyToShowInput.value=false;
          readyToShowTwoInput.value=true;
          localStorage.removeItem("numberDate");
          localStorage.removeItem("antiBody");
          localStorage.setItem('antiRadio',value)
        }
        function saveDate(value){
          localStorage.setItem('numberDate', value)
        }
        function saveQuantity(value){
          localStorage.setItem('antiBody', value)
        }
        function covidDate(value){
          localStorage.setItem('date', value)
        }

      function onSubmit(values){
      store.dispatch('updateRadio', values.radio);
      store.dispatch('updateAntiradio',values.antiRadio);
      store.dispatch('updateNumberdate', values.numberDate);
      store.dispatch('updateAntibody',values.antiBody);
      store.dispatch('updateDate', values.date);
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