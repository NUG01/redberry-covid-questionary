<template>
  <Form class="flex flex-col w-[100%] gap-[4.7rem] mt-[4.2rem]">
   <input-cmp name="name" type="text" placeholder="იოსებ">სახელი*</input-cmp>
   <input-cmp name="surname" type="text" placeholder="ჯუღაშვილი">გვარი*</input-cmp>
   <input-cmp name="email" type="email" placeholder="fbi@gmail.com">მეილი*</input-cmp>
      <div class="mt-[11rem] text-[1.6rem] font-bold text-[#959595] inline-block">
        <hr/>
       <p>*-ით მონიშნული ველების შევსება<br> სავალდებულოა</p>
      </div>
    </Form>
</template>


<script>
import { Field, Form } from 'vee-validate';
import InputCmp from '@/components/inputs/Input.vue';
export default {
  name:"IdentificationForm",
 components:{Field,Form,InputCmp},
  setup(){
  }
}
</script>


<style scoped>

  input[type='text'], 
  input[type='email']
  {
    font-weight: 400;
    font-size: 1.8rem;
    color: #232323;

}
 input::placeholder {
  font-weight: 400;
  font-size: 1.8rem;
  color: #232323;
}
</style>