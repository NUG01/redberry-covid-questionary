<template>
  <basic-header :number=2 :leftHide=false :rightHide=false :leftLink="'identification'" :rightLink="'vaccination'"></basic-header>
</template>


<script>
import BasicHeader from '@/components/BasicHeader.vue';
export default {
  name: "questions",
  components:{BasicHeader},
  
}
</script>

