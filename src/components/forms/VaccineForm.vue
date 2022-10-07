<template>
    <Form class="flex flex-col w-[100%] mt-[4.2rem]">
      <div class="flex flex-col gap-[4.6rem]">
     <div class="flex flex-col gap-[8px]">
      <p class="mb-[1.3rem]">უკვე აცრილი ხარ?*</p>
      <div class="flex flex-col gap-[1.1rem]">
        <div class="flex gap-[2.2rem] items-center relative ml-[2rem]">
        <Field type="radio" id="vaccine1" name="vaccine"/>
        <label for="vaccine1" class="radioLabel">კი</label>
        </div>
        <div class="flex gap-[2.2rem] items-center relative ml-[2rem]">
        <Field type="radio" id="vaccine2" name="vaccine"/>
        <label for="vaccine2" class="radioLabel">არა</label>
      </div>
      </div>
      </div>
      <div class="flex flex-col gap-[8px]">
      <p class="mb-[1.3rem]">აირჩიე რა ეტაპზე ხარ*</p>
      <div class="flex flex-col gap-[1.1rem]">
        <div class="flex gap-[2.2rem] items-center relative ml-[2rem]">
        <Field type="radio" id="stage1" name="stage"/>
        <label for="stage1" class="radioLabel">პირველი დოზა და დარეგისრირებული ვარ მეორეზე</label>
        </div>
        <div class="flex gap-[2.2rem] items-center relative ml-[2rem]">
        <Field type="radio" id="stage2" name="stage"/>
        <label for="stage2" class="radioLabel">სრულიად აცრილი ვარ</label>
        </div>
        <div class="flex gap-[2.2rem] items-center relative ml-[2rem]">
        <Field type="radio" id="stage3" name="stage"/>
        <label for="stage3" class="radioLabel">პირველი დოზა და არ დარეგისრირებულვარ მეორეზე</label>
        </div>
      </div>
      </div>
     
      </div>
      <div>
        <p class="text-[2rem] font-normal text-[#232323] ml-[6.2rem] mt-[4rem]">რომ არ გადადო,<br>ბარემ ახლავ დარეგისტრირდი<br><a class="text-[#1289AE]" href="https://booking.mog.gov.ge/">https://booking.mog.gov.ge/</a></p>
        <p class="text-[2rem] font-normal ml-[6.2rem] mt-[4rem]"><a class="text-[#1289AE]" href="https://booking.mog.gov.ge/"><span>👉</span>https://booking.mog.gov.ge/</a></p>
        <div class="text-[2rem] font-normal text-[#232323] ml-[6.2rem] mt-[4rem]">
        <p>ახალი პროტოკოლით კოვიდის გადატანიდან 1<br>თვის შემდეგ შეგიძლიათ ვაქცინის გაკეთება.</p>
        <p class="mt-[2rem]">👉რეგისტრაციის ბმული<br><a class="text-[#1289AE]" href="https://booking.mog.gov.ge/">https://booking.mog.gov.ge/</a></p>
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