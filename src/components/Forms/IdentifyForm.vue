<template>
 <form class="flex flex-col w-[100%] gap-[4.7rem] mt-[4.2rem]">
      <div class="flex flex-col w-[80%] gap-[1.2rem]">
        <label for="name" class="text-[2.2rem] font-bold text-[#232323]">სახელი*</label>
        <input type="text" name="name" id="name" class="h-[5rem] pl-[2rem] border-[0.8px] border-[#232323] border-solid" placeholder="იოსებ"/>
      </div>
      <div class="flex flex-col w-[80%] gap-[1.2rem]">
        <label for="surname" class="text-[2.2rem] font-bold text-[#232323]">გვარი*</label>
        <input type="text" name="surname" id="surname" class="h-[5rem] pl-[2rem] border-[0.8px] border-[#232323] border-solid" placeholder="ჯუღაშვილი"/>
      </div>
      <div class="flex flex-col w-[80%] gap-[1.2rem]">
        <label for="email" class="text-[2.2rem] font-bold text-[#232323]">მეილი*</label>
        <input type="email" name="email" id="email" class="h-[5rem] pl-[2rem] border-[0.8px] border-[#232323] border-solid" placeholder="fbi@redberry.ge" />
      </div>
      <div class="mt-[11rem] text-[1.6rem] font-bold text-[#959595] inline-block">
        <hr/>
       <p>*-ით მონიშნული ველების შევსება<br> სავალდებულოა</p>
      </div>
    </form>
</template>


<script>
import { Field, Form } from 'vee-validate';
export default {
  name:"IdentifyForm",
 components:{Field,Form},
  setup(){
    const name=ref('');
     const surname=ref('');
     const email=ref('');

    return {name, surname, email};
  }
}
</script>


<style scoped>

</style>
