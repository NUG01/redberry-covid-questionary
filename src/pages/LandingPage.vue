<template>
<div class="flex items-start justify-center h-[100vh] w-[100vw]">
  <div class="flex flex-col items-center">
<the-logo></the-logo>
<div class="overflow-hidden mt-[10rem]" @mouseover="shadowTrue" @mouseleave="shadowFalse">
  <div class="textAnim font-bold text-[#232323]">
  <router-link to='/identification' :class="{shadow: shadowText}">
  <p data-text="კითხვარის" class="p1 z-10 relative text-center text-[3rem] tracking-wide mr-[3px]">კითხვარის</p>
  <p data-text="დაწყება" class="p2 z-10 relative text-center text-[3rem] tracking-wide">დაწყება</p>
  </router-link>
  </div>
</div>
  </div>
</div>
</template>

<script>
import TheLogo from '@/components/svg/TheLogo.vue';
import { ref } from "vue";
export default {
  name:"landing",
  components:{TheLogo},
  setup(){
     const shadowText=ref(false);

     function shadowTrue(){
     shadowText.value=true;
     };
     function shadowFalse(){
     shadowText.value=false;

     };

     return {shadowText, shadowTrue, shadowFalse};
  }
}
</script>


<style scoped>
.animation{
 animation: scaleDown 0.7s ease-in;
}
.textAnim{
 animation: textAnim 1.8s ease-out;
}

.shadow .p1::after{
  content: attr(data-text);
  -webkit-text-stroke: 1px #232323;
  color: #EAEAEA;
  position: absolute;
 top:1px;
 left:2px;
  z-index: -1;

}
.shadow .p2::before{
  content: attr(data-text);
  -webkit-text-stroke: 1px #232323;
  color: #EAEAEA;
  position: absolute;
 top:1px;
 left:26px;
  z-index: -1;

}

@keyframes scaleDown{
  0%{
    transform: scale(31);
  }
  100%{
    transform: scale(0.1);
  }}
@keyframes textAnim{
  0%{
    transform: translateY(-100px);
  }
  45%{
    transform: translateY(-100px);
    
  }
  100%{
    transform: translateY(0);

  }
}
</style>