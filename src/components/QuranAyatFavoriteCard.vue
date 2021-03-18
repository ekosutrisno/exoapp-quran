<template>
<div class="w-full relative group nv-transition text-gray-800 hover:bg-gray-100 py-4 transition duration-300 max-w-screen-lg mx-auto font-quran font-semibold text-right px-4 text-xl rounded-bl-xl border-r-4 border-transparent sm:cursor-pointer hover:border-gray-400 hover:shadow-sm select-none">
   <p> 
      <span class="group-hover:text-quran-brown-text leading-10">{{ayat.aya_text}}</span>   
      <span class="text-xl text-quran-brown-text font-mono"> -{{convertToArab(ayat.aya_number)}}</span> 
   </p> 

   <p class="text-base font-normal text-left"> 
      <span class="font-semibold">[{{ayat.sura_id}}:{{ayat.aya_number}}] </span> - <span class="font-semibold text-purple-600">Juz {{ayat.juz_id}}</span>|{{ayat.translation_aya_text}}
   </p>
   
   <svg v-if="playAudio" @click="togglePlay"  class="absolute top-2 left-2 w-5 text-gray-400 hover:text-gray-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z" clip-rule="evenodd" />
   </svg> 

   <svg v-else @click="togglePlay" class="absolute top-2 left-2 w-5 text-gray-400 hover:text-gray-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
   </svg>

   <div class="w-full">
      <audio v-if="playAudio" class="focus:outline-none mb-4 sm:mr-4 sm:mb-0 float-right nv-transition mt-2 h-8 w-full max-w-md" preload :src="ayat.audio" controls>
         <source v-for="(aud, idx) in ayat.audio_secondary" :key="idx" :src="aud" type = "audio/mp3" />
      </audio>
   </div>
   
   <div class="text-xs w-full inline-flex space-x-1 items-center font-normal mt-3 text-left"> 
      <span v-if="isIncludeMyFavorite" class="font-semibold text-blue-600">
      <svg class="w-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
      </svg>
      </span>
      <span v-if="ayat.aya_id === myBacaanku.aya_id" class="font-semibold text-green-500">
      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-checks inline" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M7 12l5 5l10 -10"></path>
            <path d="M2 12l5 5m5 -5l5 -5"></path>
         </svg>
      </span>
      <span class="font-medium">Info: (Hal: {{ayat.page_number}})(Manzil: {{ayat.manzil}})(Rukuk: {{ayat.rukuk}}) </span>
      <span v-if="ayat.sajda" class="font-semibold text-yellow-500">
      - Sajda 
      <svg class="w-4 inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
         <path fill-rule="evenodd" d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
      </svg>
      </span>
   </div>

   <!-- Menu Options -->
   <div class="absolute right-0 bottom-0 p-2">
      <div v-if="isLogin" @click="hideMenuOption" class="relative">
         <svg class="sm:cursor-pointer w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
         </svg>

         <transition
               enter-active-class="transition ease-out duration-100 transform"
               enter-from-class="opacity-0 scale-95"
               enter-to-class="opacity-100 scale-100"
               leave-active-class="transition ease-in duration-75 transform"
               leave-from-class="opacity-100 scale-100"
               leave-to-class="opacity-0 scale-95"
         >
         
            <div v-click-away="hideMenuOption" v-if="option" class="w-40 absolute z-50 shadow-xl h-auto left-0 bottom-0 -ml-36 mt-6 py-1 bg-gray-50 rounded flex flex-col overflow-hidden">
                  <button @click="ontandaiBacaan(ayat)" type="button" class="w-full text-sm group transition-colors cursor-default sm:cursor-pointer duration-300 text-gray-700 focus:outline-none py-2 px-3 hover:text-gray-900 hover:bg-gray-200 inline-flex space-x-2">
                     <span>Tandai bacaan</span>
                  </button>
                  <button @click="onRemoveFavorit(ayat)" type="button" class="w-full text-sm group transition-colors cursor-default sm:cursor-pointer duration-300 text-gray-700 focus:outline-none py-2 px-3 hover:text-gray-100 hover:bg-indigo-400 inline-flex space-x-2">
                     <span>Hapus Favorit</span>
                  </button>
            </div>
         </transition>
      </div>
   </div>
</div>
</template>

<script>
import { computed, reactive, toRefs } from 'vue';
import { useStore } from 'vuex';
export default {
   props:{
      ayat:{
         type: Object
      }
   },
   setup(props){
      const store = useStore();

      const data = reactive({
         playAudio: false,
         option: false,
         isLogin: localStorage.getItem('user_id'),
         currentAyat: computed(()=> props.ayat),
         myBacaanku: computed(()=> store.state.account.bacaanku),
         myFavorite: computed(()=>store.state.account.ayatFavorit),
      });

      const convertToArab = (str) => {
      var find = ['0','1','2','3','4','5','6','7','8','9'];
      var replace = ['٠','١','٢','٣','٤','٥','٦','٧','٨','٩'];
      if(str !== undefined)
         for (var i = 0; i < find.length; i++) {
            str = str.toString().replace(new RegExp(find[i],"g"), replace[i]);
         }

         return str;
      };

      const ontandaiBacaan = (ayat)=>{
         store.dispatch('account/onMarkBacaanku', ayat);
      }
      const onRemoveFavorit = (ayat)=>{
         store.dispatch('account/onRemoveFavorit', ayat);
      }

      const togglePlay = ()=>{
         data.playAudio = !data.playAudio;
      }

      const hideMenuOption = () => {
         data.option = !data.option
      }

      const isIncludeMyFavorite = computed(()=>data.myFavorite.some(ayat => ayat.aya_id === data.currentAyat.aya_id))

      return{
         ...toRefs(data),
         convertToArab,
         togglePlay,
         hideMenuOption,
         ontandaiBacaan,
         onRemoveFavorit,
         isIncludeMyFavorite
      }
   }
}
</script>