<template>
<router-link :to="menu.to">
   <div class="transition-shadow duration-300 flex overflow-hidden flex-col bg-white rounded-md shadow-sm hover:shadow-xl">
      <div class="max-h-72 w-full overflow-hidden">
      <img class="w-full h-28 sm:h-full max-h-40 object-cover" :src="menu.img" />
      </div>
      <div class="h-16 sm:h-full max-h-72 w-full overflow-hidden py-2 px-3 md:p-5">
         <span class="text-lg font-semibold text-gray-800">{{menu.menuTitle}}</span>
         <span class="text-xs block"> {{menu.menuDesc}} <span class="font-semibold text-indigo-500">{{menu.count}}</span> {{menu.menuTitle}} </span>
         <p class="text-xs hidden sm:block sm:text-sm sm:mt-3">Mencari berdasarkan {{menu.menuTitle}} yang disajikan secara terurut.</p>
      </div>
   </div>
</router-link>
</template>

<script>
   export default {
      props:{
         menu:{type:Object}
      }
   }
</script>