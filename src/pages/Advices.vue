<template>
<section>
  <basic-header :number=4 :leftHide=true :rightHide=true :leftLink="'vaccination'" :rightLink="''">
    <div class="flex items-start justify-between">
    <advice-form></advice-form>
    <img class="mt-[7rem]" src="src/assets/bike.png">
    <div class="absolute w-[62rem] h-[7.5rem] top-[30%] left-[61%] rectangle"></div>
  </div>
  <div class="flex items-center justify-center gap-[12rem]">
   <router-link to="vaccination" class="hidden"><left-arrow></left-arrow></router-link>
   <router-link class="hidden" to="'covid-questions'"><right-arrow></right-arrow></router-link>
  </div>
  </basic-header>
</section>
</template>


<script>
import BasicHeader from '@/components/BasicHeader.vue';
import AdviceForm from '@/components/forms/AdviceForm.vue';
import LeftArrow from '@/components/svg/LeftArrow.vue';
import RightArrow from '@/components/svg/RightArrow.vue';
export default {
  name: "Advices",
  components:{BasicHeader, AdviceForm,RightArrow,LeftArrow},
  
}
</script>

<style scoped>

.rectangle{
  animation: rect 0.2s ease-in forwards;
}
@keyframes rect {
  0%{
    scale: 0.7;
  }
  100%{
    scale: 1;
   
  }
}
.rectangle {
  position: absolute;
  margin-top: 10px;
  width: 100px;
  height: 100px;
  transform: rotate(-54deg) scale(1.18);
  background-color: hsla(0, 80%, 77%, 0.531);
} 

.rectangle::before, .rectangle::after {
  content: "";
  position: absolute;
  top: -50px;
  width: 100px;
  height: 50px;
  border-radius: 150px 150px 0 0;
  background-color: hsla(0, 80%, 77%, 0.531);
}

.rectangle::before {
  left: 100px;
  transform: rotate(90deg);
  transform-origin: 0 100%;
}

.rectangle::after {
  left: 0;
  transform: rotate(0);
  transform-origin: 100% 100%;
}
</style>

