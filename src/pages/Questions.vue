<template>
<section>
  <basic-header :number=2 :leftHide=false :rightHide=false :leftLink="'identification'" :rightLink="'vaccination'">
<div class="flex items-start justify-between">
    <question-form></question-form>
    <img src="src/assets/vaccination.png">
    <div class="absolute rectangle"></div>
  </div>
  <div class="flex items-center justify-center gap-[12rem]">
   <router-link to="identification"><left-arrow></left-arrow></router-link>
   <router-link to="vaccination"><right-arrow></right-arrow></router-link>
  </div>
  </basic-header>
</section>
</template>

<script>
import BasicHeader from '@/components/BasicHeader.vue';
import QuestionForm from '@/components/forms/QuestionForm.vue';
import LeftArrow from '@/components/svg/LeftArrow.vue';
import RightArrow from '@/components/svg/RightArrow.vue';
export default {
  name: "Questions",
  components:{BasicHeader,QuestionForm,RightArrow,LeftArrow},
  
}
</script>

<style scoped>

.rectangle{
  animation: rect 0.36s ease-in forwards;
}
@keyframes rect {
  0%{
    width:62rem;
    height:7.5rem;
    top:35%;
    left:50%;
    background-color: hsla(57, 56%, 64%, 0.702);
  }
  100%{
    width:23rem;
    height:23rem;
    border-radius: 100%;
    top:37.5%;
    left:44%;
    background-color: rgba(255, 0, 0, 0.702);
   
  }
}
</style>

