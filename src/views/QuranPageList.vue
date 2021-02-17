<template>
   <div class="bg-gray-200 min-h-screen">
      <section class="w-full min-w-min h-1/2 bg-gray-900 py-6 relative">
         <div class="max-w-7xl mx-auto p-4 relative">
            <button @click="back" class="absolute text-gray-300 transition focus:outline-none left-10 hover:text-gray-100">
               <svg class="w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd" />
               </svg>
            </button>
            <router-link to="/" class="absolute text-gray-300 transition right-10 hover:text-gray-100">
               <svg class="w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
               </svg>
            </router-link>
            <div class="text-center">
               <div class="w-20 h-20  mx-auto border-2 rounded-full relative">
                  <div class="w-full h-full flex items-center justify-center rounded-full bg-yellow-200">
                        <h1 class="text-3xl font-semibold"> {{surah.id}} </h1>
                  </div>
                  <div class="rounded-full z-50 cursor-pointer p-1 inline-flex items-center absolute w-8 h-8 -right-3 bottom-0 bg-gray-50 ring-1 ring-gray-200">
                     <span class="mx-auto">😻</span>
                  </div>
               </div>
               <h1 class="text-3xl md:text-5xl font-semibold my-4 text-gray-100 font-quran"> {{surah.surat_text}} </h1>
               <h1 class="text-3xl md:text-4xl text-gray-100 font-quran"> {{surah.surat_name}} </h1>
               <p class="font-semibold text-yellow-300 md:text-lg text-center"> {{surah.surat_terjemahan}}</p>
            </div>
            <div class="w-full mx-auto max-w-sm -mb-24 bg-white z-40 shadow-lg mt-4 rounded-lg h-16">
               <div class="flex flex-col md:flex-row items-center justify-center text-xl md:text-3xl divide-y md:divide-y-0 md:divide-x h-full">
                  <div class="px-4 w-full text-center font-semibold text-green-600"> {{surah.count_ayat}}/<span class="font-serif leading-8">{{convertToArab(surah.count_ayat)}}</span> </div>
                  <div class="px-4 w-full text-center font-semibold text-cyan-600"> Ayat </div>
               </div>
            </div>
         </div>
   </section>
   <section class="min-w-min bg-gray-200 pt-20 min-h-full">
      <div class="font-quran text-center mb-2 text-xl font-semibold">بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</div>
      <p class="text-center mb-10 text-gray-600">Dengan nama Allah Yang Maha Pengasih, Maha Penyayang.</p>
     <div  class="max-w-7xl mx-auto px-4 pb-4 flex flex-col items-end space-y-2">
        <div v-for="ayat in ayats" :key="ayat.id" class="w-full group text-gray-600 hover:bg-gray-100 py-4 transition max-w-screen-md mx-auto font-quran font-semibold text-right px-4 text-xl rounded-bl-xl border-r-4 border-transparent cursor-pointer hover:border-gray-400 hover:shadow">
         <p> 
            <span class="group-hover:text-gray-900 leading-10">{{ayat.aya_text}}</span>   
            <span class="text-xl text-yellow-700 font-mono"> -{{convertToArab(ayat.aya_number)}}</span> 
         </p> 
         <p class="text-base font-normal text-left"> <span class="font-semibold">[{{ayat.sura_id}}:{{ayat.aya_number}}] </span> - <span class="font-semibold text-purple-600">Juz {{ayat.juz_id}}</span> |{{ayat.translation_aya_text}}</p>
        </div>
     </div>
     <div class="flex items-center justify-center">
         <button class="py-2 px-3 inline-flex items-center space-x-2 transition rounded-l-lg bg-purple-200 hover:bg-purple-300 focus:ring-1 focus:ring-purple-300 focus:outline-none"><span>
            <svg class="w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd" />
            </svg></span> <span>Surat Sebelum</span> 
         </button>
        <button class="py-2 px-3 inline-flex items-center space-x-2 transition rounded-r-lg bg-purple-200 hover:bg-purple-300 focus:ring-1 focus:ring-purple-300 focus:outline-none"><span>Surat Sesudah</span> <span><svg class="w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
         <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
         </svg></span> 
      </button>
     </div>
   </section>
    <p class="text-center text-sm py-5 text-gray-700">From Eko Sutrisno &copy;{{new Date().getFullYear()}} All right reserved</p> 
   </div>
</template>

<script>
import { computed, onMounted, reactive, toRefs } from 'vue';
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';
export default {
   setup(){
      const store = useStore();
      const route = useRoute();
      const router = useRouter();

      const state = reactive({
         surah: computed(()=> store.state.surah.surah),
         ayats: computed(()=> store.state.surah.ayahs)
      })

      onMounted( async ()=>{ 
        await getSurahDetail();
      })

      const getSurahDetail = async () =>{
         await store.dispatch('surah/setSurah', route.query.surah_number);
      }

      const convertToArab = (str) => {
         var find = ['0','1','2','3','4','5','6','7','8','9'];
         var replace = ['٠','١','٢','٣','٤','٥','٦','٧','٨','٩'];
         for (var i = 0; i < find.length; i++) {
             str = str.toString().replace(new RegExp(find[i],"g"), replace[i]);
         }

         return str;
      };

      const back = ()=>{
         router.back();
      }

      const previousSurat = async () =>{
         let nomor_surat = route.query.surah_number;
         await store.dispatch('surah/setSurah', nomor_surat - 1);
         console.log(nomor_surat);
      }
      const nextSurat = async ()=>{
         let nomor_surat = route.query.surah_number;
         await store.dispatch('surah/setSurah', nomor_surat + 1);
         console.log(nomor_surat);
      }

      return{
         ...toRefs(state),
         convertToArab,
         previousSurat,
         nextSurat,
         back
      }
   }
}
</script>
