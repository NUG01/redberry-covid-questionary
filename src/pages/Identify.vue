<template>
<section>
  <basic-header :number=1>
  <div class="flex items-start justify-between">
    <identification-form></identification-form>
    <img src="src/assets/identify.png">
    <div class="absolute bg-[rgba(215,210,112,0.72)] w-[62rem] h-[7.5rem] top-[35%] left-[50%] rectangle"></div>
  </div>
  </basic-header>
</section>
</template>


<script>
import IdentificationForm from '@/components/forms/IdentificationForm.vue';
import BasicHeader from '@/components/BasicHeader.vue';
import { ref } from "vue";
export default {
  name:"Identification",
  components:{BasicHeader, IdentificationForm},
  setup(){
   //
    }

  }
  
</script>

<style scoped>
hr{
  margin-bottom: 2rem;
  width: 40%;
  height: 0.8px;
  background-color: black;
}
.rectangle{
  animation: rect 0.36s ease-in forwards;
}
@keyframes rect {
  0%{
    scale: 0;
    left:32%;
  }
  100%{
    scale: 1;
    left:50%;
   
  }
}
</style>


