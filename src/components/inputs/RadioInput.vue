<template>
<div>
   <div class="flex gap-[2.2rem] items-center relative ml-[2rem]" >
        <Field  @click="emitRadio" :rules="rules" :value="value" :type="inputType" :id="inputId" :name="inputName" />
        <label :for="inputId" class="radioLabel">{{ label }}</label>
        </div>
</div>
</template>

<script>
import { Field } from 'vee-validate';
import { onMounted } from 'vue';
export default {
  props: ['name','type','id','label','value','rules'],
  components:{ Field },
  setup(props,context){
        const rules=props.rules;
        const value=props.value;
        const label=props.label;
        const inputName=props.name;
        const inputType=props.type
        const inputId=props.id

function emitRadio(){
  context.emit('radio-data')
}

    return {inputName,inputType,inputId,label,emitRadio,value,rules};
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
 input::placeholder {
  font-weight: 400;
  font-size: 1.8rem;
  color: #232323;
}
</style>