<template>
<div v-if="isProcess" class="absolute flex items-center justify-center inset-0 z-50 bg-opacity-50 bg-gray-900">
      <Spinner/>
</div>
<div class="min-h-screen bg-gray-200">
  <section class="w-full min-w-min h-1/3 bg-gray-900 py-6 relative">
      <div class="max-w-7xl mx-auto p-4 relative">
         <router-link to="/" class="absolute text-gray-300 transition left-10 hover:text-gray-100">
         <svg class="w-6 md:w-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
         </svg>
      </router-link>
         <div class="text-center">
               <div class="w-16 mx-auto border-2 ring-2 ring-gray-200 border-gray-50 rounded-full relative">
                  <div class="rounded-full cursor-pointer p-1 inline-flex items-center absolute w-8 h-8 -right-3 bottom-0 bg-gray-50 ring-1 ring-gray-200">
                     <span class="mx-auto">😻</span>
                  </div>
                  <img class="object-cover" src="https://avatars0.githubusercontent.com/u/51039205?s=460&u=cb1d242b6a9b13a3b6383e46b5410fafe471b63d&v=4" alt="my-avatar">
               </div>
               <h1 class="text-3xl md:text-5xl font-semibold my-4 text-gray-100">ExoApp Qur'an</h1>
               <p class="font-semibold text-gray-100 md:text-lg text-center">Read and Study Alqur'an anywhere.</p>
         </div>
         <div class="w-full md:mx-auto max-w-3xl -mb-24 bg-white z-40 shadow-lg mt-4 rounded-lg h-16">
               <div class="flex flex-col md:flex-row items-center justify-center text-xl md:text-3xl divide-y md:divide-y-0 md:divide-x h-full">
                  <div class="px-4 w-full text-center font-semibold text-green-600">ExoApp</div>
                  <div class="px-4 w-full text-center font-semibold text-cyan-600">Qur'an</div>
               </div>
         </div>
      </div>
  </section>
  <section class="min-w-min bg-gray-300 pt-10 h-full">
     <div class="max-w-7xl mx-auto p-2 mb-4 sticky top-0 z-30">
         <div class="w-full px-2 flex items-center justify-center">
            <input v-model="searchInput" @input="onSearch"  type="text" placeholder="Search surah..."  class="py-3 px-4 shadow-xl rounded w-full max-w-lg mt-6 focus:outline-none ring-2 ring-gray-400 ring-opacity-30 focus:ring-opacity-60"/>
         </div>
     </div>
     <div v-if="searching" class="max-w-7xl mx-auto px-4 pb-4 grid md:grid-cols-2 lg:grid-cols-4 gap-2">
         <QuranMetaCard v-for="surah in surahSearchResult" :key="surah.number" :surah="surah" data-aos="fade-up" data-aos-anchor-placement="top-bottom"/>
     </div>
     <div v-else class="max-w-7xl mx-auto px-4 pb-4 grid md:grid-cols-2 lg:grid-cols-4 gap-2">
         <QuranMetaCard v-for="surah in surahs" :key="surah.number" :surah="surah" data-aos="fade-up" data-aos-anchor-placement="top-bottom"/>
     </div>
     <div v-if="surahSearchResult.length = 0 " class="max-w-7xl text-center mx-auto px-4 pb-4">
       <div class="h-48 w-72 rounded-lg bg-gray-100 text-gray-800 mx-auto p-4">
           <h1 class="text-center font-semibold">Data Not Found</h1>
       </div>
     </div>
  </section>
    <p class="text-center text-sm py-5 text-gray-700">From Eko Sutrisno &copy;{{new Date().getFullYear()}} All right reserved</p> 
</div>
</template>
<script>
import { computed, onMounted, reactive, toRefs } from 'vue';
import QuranMetaCard from '../components/QuranMetaCard.vue';
import { useStore } from 'vuex';
import Spinner from '../components/Spinner.vue';
export default {
  components: { QuranMetaCard, Spinner },
   setup(){

      const store = useStore();

      const state = reactive({
         isProcess: false,
         searchInput: '',
         surahs: computed(()=> store.state.surah.surahs),
         surahSearchResult: []
      })

      onMounted( () =>{
        getSurahData();
      })

      const getSurahData = async () =>{
         state.isProcess = true;
         await store.dispatch('surah/setSurahs');
         setTimeout(() => {
            state.isProcess = false;
         }, 1000);
      }

      const searching = computed(()=> state.searchInput.trim() !== '');

      const onSearch = () =>{
            const searchData = state.surahs.filter(surah => surah.surat_name.includes(state.searchInput.toLowerCase()));
            state.surahSearchResult = searchData;
      }

      return{
         ...toRefs(state),
         onSearch,
         searching
      }
   }
}
</script>
