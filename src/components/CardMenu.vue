<template>
<router-link :to="menu.to">
   <div class="transition-shadow duration-300 flex flex-col lg:flex-row bg-white rounded-2xl shadow-sm hover:shadow-xl">
      <div class="max-h-72 w-full lg:w-1/2 rounded-t-xl lg:rounded-l-xl lg:rounded-t-none overflow-hidden">
      <img class="w-full h-28 sm:h-full object-cover" :src="menu.img" />
      </div>
      <div class="h-16 sm:h-full max-h-72 w-full lg:w-1/2 rounded-t-xl lg:rounded-l-xl lg:rounded-t-none overflow-hidden p-2 md:p-5">
      <span class="text-lg font-semibold text-gray-800">{{menu.menuTitle}}</span>
      <span class="text-xs block"> {{menu.menuDesc}} </span>
      <p class="text-xs hidden sm:block sm:text-sm sm:mt-3">Mencari dan Membaca berdasarkan {{menu.menuTitle}} yang disajikan secara terurut.</p>
      <div class="hidden sm:inline-flex mt-6">
         <div class="mx-2">
            <span class="hidden sm:block font-semibold text-sm mb-1">Bacaanku</span>
            <span class="inline-flex text-gray-900 font-semibold text-sm tracking-wide">Al-Fatihah(5) </span>
         </div>
      </div>
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