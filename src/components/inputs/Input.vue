<template>
  <div class="flex flex-col w-[80%] gap-[1.2rem]">
        <label :for="inputName" class="text-[2.2rem] font-bold text-[#232323]"><slot></slot></label>
        <Field :type="inputType" :name="inputName" :id="inputName" :placeholder="inputText" class="h-[5rem] pl-[2rem] border-[0.8px] border-[#232323] border-solid"/>
      </div>
</template>
<script>
import { Field } from 'vee-validate';
export default {
  props: ['name','type','placeholder'],
  components:{Field},
  setup(props){
        const inputName=props.name;
        const inputType=props.type;
        const inputText=props.placeholder;

    return {inputName,inputType,inputText};
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