<template>
<div class="min-h-screen h-screen nv-transition">
   <div ref="pageUp"></div>
  <section class="w-full min-w-min bg-gray-900 py-6 relative">
      <div class="max-w-7xl mx-auto p-4 relative">
         <router-link to="/menu" class="absolute text-gray-300 transition left-10 hover:text-gray-100">
            <svg class="w-6 md:w-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
      </router-link>
         <div class="text-center">
               <div class="w-16 h-16 mx-auto border-2 ring-2 ring-gray-200 border-gray-50 rounded-full relative">
                  <div class="rounded-full cursor-pointer p-1 inline-flex items-center absolute w-8 h-8 -right-3 bottom-0 bg-gray-50 ring-1 ring-gray-200">
                     <span class="mx-auto">😻</span>
                  </div>
                  <img class="object-cover" src="https://avatars0.githubusercontent.com/u/51039205?s=460&u=cb1d242b6a9b13a3b6383e46b5410fafe471b63d&v=4" alt="my-avatar">
               </div>
               <h1 class="text-3xl md:text-5xl font-semibold my-4 text-gray-100">Surah</h1>
               <p class="font-semibold text-gray-100 md:text-lg text-center">Read and Study Alqur'an anywhere.</p>
         </div>
         <div class="w-full md:mx-auto max-w-3xl -mb-24 bg-white z-40 mt-4 rounded-lg h-16">
               <div class="flex flex-col md:flex-row items-center justify-center text-xl md:text-3xl divide-y md:divide-y-0 md:divide-x h-full">
                  <div class="px-4 w-full text-center font-semibold text-green-600">ExoApp</div>
                  <div class="px-4 w-full text-center font-semibold text-cyan-600">Qur'an</div>
               </div>
         </div>
      </div>
  </section>
  <section class="min-w-min pt-20 bg-gray-200">
     <div v-if="isProcess" class="flex items-center justify-center nv-transition">
      <Spinner/>
      </div>
     <div v-if="searching" class="max-w-7xl mx-auto px-4 pb-4 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
         <QuranMetaCard v-for="surah in onSearch" :key="surah.number" :surah="surah" data-aos="fade-up" data-aos-anchor-placement="top-bottom"/>
     </div>
     <div v-else class="max-w-7xl mx-auto px-4 pb-4 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
         <QuranMetaCard v-for="surah in surahs" :key="surah.number" :surah="surah" data-aos="fade-up" data-aos-anchor-placement="top-bottom"/>
     </div>
     <div v-if="onSearch.length = 0 " class="max-w-7xl text-center mx-auto px-4 pb-4">
       <div class="h-48 w-72 rounded-lg bg-gray-100 text-gray-800 mx-auto p-4">
           <h1 class="text-center font-semibold">Data Not Found</h1>
       </div>
     </div>
  </section>
  <div v-show="isOn" class="max-w-7xl mx-auto p-2 mb-4 sticky bottom-24 md:bottom-80 z-30 nv-transition">
      <div class="w-full max-w-lg mx-auto px-2 flex items-center justify-center relative">
         <input v-model="searchInput" ref="formSearch"  type="text" placeholder="Search surah..."  class="py-3 px-4 rounded w-full max-w-lg mt-6 focus:outline-none ring-2 ring-green-300 ring-opacity-75 focus:ring-opacity-60 shadow-2xl"/>
         <div @click="onSearchInit" class="absolute top-10 right-5">
            <svg class="w-4 md:cursor-pointer hover:text-gray-600 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
               <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
         </div>
      </div>
   </div>
  <div class="sticky bottom-10 right-4 float-right bg-gray-50 shadow-xl p-2 rounded-full">
     <div class="inline-flex space-x-4">
      <button @click="onSearchInit" class="p-2 cursor-default md:cursor-pointer rounded-full hover:bg-gray-200 focus:outline-none">
         <svg class="w-5 text-gray-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
         </svg>
      </button>
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
import { computed, nextTick, reactive, ref, toRefs, } from 'vue';
import { useStore } from 'vuex';
import QuranMetaCard from '../components/QuranMetaCard.vue';
import Spinner from '../components/Spinner.vue';
export default {
  components: { QuranMetaCard, Spinner },
   setup(){

      const store = useStore();
      
      const pageUp = ref(null)
      const formSearch = ref(null);

      const state = reactive({
         isProcess: computed(()=> store.state.surah.isLoading),
         searchInput: '',
         surahs: computed(()=> store.state.surah.surahs),
         isOn: false
      })

      const searching = computed(()=> state.searchInput.trim() !== '');

      const onSearch = computed(()=>{
         var searchData = state.surahs.filter(post => {
            return post.surat_name
            .toLowerCase()
            .replace(/[-']+/g,'')
            .includes(
               state.searchInput.toLowerCase()
            )
         });
         
         return searchData;
      
      })

      const scrollToPageUp = () => {
         pageUp.value.scrollIntoView({behavior: 'smooth'});
      }

      const onSearchInit = () =>{
         nextTick(() => {
            state.searchInput = '';
            state.isOn = !state.isOn;
            setTimeout(() => {
               formSearch.value.focus();
            }, 1000);
         })
      }

      return{
         ...toRefs(state),
         pageUp,
         formSearch,
         onSearch,
         onSearchInit,
         searching,
         scrollToPageUp
      }
   }
}
</script>
