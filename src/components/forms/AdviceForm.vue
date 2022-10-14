<template>
<div class="form-control scrollHide">
 <advice-text></advice-text>
    <Form @submit="onSubmit" class="flex flex-col w-[100%] mt-[4.2rem]">
      <div class="flex flex-col gap-[4.6rem]">
     <div class="flex flex-col gap-[8px]">
      <p class="mb-[1.3rem]">რა სიხშირით შეიძლება გვქონდეს საერთო<br>არაფორმალური ონლაინ შეხვედრები, სადაც ყველა<br>სურვილისამებრ ჩაერთვება?*</p>
      <div class="flex flex-col gap-[1.1rem]">
        <radio-cmp type="radio" rules="required" id="meet1" name="meets" label="კვირაში ორჯერ"/>
        <radio-cmp type="radio" rules="required" id="meet2" name="meets" label="კვირაში ერთხელ"/>
        <radio-cmp type="radio" rules="required" id="meet3" name="meets" label="ორ კვირაში ერთხელ"/>
        <radio-cmp type="radio" rules="required" id="meet4" name="meets" label="თვეში ერთხელ"/>
         <ErrorMessage style="color:#F15524;font-size:16px;margin-left:2rem" name="meets"/>
      </div>
      </div>
      <div class="flex flex-col gap-[8px]">
      <p class="mb-[1.3rem]">კვირაში რამდენი დღე ისურვებდით ოფისიდან მუშაობას?*</p>
      <div class="flex flex-col gap-[1.1rem]">
         <radio-cmp type="radio" rules="required" id="day" name="days" label="0"/>
         <radio-cmp type="radio" rules="required" id="day1" name="days" label="1"/>
         <radio-cmp type="radio" rules="required" id="day2" name="days" label="2"/>
         <radio-cmp type="radio" rules="required" id="day3" name="days" label="3"/>
         <radio-cmp type="radio" rules="required" id="day4" name="days" label="4"/>
         <radio-cmp type="radio" rules="required" id="day5" name="days" label="5"/>
          <ErrorMessage style="color:#F15524;font-size:16px;margin-left:2rem" name="days"/>
      </div>
      </div>
     
      </div>
     <div class="flex flex-col w-[100%] gap-[1.2rem]">
      <label class="label">რას ფიქრობ ფიზიკურ შეკრებებზე?</label>
      <textarea class="area border-[0.8px] border-[#232323] border-solid"></textarea>
     </div>
     <div class="flex flex-col w-[100%] gap-[1.2rem]">
      <label class="label">რას ფიქრობ არსებულ გარემოზე:<br>რა მოგწონს, რას დაამატებდი, რას შეცვლიდი?</label>
      <textarea class="area border-[0.8px] border-[#232323] border-solid"></textarea>
     </div>
     <button type="button" class="self-end bg-[#208298] rounded-[42px] flex items-center justify-center mt-[5.4rem] w-[18rem] h-[5.6rem]"><p class="p-[17px] button">დასრულება</p></button>
     <router-link  :to="'vaccination'" class="mt-[7.4rem] self-end"><left-arrow></left-arrow></router-link>
    </Form>
</div>
</template>


<script>
import { Form, Field, ErrorMessage } from 'vee-validate';
import LeftArrow from '@/components/svg/LeftArrow.vue';
import AdviceText from '@/components/texts/AdviceText.vue';
import RadioCmp from '@/components/inputs/Radio.vue';                          
import InputCmp from '@/components/inputs/Input.vue';                          

export default {
  name:"AdvicesForm",
 components:{Form,Field,LeftArrow, AdviceText, RadioCmp,InputCmp,ErrorMessage},
  setup(){
    
  }
}
</script>


<style scoped>
form{
  font-family: sans-serif;
  letter-spacing: 1px;
}
.button{
  color:white;
  letter-spacing: 1px;
}
button{
  transition: all 0.3s ease-out;
}
button:hover{
 box-shadow: 0 0 4px 1px rgb(180, 180, 180);
  }
.text{
  font-weight: 400 !important;
  color: #232323 !important;
  font-size: 2.2rem !important;
}
textarea {
  resize: none;
  padding: 1rem;
  font-size: 2rem;
}
 .scrollHide::-webkit-scrollbar {
    display: none;
}

.scrollHide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.area{
  max-width: 100%;
  min-height: 18.4rem;
  min-width: 100%;
  max-height: 18.4rem;
  margin-top: 2rem;
}
.form-control{
  margin-top: 0.5rem;
  overflow: scroll;
  height: 93rem !important;
  padding-bottom: 12rem;
}
.label{
  font-weight: 700;
  font-size: 2.2rem;
  color: #232323;
  margin-top: 5rem;
}
 input[type='radio']:before {
  height: 23px;
  border-radius: 15px;
  top: 50%;
  width: 23px;
  left:0;
  transform: translateY(-33%);
  position: absolute;
  background-color: #EAEAEA;
  content: '';
  display: inline-block;
  visibility: visible;
  border: 1px solid #232323;
    }

input[type='radio']:checked:after {
  width: 17px;
  height: 17px;
  border-radius: 15px;
  top: 50%;
  left: 0;
  transform: translate(3px,-27.7%);
  position: absolute;
  background-color: #232323;
  content: '';
  display: inline-block;
  visibility: visible;
    }
input[type='text']{
  width:80%;
}
input[type='radio']{
  width:23px;
  height:23px;
  visibility: hidden;
}
input[type='radio']:hover,
.radioLabel:hover{
 cursor: pointer;
}

label{
  font-size: 2rem;
  color:#232323;
  font-weight: 400;
}
p{
  font-size: 2.2rem;
  color:#232323;
  font-weight: 700;
}

 input[type='text']
  {
    font-weight: 400;
    font-size: 1.8rem;
    color: #232323;
    height: 5rem;
    padding-left: 2rem;
    border: 0.8px solid #232323;
}
 input::placeholder {
  font-weight: 400;
  font-size: 1.8rem;
  color: #232323;
}
</style>