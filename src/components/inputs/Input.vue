<template>

  <div class="flex flex-col w-[80%]">
    <label :for="inputName" class="text-[2.2rem] font-bold text-[#232323] mb-[1.2rem]">{{ label }}</label>
    <Field :rules="rules" :type="inputType" :name="inputName" :id="inputName" :placeholder="inputText" class="h-[5rem] pl-[2rem] border-[0.8px] border-[#232323] border-solid"/>
  <ErrorMessage style="color:#F15524;font-size:16px;margin-left:2rem" :name="inputName"/>
  </div>

</template>


<script>
import { Field, ErrorMessage } from 'vee-validate';
import { ref} from 'vue';
export default {
  props: ['name','type','placeholder', 'value','label', 'rules'],
  components:{Field, ErrorMessage},
  emits:["emit-input"],
  setup(props,context){

        const value=ref('');

        const rules=props.rules;
        const label=props.label;
        const inputName=props.name;
        const inputType=props.type;
        const inputText=props.placeholder;

        // const handleChange = (value) => {
        //     context.emit("emit-input", value.target.value)
        // }

    return {inputName,inputType,inputText,modelValue:value.value,label,rules};
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