<template>
  <basic-header :number=4 :leftHide=false :rightHide=true :leftLink="'vaccination'" :rightLink="''"></basic-header>
</template>


<script>
import BasicHeader from '@/components/BasicHeader.vue';
export default {
  name: "Advices",
  components:{BasicHeader},
  
}
</script>

