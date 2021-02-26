<template>
<div class="min-h-screen bg-gray-200 nv-transition">
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
               <h1 class="text-3xl md:text-5xl font-semibold my-4 text-gray-100">Juz</h1>
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
  <section class="min-w-min bg-quran pt-20">
     <div v-if="isProcess" class="flex items-center justify-center nv-transition">
      <Spinner/>
      </div>
     <div v-else class="max-w-7xl mx-auto px-4 pb-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
         <QuranJuzCard v-for="juz in juzs" :key="juz.number" :juz="juz" data-aos="fade-up" data-aos-anchor-placement="top-bottom"/>
     </div>
    <p class="text-center text-sm py-5 text-gray-700">From ExoApp &copy;{{new Date().getFullYear()}} All right reserved</p> 
  </section>
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
import { computed, reactive, ref, toRefs } from 'vue';
import { useStore } from 'vuex';
import Spinner from '../components/Spinner.vue';
import QuranJuzCard from '../components/QuranJuzCard.vue';
export default {
  components: {  Spinner, QuranJuzCard },
   setup(){

      const store = useStore();

      const state = reactive({
         isProcess: computed(()=> store.state.surah.isLoading),
         juzs: computed(()=> store.state.juz.juz),
      })

      const pageUp = ref(null)
      const scrollToPageUp = () => {
         pageUp.value.scrollIntoView({behavior: 'smooth'});
      }

      return{
         ...toRefs(state),
         pageUp,
         scrollToPageUp
      }
   }
}
</script>
