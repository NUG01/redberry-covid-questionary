<template>
  <div class="flex flex-col w-[80%]">
        <label :for="inputName" class="text-[2.2rem] font-bold text-[#232323] mb-[1.2rem]"><slot></slot></label>
        <Field  @change="submit" :type="inputType" :name="inputName" :id="inputName" :placeholder="inputText" class="h-[5rem] pl-[2rem] border-[0.8px] border-[#232323] border-solid"/>
        <div v-if="inputName=='name'">
        <p v-show="nameErr" class="error">სახელის შეყვანა აუცილებელია</p>
        <p v-show="nameErr2" class="error">სახელი უნდა იყოს არანაკლებ 2 სიმბოლოსი</p>
        </div>
      </div>
</template>


<script>
import { Field,ErrorMessage } from 'vee-validate';
import { useStore } from 'vuex'
import { computed } from 'vue'
import { ref } from 'vue'
export default {
  props: ['name','type','placeholder'],
  components:{Field, ErrorMessage},
  setup(props){
    const store = useStore();
    
    const name=computed(function(){
        return store.getters.name;
    });
    const surname=computed(function(){
        return store.getters.surname;
    });
    const email=computed(function(){
        return store.getters.email;
    });

        const inputName=props.name;
        const inputType=props.type;
        const inputText=props.placeholder;

    const nameErr=ref(false);
    const nameErr2=ref(false);
        
 
 function submit(values){
   if(values && values.path[0].name=='name'){
     store.commit('newName',values);
      console.log(store.getters.name);
      if(store.getters.name.length<3){
        nameErr.value=false;
         nameErr2.value= true;
      }else{
        nameErr2.value= false;

      }
      if(store.getters.name==''){
        nameErr2.value= false;
        nameErr.value=true;
      }else{
        nameErr.value=false;

      }
  }
  if(values && values.path[0].name=='surname'){
      store.commit('newSurname',values);
      console.log(store.getters.surname);
  }
  if(values && values.path[0].name=='email'){
      store.commit('newEmail',values);
      console.log(store.getters.email);
  }
};
  
         
    return {inputName,inputType,inputText,submit, nameErr, nameErr2};
  }
}
</script>




<style scoped>
.shown{
  display: block;
}
.error{
  color: #F15524;
  font-size: 16px;
  margin-left: 2rem;
  margin-top: 0.3rem;
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
input[type='text']
  {
    font-weight: 400;
    font-size: 1.8rem;
    color: #232323;
    height: 5rem;
    padding-left: 2rem;
    border: 0.8px solid #232323;
}
</style>