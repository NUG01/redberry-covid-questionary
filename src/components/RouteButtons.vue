<template>
  <div class="flex items-center justify-center gap-[12rem] absolute bottom-0 left-[50%] -translate-x-[50%] mb-[10rem]">
   <router-link :class="hidden" :to="route" class="z-50"><left-arrow></left-arrow></router-link>
   <button type="submit" class="z-50"><right-arrow></right-arrow></button>
  </div>
</template>

<script>
import LeftArrow from '@/components/icons/LeftArrow.vue';
import RightArrow from '@/components/icons/RightArrow.vue';  
export default {
  props:['to','class'],
  components:{LeftArrow,RightArrow},
  setup(props){
    const route=props.to;
    const hidden=props.class;

    return{route,hidden}
  }
  
}
</script>