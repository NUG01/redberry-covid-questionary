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


        function saveRadioOnRefresh(storageName,storageValue,elementId){
         onMounted(()=>{
            if(localStorage.getItem(storageName)==storageValue && document.getElementById(elementId)){
            const elem = document.getElementById(elementId)
            elem.click(); 
          }
          });
        };
        
        saveRadioOnRefresh('had_vaccine','yes','vaccine1')
        saveRadioOnRefresh('had_vaccine','no','vaccine2')
      
        saveRadioOnRefresh('had_antibody_test','true','anti-radio1')
        saveRadioOnRefresh('had_antibody_test','false','anti-radio2')
        
        saveRadioOnRefresh('had_covid','yes','radio1')
        saveRadioOnRefresh('had_covid','no','radio2')
        saveRadioOnRefresh('had_covid','not_now','radio3')
         
        saveRadioOnRefresh('vaccination_stage','first_dose_and_registered','stage1')
        saveRadioOnRefresh('vaccination_stage','fully_vaccinated','stage2')
        saveRadioOnRefresh('vaccination_stage','first_dose_and_not_registered','stage3')

        saveRadioOnRefresh('waiting','registered_and_waiting','wait1')
        saveRadioOnRefresh('waiting','not_planning','wait2')
        saveRadioOnRefresh('waiting','planning_vaccination','wait3')

        saveRadioOnRefresh('non_formal_meetings','twice_a_week','meet1')
        saveRadioOnRefresh('non_formal_meetings','once_a_week','meet2')
        saveRadioOnRefresh('non_formal_meetings','once_two_week','meet3')
        saveRadioOnRefresh('non_formal_meetings','once_a_month','meet4')
        
        saveRadioOnRefresh('number_of_days_from_office','0','day')
        saveRadioOnRefresh('number_of_days_from_office','1','day1')
        saveRadioOnRefresh('number_of_days_from_office','2','day2')
        saveRadioOnRefresh('number_of_days_from_office','3','day3')
        saveRadioOnRefresh('number_of_days_from_office','4','day4')
        saveRadioOnRefresh('number_of_days_from_office','5','day5')
        
        function emitRadio(value){
        context.emit('radio-data', value.target.value)
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