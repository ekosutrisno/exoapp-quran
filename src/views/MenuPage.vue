<template>
   <div class="h-screen flex items-center flex-col">
      <div class="flex-none relative  flex items-end flex-shrink-0 w-full bg-gray-900 shadow-lg h-1/4">
         <div class="absolute top-4 left-4 font-semibold text-gray-200 text-xl">E-Qur'an</div>
         <div class="bg-white h-16 w-36 z-50 mx-auto p-4 shadow-sm absolute left-4 -bottom-10 rounded-lg">
            <div class="flex items-center justify-between">
               <div class="w-8 h-8 rounded p-1">
                  <svg class="text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                   <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
               </div>
               <div class="font-semibold">Beranda</div>
            </div>
         </div>
         <div class="absolute z-30 right-4 text-gray-200 p-4 rounded-lg bg-opacity-75">
            <img class="w-14 h-14 rounded-full mx-auto ring-2 ring-indigo-400 ring-opacity-75" src="../assets/logo.png" alt="avatar">
            <h1 class="font-semibold text-center text-sm sm:text-base">Account</h1>
         </div>
      </div>
      <div class="flex-1 w-full overflow-y-auto bg-gray-200 pt-10">
         <div class=" hidden grid-cols-2 sm:grid-cols-3 gap-2 lg:gap-4 w-full p-4">
            <router-link to="/surah-page" class="h-40 sm:w-auto max-w-xs flex items-center justify-center bg-quran-gray-100 bg-opacity-90 transition cursor-pointer p-4 rounded">
               <div class="relative justify-center items-center">
                  <div class="w-10 h-10 rounded p-1">
                     <svg class="text-pink-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                           <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                     </svg>
                  </div>
                  <div class="font-semibold">Surat</div>
               </div>
            </router-link>
            <router-link to="/manzil-page" class="h-40 sm:w-auto max-w-xs flex items-center justify-center bg-quran-gray-100 bg-opacity-90 transition cursor-pointer p-4 rounded">
               <div class="flex flex-col justify-center items-center">
                  <div class="w-10 h-10 rounded p-1">
                     <svg class="text-purple-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
                     </svg>
                  </div>
                  <div class="font-semibold">Manzil</div>
               </div>
            </router-link>
            <router-link to="/rukuk-page" class="h-40 sm:w-auto max-w-xs flex items-center justify-center bg-quran-gray-100 bg-opacity-90 transition cursor-pointer p-4 rounded">
               <div class="flex flex-col justify-center items-center">
                  <div class="w-10 h-10 rounded p-1">
                     <svg class="text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                     </svg>
                  </div>
                  <div class="font-semibold">Rukuk</div>
               </div>
            </router-link>
            <router-link to="/sajda-page" class="h-40 sm:w-auto max-w-xs flex items-center justify-center bg-quran-gray-100 bg-opacity-90 transition cursor-pointer p-4 rounded">
               <div class="flex flex-col justify-center items-center">
                  <div class="w-10 h-10 rounded p-1">
                     <svg class="text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clip-rule="evenodd" />
                     </svg>
                  </div>
                  <div class="font-semibold">Sajda</div>
               </div>
            </router-link>
            <router-link to="/juz-page" class="h-40 sm:w-auto max-w-xs flex items-center justify-center bg-quran-gray-100 bg-opacity-90 transition cursor-pointer p-4 rounded">
               <div class="flex flex-col justify-center items-center">
                  <div class="w-10 h-10 rounded p-1">
                     <svg class="text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
                     </svg>
                  </div>
                  <div class="font-semibold">Juz</div>
               </div>
            </router-link>
           
         </div>
         <div class="grid grid-cols-2 sm:grid-cols-3 gap-2 lg:gap-4 w-full p-4">
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
              img:'https://i.pinimg.com/236x/99/c7/c9/99c7c9b91e571023246299f7e1d31b9e.jpg'
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