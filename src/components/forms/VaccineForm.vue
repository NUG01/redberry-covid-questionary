<template>
    <Form class="flex flex-col w-[100%] mt-[4.2rem]">
      <div class="flex flex-col gap-[4.6rem]">
     <div class="flex flex-col gap-[8px]">
      <p class="mb-[1.3rem]">უკვე აცრილი ხარ?*</p>
      <div class="flex flex-col gap-[1.1rem]">
        <radio-cmp type="radio" name="vaccine" id="vaccine1">კი</radio-cmp>
        <radio-cmp type="radio" name="vaccine" id="vaccine2">არა</radio-cmp>
      </div>
      </div>
      <div class="flex flex-col gap-[8px]">
      <p class="mb-[1.3rem]">აირჩიე რა ეტაპზე ხარ*</p>
      <div class="flex flex-col gap-[1.1rem]">
        <radio-cmp type="radio" name="stage" id="stage1">პირველი დოზა და დარეგისტრირებული ვარ მეორეზე</radio-cmp>
        <radio-cmp type="radio" name="stage" id="stage2">სრულიად აცრილი ვარ</radio-cmp>
        <radio-cmp type="radio" name="stage" id="stage3">პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე</radio-cmp>
      </div>
      </div>
     <vaccine-text></vaccine-text>
      </div>
      
    </Form>
</template>


<script>
import { Form, Field } from 'vee-validate';
import RadioCmp from '@/components/inputs/Radio.vue';                          
import VaccineText from '@/components/texts/VaccineText.vue';                          
export default {
  name:"QuestionForm",
 components:{Form,Field,RadioCmp,VaccineText},
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