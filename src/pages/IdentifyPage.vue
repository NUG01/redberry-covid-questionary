<template>
<div>
  <basic-header :number=1 :leftHide=true :rightHide=false :leftLink="'/'" :rightLink="'covid-questions'">
  <div class="flex items-start justify-between">
    <form class="flex flex-col w-[100%] gap-[4.7rem] mt-[4.2rem]">
      <div class="flex flex-col w-[80%] gap-[1.2rem]">
        <label for="name" class="text-[2.2rem] font-bold text-[#232323]">სახელი*</label>
        <input type="text" name="name" id="name" class="h-[5rem] pl-[2rem] border-[0.8px] border-[#232323] border-solid" placeholder="იოსებ" v-model="name">
      </div>
      <div class="flex flex-col w-[80%] gap-[1.2rem]">
        <label for="surname" class="text-[2.2rem] font-bold text-[#232323]">გვარი*</label>
        <input type="text" name="surname" id="surname" class="h-[5rem] pl-[2rem] border-[0.8px] border-[#232323] border-solid" placeholder="ჯუღაშვილი" v-model="surname">
      </div>
      <div class="flex flex-col w-[80%] gap-[1.2rem]">
        <label for="email" class="text-[2.2rem] font-bold text-[#232323]">მეილი*</label>
        <input type="email" name="email" id="email" class="h-[5rem] pl-[2rem] border-[0.8px] border-[#232323] border-solid" placeholder="fbi@redberry.ge" v-model="email">
      </div>
      <div class="mt-[11rem] text-[1.6rem] font-bold text-[#959595] inline-block">
        <hr/>
       <p>*-ით მონიშნული ველების შევსება<br> სავალდებულოა</p>
      </div>
    </form>
    <img src="src/assets/identify.png">
    <div class="absolute bg-[rgba(215,210,112,0.72)] w-[62rem] h-[7.5rem] top-[35%] left-[50%] rectangle"></div>
  </div>
  </basic-header>
</div>
</template>


<script>
import BasicHeader from '@/components/BasicHeader.vue';
import { ref } from "vue";
export default {
  name:"identification",
  components:{BasicHeader},
  setup(){
     const name=ref('');
     const surname=ref('');
     const email=ref('');

console.log(name.value,surname.value,email.value);
    return {name, surname, email};
  }
  
}
</script>

<style scoped>



  input[type='text'], 
  input[type='email']
  {
    font-weight: 400;
    font-size: 1.8rem;
    color: #232323;

}
 input::placeholder {
  font-weight: 400;
  font-size: 1.8rem;
  color: #232323;
}
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


