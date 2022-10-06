<template>
  <basic-header :number=3 :leftHide=false :rightHide=false :leftLink="'covid-questions'" :rightLink="'advices'"></basic-header>
</template>


<script>
import BasicHeader from '@/components/BasicHeader.vue';
export default {
  name: "vaccination",
  components:{BasicHeader},
  
}
</script>

