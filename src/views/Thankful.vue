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
import SmallStar from '@/components/icons/SmallStar.vue';
import BigStar from '@/components/icons/BigStar.vue';
import {onMounted} from 'vue';
import {useStore} from 'vuex';
export default {
  components:{BigStar,SmallStar},

  setup(){
    const store=useStore();
    let date=null;
    if(store.getters.get_antibody_date){
      date=new Date(store.getters.get_antibody_date.replaceAll('/', '-').split("-").reverse().join("-")).toISOString( );
     }
    
    onMounted(()=>{
      const data={
        first_name: store.getters.get_first_name,
        last_name: store.getters.get_last_name,
        email: store.getters.get_email,
        had_covid: store.getters.get_had_covid,
        had_antibody_test: store.getters.get_had_antibody_test=="true"? true : false,
        antibodies:{
          test_date:date,
          number:Number(store.getters.get_antibody_quantity)
        },
        covid_date: store.getters.get_covid_date,
        had_vaccine:store.getters.get_had_vaccine=="yes"? true : false,
        vaccination_stage:store.getters.get_vaccination_stage,
        waiting:store.getters.get_waiting,
        non_formal_meetings:store.getters.get_non_formal_meetings,
        number_of_days_from_office:Number(store.getters.get_number_of_days_from_office),
        what_about_meetings_in_live:store.getters.get_what_about_meetings_in_live,
        tell_us_your_opinion_about_us:store.getters.get_tell_us_your_opinion_about_us,
      }

     fetch('https://covid19.devtest.ge/api/create', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data),
      });

    });
     

    return {}
  }
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