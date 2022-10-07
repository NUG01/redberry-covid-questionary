<template>
  <section class=" h-[100vh] w-[100vw] pt-[9rem] pb-[10rem] px-[20rem]">
   <div class="w-[100%] h-[100%]">
    <div class="flex items-center justify-between border-b-[1.8px] border-[#232323] border-solid">
      <redberry-logo></redberry-logo>
<p class="text-[#232323] text-[4rem] font-bold numbers"><span>{{ value }}</span>/4</p>
    </div>
    <slot></slot>
   </div>
   <div class="flex gap-[12rem] items-center justify-center">
   <router-link  :to='leftLinkPath' :class="{leftHided: leftHiden}"><left-arrow></left-arrow></router-link>
   <router-link :to="rightLinkPath" :class="{rightHided: rightHiden}"><right-arrow></right-arrow></router-link>
   </div>
  </section>
</template>

<script>
import RedberryLogo from '@/components/svg/RedberryLogo.vue';
import LeftArrow from '@/components/svg/LeftArrow.vue';
import RightArrow from '@/components/svg/RightArrow.vue';
import { ref } from "vue";
export default {
  name:"BasicHeader",
  components:{RedberryLogo,LeftArrow,RightArrow},
  props:['number', 'leftHide', 'rightHide', 'rightLink', 'leftLink'],
  setup(props){
     const value=props.number;
     const leftHiden=ref(props.leftHide);
     const rightHiden=ref(props.rightHide);
     const rightLinkPath='/'+ props.rightLink;
     const leftLinkPath='/'+ props.leftLink;
     return {value, leftHiden, rightHiden, rightLinkPath, leftLinkPath};
  }
  
}
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Anonymous+Pro:wght@700&display=swap');
 .numbers{
  font-family: 'Anonymous Pro', sans-serif;
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