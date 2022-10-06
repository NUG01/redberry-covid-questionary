<template>
  <section class=" h-[100vh] w-[100vw] pt-[9rem] pb-[15rem] px-[20rem]">
   <div class="w-[100%] h-[100%]">
    <div class="flex items-center justify-between border-b-[1.8px] border-[#232323] border-solid">
      <redberry-logo></redberry-logo>
<p class="text-[#232323] text-[4rem] font-bold numbers"><span>{{ value }}</span>/4</p>
    </div>
    <slot></slot>
   </div>
  </section>
</template>

<script>
import RedberryLogo from './svg/RedberryLogo.vue';
import {  ref } from 'vue';
export default {
  components:{RedberryLogo},
  props:['number'],
  setup(props){
     const value=ref(props.number);
     return {value};
  }
  
}
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Anonymous+Pro:wght@700&display=swap');
 .numbers{
  font-family: 'Anonymous Pro', sans-serif;
 }
</style>