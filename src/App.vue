<template>
  <router-view class="bg-[#EAEAEA]" v-slot="slotProps">
    <transition name="route" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
</template>


<style>
*{
  margin:0;
  padding:0;
  box-sizing: border-box;

}
html{
  font-size: 62.5%;
  background-color: #EAEAEA;
}


.route-enter-active,
.route-leave-active {
  transition: opacity 0.3s ease-out;
}

.route-enter-from,
.route-leave-to {
  opacity: 0.5;
}


</style>

