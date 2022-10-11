<template>
  <Form class="flex flex-col w-[100%] mt-[4.2rem]">
      <div class="flex flex-col gap-[4.6rem]">
      <div class="flex flex-col gap-[8px]">
      <p class="mb-[1.3rem]">გაქვს გადატანილი Covid-19?*</p>
      <div class="flex flex-col gap-[1.1rem]">
        <radio-cmp type="radio" id="radio1" name="radio">კი</radio-cmp>
        <radio-cmp type="radio" id="radio2" name="radio">არა</radio-cmp>
        <radio-cmp type="radio" id="radio3" name="radio">ახლა მაქვს</radio-cmp>
       </div>
      </div>
     <div class="flex flex-col gap-[8px]">
      <p class="mb-[1.3rem]">ანტისხეულების ტესტი გაქვს გაკეთებული?*</p>
      <div class="flex flex-col gap-[1.1rem]">
        <radio-cmp type="radio" id="anti-radio1" name="anti-radio">კი</radio-cmp>
        <radio-cmp type="radio" id="anti-radio2" name="anti-radio">არა</radio-cmp>
      </div>
      </div>
      <div>
      <p class="mb-[3rem]">თუ გახსოვს, გთხოვ მიუთითე ტესტის მიახლოებითი რიცხვი და ანტისხეულების რაოდენობა*</p>
      <div class="flex flex-col gap-[2.5rem] ml-[2rem]">
        <input-cmp name="numberDate" type="text" placeholder="რიცხვი"></input-cmp>
        <input-cmp name="antiBody" type="text" placeholder="ანტისხეულების რაოდენობა"></input-cmp>
      </div>
      </div>
    <div>
      <p class="mb-[3rem]">მიუთითე მიახლოებითი პერიოდი<br>(დღე/თვე/წელი) როდის გქონდა Covid-19*</p>
      <div class="flex flex-col gap-[1rem] ml-[2rem]">
        <input-cmp name="date" type="text" placeholder="დდ/თთ/წწ"></input-cmp>
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
export default {
  name:"QuestionForm",
 components:{Form,Field,RadioCmp,InputCmp,LeftArrow,RightArrow},
  setup(){
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