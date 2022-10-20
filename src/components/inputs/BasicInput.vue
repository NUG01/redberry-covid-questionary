<template>

  <div class="flex flex-col w-[80%]">
    <label :for="inputName" class="text-[2.2rem] font-bold text-[#232323] mb-[1.2rem]">{{ label }}</label>
    <Field @input="emit" :value="val" :rules="rules" :type="inputType" :onfocus="onfocus" :name="inputName" :id="inputName" :placeholder="inputText" class="h-[5rem] pl-[2rem] border-[0.8px] border-[#232323] border-solid text-[1.6rem]"/>
  <ErrorMessage style="color:#F15524;font-size:16px;margin-left:2rem" :name="inputName"/>
  </div>

</template>


<script>
import { Field, ErrorMessage } from 'vee-validate';
import { computed} from 'vue';
export default {
  props: ['name','type','placeholder','label', 'rules','onfocus'],
  components:{Field, ErrorMessage},
  setup(props,context){


        const rules=props.rules;
        const label=props.label;
        const inputName=props.name;
        const inputType=props.type;
        const inputText=props.placeholder;
        const onfocus=props.onfocus;


        function emit(value){
          context.emit('save-data', value.target.value)
        }
        
        const val = computed((value) => localStorage.getItem(inputName));

    return {inputName,inputType,inputText,label,rules,emit,val,onfocus};
  }
}
</script>




<style scoped>
input[type="date"]::-webkit-inner-spin-button,
input[type="date"]::-webkit-calendar-picker-indicator {
  display: none;
  -webkit-appearance: none;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type=number] {
  -moz-appearance: textfield;
}
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