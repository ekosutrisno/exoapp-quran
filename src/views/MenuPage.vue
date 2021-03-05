<template>
   <div class="h-screen bg-gray-200 flex items-center flex-col">
      <div class="flex-none relative  flex items-end flex-shrink-0 w-full bg-gray-900 shadow-lg h-1/4">
         <div class="absolute top-4 left-4 font-semibold text-gray-200 text-xl">E-Qur'an</div>
         <div class="bg-white h-16 z-50 mx-auto p-4 shadow-sm absolute left-4 -bottom-10 rounded-lg">
            <div class="flex items-center space-x-2">
               <router-link to="/" class="w-8 h-8 rounded p-1">
                  <svg class="text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                   <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
               </router-link>
               <div class="font-semibold">
                  <svg @click="onSearching" class="text-gray-500 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                     <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                  </svg>
               </div>
            </div>
         </div>
         <div class="absolute z-30 right-4 text-gray-200 p-4 rounded-lg bg-opacity-75">
            <img class="w-14 h-14 rounded-full mx-auto ring-2 ring-indigo-400 ring-opacity-75" src="../assets/logo.png" alt="avatar">
            <h1 class="font-semibold text-center text-sm sm:text-base">Account</h1>
         </div>
      </div>
      
      <div class="flex-1 w-full overflow-y-auto pt-10">
         <div v-if="onSearch" class="sm:mx-auto w-auto max-w-sm p-4 rounded-md">
          <div class="flex items-end space-x-2">
             <div class="ml-0">
                <span class="block">Surat ke:</span>
               <input v-model="sNumber" type="number" min="1" max="114" class="rounded-md py-2 px-3 w-20 bg-transparent bg-gray-100 ring-1 ring-gray-300 focus:outline-none focus:bg-gray-100" placeholder="1">
             </div>
            <div class="ml-0">
                <span class="block">Ayat ke:</span>
               <input v-model="aNumber" type="number" min="1" class="rounded-md py-2 px-3 w-24 bg-transparent bg-gray-100 ring-1 ring-gray-300 focus:outline-none focus:bg-gray-100" placeholder="1">
            </div>
            <div>
               <button @click="doSearch" class="py-2 px-3 inline-flex items-center justify-center space-x-2 transition rounded-lg bg-green-500 hover:bg-green-600 text-gray-100 focus:outline-none">
                  <span>Cari</span> 
               </button>
            </div>
          </div>
         </div>
         <div class="ml-4 mt-2 -mb-2 text-xs font-semibold text-gray-600">
            <h1>Personal</h1>
         </div>
         <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 lg:gap-4 w-full p-4">
            <CardMenuSimple v-for="sMenu in simpleMenus" :key="sMenu.menuId" :simpleMenu="sMenu"/>
         </div>
         <div class="ml-4 -mb-2 text-xs font-semibold text-gray-600">
            <h1>Menu Index</h1>
         </div>
         <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 lg:gap-4 w-full p-4">
            <CardMenu v-for="menu in menus" :key="menu.menuId" :menu="menu"/>
         </div>
      </div>
   </div>
</template>
<script>
import CardMenu from '../components/CardMenu.vue'
import CardMenuSimple from '../components/CardMenuSimple.vue'
export default {
  components: { CardMenu, CardMenuSimple },
  data(){
     return{
        onSearch: false,
        aNumber: 1,
        sNumber: 1,
        menus:[
           {
              menuId: '6bfbaca3-8a42-4ff6-b1dc-9086730e8809',
              count: 114,
              menuTitle: 'Surat',
              menuDesc:'Index',
              to:'/surah-page',
              img:'https://i.pinimg.com/236x/e9/78/b4/e978b4bf0f3950683bf0001f8faabeac.jpg'
           },
           {
              menuId: '0f052c8e-d6ce-4509-aa9f-fd230a5ed711',
              count: 604,
              menuTitle: 'Page',
              menuDesc:'Index',
              to:'/page-page',
              img:'https://i.pinimg.com/236x/ac/7f/d1/ac7fd15615d761f8d1c4425ecad8b1d2.jpg'
           },
           {
              menuId: '56c77d66-354f-446e-b132-c42ad69ba9ab',
              count: 7,
              menuTitle: 'Manzil',
              menuDesc:'Index',
              to:'/manzil-page',
              img:'https://i.pinimg.com/236x/4f/b3/8d/4fb38d6d60638e2de1358f6954246a5e.jpg'
           },
           {
              menuId: '9738964e-942b-4a71-8feb-61fa5e7d039d',
              count: 556,
              menuTitle: 'Rukuk',
              menuDesc:'Index',
              to:'/rukuk-page',
              img:'https://i.pinimg.com/236x/e3/5f/50/e35f50ec52a39fa5465d12babc2c031a.jpg'
           },
           {
              menuId: 'b0b9e184-e26c-4a98-adb3-7b7be7343a6b',
              count: 15,
              menuTitle: 'Sajda',
              menuDesc:'Index',
              to:'/sajda-page',
              img:'https://i.pinimg.com/236x/b7/3c/2c/b73c2cb3e6915eeaf025891539b042ee.jpg'
           },
           {
              menuId: '0abd415e-78e8-4f74-a443-2f23d714823d',
              count: 30,
              menuTitle: 'Juz',
              menuDesc:'Index',
              to:'/juz-page',
              img:'https://i.pinimg.com/236x/1c/5f/54/1c5f543ac90d4f029d8e6e994fb458f4.jpg'
           },
        ],
        simpleMenus:[
           {
              menuId:'3abc0315-d282-4b55-9977-df55d45e7e07',
              img:'https://i.pinimg.com/236x/1b/6e/8a/1b6e8a36d12bf9f965d3875fd08f4022.jpg',
              title: 'Bacaanku',
              desc:'Menandai bacaan terakhir'
           },
           {
              menuId:'59d11aa8-a869-4db9-88ab-541fa4515ca8',
              img:'https://i.pinimg.com/236x/ac/7f/d1/ac7fd15615d761f8d1c4425ecad8b1d2.jpg',
              title: 'Favorit',
              desc:'Koleksi ayat-ayat favorit'
           },
           {
              menuId:'7bc03ac7-3368-4f72-b84b-69edfeff1e4f',
              img:'https://i.pinimg.com/236x/d8/b6/87/d8b687118ccba1b24039a1a426fd9955.jpg',
              title: 'Tajwid',
              desc:'Belajar tajwid'
           }
        ]
     }
  },
  methods:{
     onSearching(){
        this.onSearch = !this.onSearch
     },
     doSearch(){
        this.$router.push({
              name: 'QuranAyatDetail', 
            query:{ 
               sn: this.sNumber, 
               an: this.aNumber
            }
         });
     }
  }
   
}
</script>