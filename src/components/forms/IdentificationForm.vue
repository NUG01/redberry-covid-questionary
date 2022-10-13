<template>
  <Form @submit="onSubmit" class="flex flex-col w-[100%] gap-[4.7rem] mt-[4.2rem]">
 
  <input-cmp @save-data="saveName" rules="required|min:3" name="name" type="text" placeholder="იოსებ" label="სახელი*"/>
   <input-cmp @save-data="saveSurname" rules="required|min:3" name="surname" type="text" placeholder="ჯუღაშვილი" label="გვარი*"/>
   <input-cmp @save-data="saveEmail" rules="required|email|redberry_email" name="email" type="email" placeholder="fbi@gmail.com" label="მეილი*"/>
    
    <div class="mt-[11rem] text-[1.6rem] font-bold text-[#959595] inline-block">
    <hr/>
    <p>*-ით მონიშნული ველების შევსება<br>სავალდებულოა</p>
    </div>
    <div class="flex items-center justify-center gap-[12rem] absolute bottom-0 left-[50%] -translate-x-[50%] mb-[10rem]">
    <router-link to="''" class="hidden"><left-arrow></left-arrow></router-link>
    <button type="submit"><right-arrow></right-arrow></button>
  </div>
    </Form>
</template>


<script>
import { Form,useField } from 'vee-validate';
import { useStore } from 'vuex';
import { computed,ref } from 'vue';
import InputCmp from '@/components/inputs/Input.vue';
import LeftArrow from '@/components/svg/LeftArrow.vue';
import RightArrow from '@/components/svg/RightArrow.vue';
import { useRouter } from 'vue-router'
import { onBeforeMount} from 'vue'
export default {
  emits:["save-data"],
  props:['emitInput'],
  name:"IdentificationForm",
 components:{Form,InputCmp,LeftArrow,RightArrow},
  setup(){
    const store = useStore();
    const router = useRouter();

       onBeforeMount(() =>{
      store.commit('newName',localStorage.getItem('name'));
      store.commit('newSurname',localStorage.getItem('surname'));
      store.commit('newEmail',localStorage.getItem('email'));
      });
        
        function saveName(value){
          localStorage.setItem('name', value)
        }
        function saveSurname(value){
          localStorage.setItem('surname',value)
        }
        function saveEmail(value){
          localStorage.setItem('email',value)
        }

    
    
      function onSubmit(values){
      store.dispatch('updateName', values.name);
      store.dispatch('updateSurname',values.surname);
      store.dispatch('updateEmail', values.email);
       return router.push('/covid-questions');
  
    }
    return{
    onSubmit,
    saveName,
    saveSurname,
    saveEmail
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