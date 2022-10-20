<template>
<section>
  <basic-header :number=2 :leftHide=false :rightHide=false :leftLink="'identification'" :rightLink="'vaccination'">
<div class="flex items-start justify-between">
    <question-form></question-form>
    <img src="/src/assets/boyWithTemperature.png">
    <div class="absolute rectangle"></div>
  </div>
  </basic-header>
</section>
</template>

<script>
import BasicHeader from '@/components/BasicHeader.vue';
import QuestionForm from '@/components/forms/QuestionForm.vue';
export default {
  name: "Questions",
  components:{BasicHeader,QuestionForm},
  
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

