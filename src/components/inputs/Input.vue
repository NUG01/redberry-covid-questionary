<template>
  <div class="flex flex-col w-[80%]">
        <label :for="inputName" class="text-[2.2rem] font-bold text-[#232323] mb-[1.2rem]"><slot></slot></label>
        <Field :type="inputType" :name="inputName" :id="inputName" :placeholder="inputText" class="h-[5rem] pl-[2rem] border-[0.8px] border-[#232323] border-solid"/>
        <div v-if="inputName=='name'">
        <p v-if="!comp1.value" class="error">სახელის შეყვანა აუცილებელია</p>
        <p v-if="comp2.value" class="error">სახელი უნდა იყოს არანაკლებ 2 სიმბოლოსი</p>
        </div>
      </div>
</template>


<script>
import { Field } from 'vee-validate';
import { useStore } from 'vuex'
import { computed } from 'vue'
import { ref } from 'vue'
export default {
  props: ['name','type','placeholder'],
  components:{Field},
  emits:["submitData"],
  setup(props){
    const store = useStore();

    const comp1=computed(function(){
      return store.getters.nameErr
    })
    const comp2=computed(function(){
      return store.getters.nameErr2
    })

        const inputName=props.name;
        const inputType=props.type;
        const inputText=props.placeholder;

       console.log(comp1, comp2.value)

    return {inputName,inputType,inputText,comp1,comp2};
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