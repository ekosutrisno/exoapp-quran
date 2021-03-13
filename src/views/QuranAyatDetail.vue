<template>
   <div v-if="isProcess" class="absolute flex items-center justify-center inset-0 z-50 bg-opacity-50 bg-gray-900">
         <Spinner/>
   </div>
   <div class="bg-gray-200 min-h-screen w-full on-scrollbar h-screen nv-transition overflow-y-auto">
      <div ref="pageUp"></div>
      <section class="w-full min-w-min bg-gray-900 py-6">
         <div class="max-w-7xl mx-auto p-4 relative">
            <button @click="back" class="absolute text-gray-300 transition focus:outline-none left-10 hover:text-gray-100">
               <svg class="w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd" />
               </svg>
            </button>
            <router-link to="/menu" class="absolute text-gray-300 transition right-10 hover:text-gray-100">
               <svg class="w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
               </svg>
            </router-link>
            <div class="text-center">
               <div class="w-20 h-20 mx-auto rounded-full relative">
                  <div class="w-full h-full flex items-center justify-center rounded-full bg-gray-200">
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
            <div class="w-full mx-auto max-w-sm -mb-24 bg-white z-40 mt-4 rounded-lg h-16 sticky top-0">
               <div class="flex flex-col md:flex-row items-center justify-center text-xl md:text-3xl divide-y md:divide-y-0 md:divide-x h-full">
                  <div class="px-4 w-full text-center font-semibold text-green-600"> {{surah.count_ayat}}/<span class="font-serif leading-8">{{convertToArab(surah.count_ayat)}}</span> </div>
                  <div class="px-4 w-full text-center font-semibold text-cyan-600"> Ayat </div>
               </div>
            </div>
         </div>
   </section>
   <section class="min-w-min pt-20 pb-5 bg-quran min-h-full">
     <div  class="max-w-7xl mx-auto px-4 pb-4 flex flex-col items-end space-y-2">
        <div class="mb-4 mx-auto">
            <div class="font-quran text-center mb-4 text-sm font-semibold"><span class="text-sm font-normal">({{surah.surat_golongan}})</span> | {{surah.surat_text_full}} </div>
            <div class="font-quran text-center mb-2 text-xl font-semibold">بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</div>
            <p class="text-center text-sm text-gray-600">Dengan nama Allah Yang Maha Pengasih, Maha Penyayang.</p>
        </div>
         <div v-if="$route.query.sajda=== 'true'" class="mx-auto">
            <QuranAyatCard :ayat="ayat"/>
         </div>
         <div v-else class="mx-auto">
            <QuranAyatCard v-for="ayat in ayats" :key="ayat.aya_id"  :ayat="ayat"/>
         </div>
         <div v-if="isPush" class="mx-auto">
            <Loader/>
         </div>
     </div>
     <div v-if="$route.query.sajda != 'true'" class="flex items-center my-4 justify-center">
        <button @click="nextAyat" class="py-2 px-3 inline-flex items-center space-x-2 transition rounded-lg bg-green-500 hover:bg-green-600 text-gray-100 focus:outline-none"><span>Selanjutnya</span> <span><svg class="w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg></span> 
         </button>
     </div>
   </section>
    <p class="text-center text-sm py-5 text-gray-700">From ExoApp &copy;{{new Date().getFullYear()}} All right reserved</p> 
   <div class="sticky bottom-10 right-4 float-right bg-gray-50 shadow-xl p-2 rounded-full">
      <div class="inline-flex space-x-4">
         <button @click="scrollToPageUp" class="p-2 cursor-default md:cursor-pointer rounded-full hover:bg-gray-200 focus:outline-none">
         <svg class="w-5 text-gray-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414 0zm0-6a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 5.414 5.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd" />
         </svg>
      </button>
      </div>
   </div>
</div>
</template>

<script>
import { computed, onMounted, reactive, ref, toRefs } from 'vue';
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';
import QuranAyatCard from '../components/QuranAyatCard.vue';
import Spinner from '../components/Spinner.vue';
import Loader from '../components/Loader.vue';
export default {
  components: { QuranAyatCard, Spinner, Loader},
   setup(){
      const store = useStore();
      const route = useRoute();
      const router = useRouter();

      const state = reactive({
         isProcess: computed(()=> store.state.filterAyat.isLoading),
         isPush: computed(()=> store.state.filterAyat.isPush),
         surah: route.query.sajda === 'true' 
         ? computed(()=> store.state.ayat.surat_detail)
         : computed(()=> store.state.filterAyat.surat),
         ayats: [],
         ayat: {},
      })

      onMounted( async ()=>{ 
        await getSurahDetail();
      })

      const getSurahDetail = async () =>{
         var payload = {
            surat:route.query.sn,
            ayat: route.query.an
         }

         if (route.query.sajda === 'true') {
            await store.dispatch('ayat/setSuratDetail', payload);
            state.ayat = computed(()=> store.state.ayat.ayat_detail);
         }else{
            await store.dispatch('filterAyat/setSuratDetail', payload);
            state.ayats = computed(()=> store.state.filterAyat.ayats);
         }
      }

      const convertToArab = (str) => {
         var find = ['0','1','2','3','4','5','6','7','8','9'];
         var replace = ['٠','١','٢','٣','٤','٥','٦','٧','٨','٩'];

         if(str !== undefined)
            for (var i = 0; i < find.length; i++) {
               str = str.toString().replace(new RegExp(find[i],"g"), replace[i]);
            }

         return str;
      };

      const back = ()=>{
         router.back();
      }

       const nextAyat = async ()=>{
          await store.dispatch('filterAyat/nextAyat');
       }

      const pageUp = ref(null)
      const scrollToPageUp = () => {
         pageUp.value.scrollIntoView({behavior: 'smooth'});
      }


      return{
         ...toRefs(state),
         pageUp,
         scrollToPageUp,
         convertToArab,
         nextAyat,
         back
      }
   }
}
</script>

