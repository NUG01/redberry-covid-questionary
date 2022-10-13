<template>
<section>
  <div class="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-10 text-[6.4rem] text-[white] font-bold opacity-0 thanks">
    <big-star class="bigStar absolute"></big-star>
    <p>მადლობა</p>
    <small-star class="smallStar absolute"></small-star>
  </div>
  <div class="rectangle"></div>
</section>
</template>


<script>
import SmallStar from '@/components/svg/SmallStar.vue';
import BigStar from '@/components/svg/BigStar.vue';
export default {
  components:{BigStar,SmallStar},
}
</script>



<style scoped>
.smallStar{
  animation: smallStar 1s ease-out forwards;
}
.bigStar{
  animation: bigStar 1s ease-out forwards;
}
  @keyframes smallStar {
    0%{
      transform: scale(0);
      bottom:0;
    right:19%;
    opacity: 0;
    }
    75%{
      transform: scale(0);
      bottom:0;
    right:19%;
      opacity: 0;
      }
    100%{
      transform: scale(0.9);
       bottom:-27%;
    right:9%;
      opacity: 1;
     }
  }
  @keyframes bigStar {
    0%{
      transform: scale(0);
    top:7%;
    left:16%;
    }
    75%{
      transform: scale(0);
    top:7%;
    left:16%;
}
    100%{
      transform: scale(0.9);
      top:-45%;
      left:9%;
      opacity: 1;
  }
  }

.rectangle{
  animation: rect 0.45s ease-in forwards;
}
.thanks{
  animation: thx 0.9s ease-in forwards;
  letter-spacing:3px;
}
  @keyframes thx {
    0%{
      opacity: 0;
      }
    50%{
      opacity: 0;
    }
    75%{
      opacity: 0.7;
    }
    100%{
      opacity: 1;
     }
  }
section{
  width:100vw;
  height:100vh;
  overflow: hidden;
}
@keyframes rect {
  0%{
    scale: 0.1;
    top:30rem;
    left:45%;
    opacity: 0.7;
  }
  100%{
    scale: 9;
    top:60rem;
    left:60%;
    opacity: 1;
   
  }
}
.rectangle{
  position: relative;
  top:40rem;
  left:45%;
  display: inline-block;
  width: 200px;
  height: 200px;
  transform: rotate(20deg);
  background-color: #232323;
}
.rectangle:before,
.rectangle:after{
  position: absolute;
  width: 200px;
  height: 200px;
  content: '';
  border-radius: 50%;
  background-color: #232323;
}
.rectangle:before{
  bottom: 0px;
  left: -100px;
}
.rectangle:after{
  top: -100px;
  right: 0px;
}
</style>