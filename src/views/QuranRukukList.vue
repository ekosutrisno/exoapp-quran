<template>
<div class="min-h-screen h-screen bg-gray-200 nv-transition">
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
               <h1 class="text-3xl md:text-5xl font-semibold my-4 text-gray-100">Rukuk</h1>
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
  <section class="min-w-min bg-gray-100 pt-10 pb-5">
     <div class="max-w-7xl mx-auto p-2 mb-4 sticky top-0 z-30">
         <div class="w-full px-2 flex items-center justify-center">
            <input v-model="searchInput"  type="text" placeholder="Rukuk number..."  class="py-3 px-4 rounded w-full max-w-lg mt-6 focus:outline-none ring-2 ring-green-300 ring-opacity-75 focus:ring-opacity-60"/>
         </div>
     </div>
     <div v-if="isProcess" class="flex items-center justify-center nv-transition">
      <Spinner/>
      </div>
     <div v-if="searching" class="max-w-7xl mx-auto px-4 pb-4 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 gap-2">
         <QuranRukukCard v-for="surah in onSearch" :key="surah.number" :rukuk="surah" data-aos="fade-up" data-aos-anchor-placement="top-bottom"/>
     </div>
     <div v-else class="max-w-7xl mx-auto px-4 pb-4 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 gap-2">
         <QuranRukukCard v-for="surah in rukuk" :key="surah.number" :rukuk="surah" data-aos="fade-up" data-aos-anchor-placement="top-bottom"/>
     </div>
     <div v-if="onSearch.length = 0 " class="max-w-7xl text-center mx-auto px-4 pb-4">
       <div class="h-48 w-72 rounded-lg bg-gray-100 text-gray-800 mx-auto p-4">
           <h1 class="text-center font-semibold">Data Not Found</h1>
       </div>
     </div>

     <div class="flex items-center justify-center">
         <button @click="previousRukuk" class="py-2 px-3 inline-flex items-center space-x-2 transition rounded-l-lg bg-green-500 hover:bg-green-600 text-gray-100 focus:outline-none"><span>
            <svg class="w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd" />
            </svg></span> <span>Prev</span> 
         </button>
        <button @click="nextRukuk" class="py-2 px-3 inline-flex items-center space-x-2 transition rounded-r-lg bg-green-500 hover:bg-green-600 text-gray-100 focus:outline-none"><span>Next</span> <span><svg class="w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
         <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
         </svg></span> 
      </button>
     </div>
  </section>
    <p class="text-center text-sm py-5 text-gray-700">From ExoApp &copy;{{new Date().getFullYear()}} All right reserved</p> 
</div>
</template>
<script>
import { computed, onMounted, reactive, ref, toRefs } from 'vue';
import { useStore } from 'vuex';
import QuranRukukCard from '../components/QuranRukukCard.vue';
import Spinner from '../components/Spinner.vue';
export default {
  components: { QuranRukukCard, Spinner },
   setup(){

      const store = useStore();

      const state = reactive({
         isProcess: computed(()=> store.state.rukuk.isLoading),
         searchInput: '',
         rukuk: computed(()=> store.state.rukuk.rukuk),
         firstRukukVisible: computed(()=> store.state.rukuk.firstRukukVisible),
         lastRukukVisible: computed(()=> store.state.rukuk.lastRukukVisible),
      })

      onMounted(() =>{
         store.dispatch('rukuk/setRukuk')
      })

      const searching = computed(()=> state.searchInput.trim() !== '');

      const onSearch = computed(()=>{
         var searchData = state.rukuk.filter(post => {
            return post.number.toString()
            .toLowerCase()
            .replace(/[-']+/g,'')
            .includes(
               state.searchInput.toLowerCase()
            )
         });
         
         return searchData;
      
      })

      const previousRukuk = async () =>{
         var data = {
            firstVisible: state.firstRukukVisible,
         }
         await store.dispatch('rukuk/prevPage', data);

         scrollToPageUp();
      }

      const nextRukuk = async ()=>{
         var data = {
            lastVisible: state.lastRukukVisible,
         }
         await store.dispatch('rukuk/nextPage', data);

         scrollToPageUp();
      }

      const pageUp = ref(null)
      const scrollToPageUp = () => {
         pageUp.value.scrollIntoView();
      }
      return{
         ...toRefs(state),
         pageUp,
         onSearch,
         searching,
         previousRukuk,
         nextRukuk
         
      }
   }
}
</script>
