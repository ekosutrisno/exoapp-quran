<template>
   <div class="h-screen flex items-center flex-col">
      <div class="flex-none relative  flex items-end flex-shrink-0 w-full bg-gray-900 shadow-lg h-1/4">
         <div class="absolute top-4 left-4 font-semibold text-gray-200 text-xl">E-Qur'an</div>
         <div class="bg-white h-16 w-36 z-50 mx-auto p-4 shadow-sm absolute left-4 -bottom-10 rounded-lg">
            <div class="flex items-center justify-between">
               <router-link to="/" class="w-8 h-8 rounded p-1">
                  <svg class="text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                   <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
               </router-link>
               <div class="font-semibold">Beranda</div>
            </div>
         </div>
         <div class="absolute z-30 right-4 text-gray-200 p-4 rounded-lg bg-opacity-75">
            <img class="w-14 h-14 rounded-full mx-auto ring-2 ring-indigo-400 ring-opacity-75" src="../assets/logo.png" alt="avatar">
            <h1 class="font-semibold text-center text-sm sm:text-base">Account</h1>
         </div>
      </div>
      <div class="flex-1 w-full overflow-y-auto bg-gray-200 pt-10">
         <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-4 w-full p-4">
            <CardMenu v-for="menu in menus" :key="menu.menuId" :menu="menu"/>
         </div>
      </div>

   </div>
</template>
<script>
import CardMenu from '../components/CardMenu.vue'
export default {
  components: { CardMenu },
  data(){
     return{
        menus:[
           {
              menuId: '6bfbaca3-8a42-4ff6-b1dc-9086730e8809',
              menuTitle: 'Surat',
              menuDesc:'Index Surat',
              to:'/surah-page',
              img:'https://i.pinimg.com/236x/2c/4b/8a/2c4b8a6c7faf31c881086374551f30aa.jpg'
           },
           {
              menuId: '56c77d66-354f-446e-b132-c42ad69ba9ab',
              menuTitle: 'Manzil',
              menuDesc:'Index Manzil',
              to:'/manzil-page',
              img:'https://i.pinimg.com/236x/69/b0/06/69b006ec4c3a72708e68e66cababa905.jpg'
           },
           {
              menuId: '9738964e-942b-4a71-8feb-61fa5e7d039d',
              menuTitle: 'Rukuk',
              menuDesc:'Index Rukuk',
              to:'/rukuk-page',
              img:'https://i.pinimg.com/236x/2d/d3/b0/2dd3b076ff540be24e6ee5dd5a58b558.jpg'
           },
           {
              menuId: 'b0b9e184-e26c-4a98-adb3-7b7be7343a6b',
              menuTitle: 'Sajda',
              menuDesc:'Index Sajda',
              to:'/sajda-page',
              img:'https://i.pinimg.com/236x/77/ba/06/77ba06ed50b5250f74fd3181af23ab39.jpg'
           },
           {
              menuId: '0abd415e-78e8-4f74-a443-2f23d714823d',
              menuTitle: 'Juz',
              menuDesc:'Index Juz',
              to:'/juz-page',
              img:'https://i.pinimg.com/236x/49/3b/76/493b76b7ad42b3fbcfddd02907c75081.jpg'
           },
        ]
     }
  }
   
}
</script>