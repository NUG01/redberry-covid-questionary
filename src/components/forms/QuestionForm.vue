<template>
  <Form class="flex flex-col w-[100%] mt-[4.2rem]">
      <div class="flex flex-col gap-[4.6rem]">
      <div class="flex flex-col gap-[8px]">
      <p class="mb-[1.3rem]">გაქვს გადატანილი Covid-19?*</p>
      <div class="flex flex-col gap-[1.1rem]">
        <div class="flex gap-[2.2rem] items-center relative ml-[2rem]">
        <Field type="radio" id="radio1" name="radio"/>
        <label for="radio1" class="radioLabel">კი</label>
        </div>
        <div class="flex gap-[2.2rem] items-center relative ml-[2rem]">
        <Field type="radio" id="radio2" name="radio"/>
        <label for="radio2" class="radioLabel">არა</label>
        </div>
        <div class="flex gap-[2.2rem] items-center relative ml-[2rem]">
        <Field type="radio" id="radio3" name="radio"/>
        <label for="radio3" class="radioLabel">ახლა მაქვს</label>
        </div>
      </div>
      </div>
     <div class="flex flex-col gap-[8px]">
      <p class="mb-[1.3rem]">ანტისხეულების ტესტი გაქვს გაკეთებული?*</p>
      <div class="flex flex-col gap-[1.1rem]">
        <div class="flex gap-[2.2rem] items-center relative ml-[2rem]">
        <Field type="radio" id="anti-radio1" name="anti-radio"/>
        <label for="anti-radio1" class="radioLabel">კი</label>
        </div>
        <div class="flex gap-[2.2rem] items-center relative ml-[2rem]">
        <Field type="radio" id="anti-radio2" name="anti-radio"/>
        <label for="anti-radio2" class="radioLabel">არა</label>
      </div>
      </div>
      </div>
      <div>
      <p class="mb-[3rem]">თუ გახსოვს, გთხოვ მიუთითე ტესტის მიახლოებითი<br>რიცხვი და ანტისხეულების რაოდენობა*</p>
      <div class="flex flex-col gap-[2.5rem] ml-[2rem]">
        <Field type="text" name="numberDate" placeholder="რიცხვი"/>
        <Field type="text" name="antiBody" placeholder="ანტისხეულების რაოდენობა"/>
      </div>
      </div>
    <div>
      <p class="mb-[3rem]">მიუთითე მიახლოებითი პერიოდი (დღე/თვე/წელი)<br>როდის გქონდა Covid-19*</p>
      <div class="flex flex-col gap-[1rem] ml-[2rem]">
        <Field type="text" name="date" placeholder="დდ/თთ/წწ"/>
      </div>
      </div>
      </div>
    </Form>
</template>


<script>
import { Form, Field } from 'vee-validate';
export default {
  name:"QuestionForm",
 components:{Form,Field},
  setup(){
  }
}
</script>



<style scoped>
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