<template>
  <Form @submit="onSubmit" class="flex flex-col w-[100%] gap-[4.7rem] mt-[4.2rem]">
   <input-cmp name="name" type="text" placeholder="იოსებ">სახელი*</input-cmp>
   <input-cmp name="surname" type="text" placeholder="ჯუღაშვილი">გვარი*</input-cmp>
   <input-cmp name="email" type="email" placeholder="fbi@gmail.com">მეილი*</input-cmp>
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
import { Form } from 'vee-validate';
import { useStore } from 'vuex';
import { computed } from 'vue';
import InputCmp from '@/components/inputs/Input.vue';
import LeftArrow from '@/components/svg/LeftArrow.vue';
import RightArrow from '@/components/svg/RightArrow.vue';
// import { useRouter } from 'vue-router'
export default {
  name:"IdentificationForm",
 components:{Form,InputCmp,LeftArrow,RightArrow},
  setup(){
    const store = useStore();
      
      // const router = useRouter()
    //    const nameErr=computed(function(){
    //      return store.getters.nameErr;
    //  });

     const nameErr=computed(function(){
         return store.getters.nameErr;
     });
     const nameErr2=computed(function(){
         return store.getters.nameErr2;
     });
    
    
    function onSubmit(values){
    store.commit('newName',values.name);
    store.commit('newSurname',values.surname);
    store.commit('newEmail',values.email);
    // return router.push('/covid-questions');
     function getObjKey(obj, value) {
       return Object.keys(obj).find(key => obj[key] === value);
}

    
      if(values && getObjKey(values,store.getters.name)=='name'){
        if(!store.getters.name=='' && store.getters.name.length<3){
        store.commit('newErr',true);
        store.commit('newErr2',false);
      }else{
        store.commit('newErr2',true);

      }
      if(store.getters.name==null){
        store.commit('newErr2',true);
        store.commit('newErr',false);
      }else{
        store.commit('newErr',true);

      }
  }



  if(values && values.name=='surname'){
      //
  }
  if(values && values.name=='email'){
      //
  }
  
    }
    return{onSubmit,nameErr,nameErr2}
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