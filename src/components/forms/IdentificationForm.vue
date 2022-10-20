<template>
  <Form @submit="onSubmit" class="flex flex-col w-[100%] gap-[4.7rem] mt-[4.2rem]">
 
   <input-cmp rules="required|min:2" name="first_name" type="text" placeholder="იოსებ" label="სახელი*"/>
   <input-cmp rules="required|min:2" name="last_name" type="text" placeholder="ჯუღაშვილი" label="გვარი*"/>
   <input-cmp  rules="required|email|redberry_email" name="email" type="email" placeholder="fbi@gmail.com" label="მეილი*"/>
    
    <div class="mt-[11rem] text-[1.6rem] font-bold text-[#959595] inline-block">
    <hr/>
    <p>*-ით მონიშნული ველების შევსება<br>სავალდებულოა</p>
    </div>
   <route-buttons to="/" class="hidden"></route-buttons>
    </Form>
</template>


<script>
import { Form} from 'vee-validate';                       
import InputCmp from '@/components/inputs/BasicInput.vue'; 
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import RouteButtons from '@/components/RouteButtons.vue';    
export default {
  props:['emitInput'],
  name:"IdentificationForm",
 components:{Form,InputCmp,RouteButtons},
  setup(){
    const router = useRouter();
    const store = useStore();

      function onSubmit(values){
      store.dispatch('updateName', values.first_name);
      store.dispatch('updateSurname',values.last_name);
      store.dispatch('updateEmail', values.email);
       return router.push('/covid-questions');
  
    }
    return{
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