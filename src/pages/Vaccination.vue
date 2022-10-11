<template>
<section>
  <basic-header :number=3 :leftHide=false :rightHide=false :leftLink="'covid-questions'" :rightLink="'advices'">
<div class="flex items-start justify-between">
    <vaccine-form></vaccine-form>
    <img src="src/assets/doctor2.png">
    <div class="absolute bg-[rgba(201,203,106,0.72)] w-[62rem] h-[7.5rem] top-[35%] left-[50%] rectangle"></div>
  </div>
  </basic-header>
</section>
</template>


<script>
import BasicHeader from '@/components/BasicHeader.vue';
import VaccineForm from '@/components/forms/VaccineForm.vue';
export default {
  name: "Vaccination",
  components:{BasicHeader, VaccineForm},
  
}
</script>

<style scoped>

.rectangle{
  animation: rect 0.36s ease-in forwards;
}
img{
  transform: translateY(3%);
}
@keyframes rect {
  0%{
    width:23rem;
    height:23rem;
    border-radius: 100%;
    top:37.5%;
    left:44%;
    background-color: rgba(255, 0, 0, 0.702);
  }
  100%{
      width:28.8rem;
    height:32.1rem;
clip-path: polygon(46% 17.3%, 55.7% 34.9%, 95.5% 29.2%, 60.3% 46.2%, 94.4% 68.6%, 50.2% 52.9%, 6.6% 100%, 39% 47.1%, 6.6% 39.7%, 41.8% 34.9%);
top:10%;
left:50.2%;
background-color: rgba(201,203,106,0.72);
   
  }
}
</style>