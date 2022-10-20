<template>
  <section class=" h-[100vh] w-[100vw] pt-[9rem] pb-[10rem] px-[20rem]">
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
import RedberryLogo from '@/components/icons/RedberryLogo.vue';
export default {
  name:"BasicHeader",
  components:{RedberryLogo},
  props:['number'],
  setup(props){
     const value=props.number;
     return {value};
  }
  
}
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Anonymous+Pro:wght@700&display=swap');
 .numbers{
  font-family: 'Anonymous Pro', sans-serif;
 }
 .active{
  pointer-events: all;
 }
 .unactive{
  pointer-events: none;
 }
 .leftHided{
  opacity: 0;
  pointer-events: none;
 }
 .rightHided{
  opacity: 0;
  pointer-events: none;
 }
</style>