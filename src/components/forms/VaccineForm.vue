<template>
    <Form class="flex flex-col w-[100%] mt-[4.2rem]">
      <div class="flex flex-col gap-[4.6rem]">
     <div class="flex flex-col gap-[8px]">
      <p class="mb-[1.3rem]">უკვე აცრილი ხარ?*</p>
      <div class="flex flex-col gap-[1.1rem]">
        <radio-cmp type="radio" name="vaccine" id="vaccine1" label="კი"/>
        <radio-cmp type="radio" name="vaccine" id="vaccine2" label="არა"/>
      </div>
      </div>
      <div class="flex flex-col gap-[8px]">
      <p class="mb-[1.3rem]">აირჩიე რა ეტაპზე ხარ*</p>
      <div class="flex flex-col gap-[1.1rem]">
        <radio-cmp type="radio" name="stage" id="stage1" label="პირველი დოზა და დარეგისტრირებული ვარ მეორეზე"/>
        <radio-cmp type="radio" name="stage" id="stage2" label="სრულიად აცრილი ვარ"/>
        <radio-cmp type="radio" name="stage" id="stage3" label="პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე"/>
      </div>
      </div>
     <vaccine-text></vaccine-text>
      </div>
       <div class="flex items-center justify-center gap-[12rem] absolute bottom-0 left-[50%] -translate-x-[50%] mb-[10rem]">
   <router-link to="covid-questions"><left-arrow></left-arrow></router-link>
   <button type="submit"><right-arrow></right-arrow></button>
  </div>
    </Form>
</template>


<script>
import { Form, Field } from 'vee-validate';
import RadioCmp from '@/components/inputs/Radio.vue';                          
import VaccineText from '@/components/texts/VaccineText.vue';    
import LeftArrow from '@/components/svg/LeftArrow.vue';
import RightArrow from '@/components/svg/RightArrow.vue';                      
export default {
  name:"QuestionForm",
 components:{Form,Field,RadioCmp,VaccineText,LeftArrow,RightArrow},
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