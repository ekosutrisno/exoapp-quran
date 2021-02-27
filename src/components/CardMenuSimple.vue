<template>
   <router-link to="/menu">
      <div class="transition-shadow relative h-14 duration-300 flex overflow-hidden flex-col bg-white rounded-md shadow-sm hover:shadow-xl">
         <div class="max-h-72 w-full overflow-hidden absolute inset-0">
            <img class="w-full h-28 sm:h-full max-h-72 object-cover" :src="simpleMenu.img" />
         </div>
         <div class="h-16 absolute z-50 sm:h-full max-h-72 w-full overflow-hidden py-2 px-3 md:p-5">
            <span class="font-semibold text-white"> {{simpleMenu.title}} </span> 
         </div>
         <div class="bg-gray-900 absolute inset-0 z-40 bg-opacity-30"></div>
      </div>
   </router-link>
</template>
<script>
export default {
   props:{
      simpleMenu:{
         type: Object,
         requird: true
      }
   }
}
</script>