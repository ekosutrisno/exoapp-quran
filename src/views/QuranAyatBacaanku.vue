<template>
   <div v-if="isProcess" class="absolute flex items-center justify-center inset-0 z-50 bg-opacity-50 bg-gray-900">
         <Spinner/>
   </div>
   <div class="bg-gray-200 min-h-screen w-full on-scrollbar h-screen nv-transition overflow-y-auto">
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
                  <img class="object-cover w-full h-full rounded-full" :src="currentUser ? currentUser.photoURL: 'https://avatars0.githubusercontent.com/u/51039205?s=460&u=cb1d242b6a9b13a3b6383e46b5410fafe471b63d&v=4'" alt="my-avatar">
               </div>
               <h1 class="text-3xl md:text-5xl font-semibold my-4 text-gray-100">Bacaanku</h1>
               <p v-if="ayats" class="font-semibold text-gray-100 md:text-lg text-center">Surat ke <span class="font-semibold text-indigo-400"> {{ ayats.sura_id}} </span> Ayat <span class="font-semibold text-indigo-400"> {{ ayats.aya_number}} </span></p>
         </div>
         <div class="w-full md:mx-auto max-w-3xl -mb-24 bg-white z-40 mt-4 rounded-lg h-16">
               <div class="flex flex-col md:flex-row items-center justify-center text-xl md:text-3xl divide-y md:divide-y-0 md:divide-x h-full">
                  <div class="px-4 w-full text-center font-semibold text-green-600">ExoApp</div>
                  <div class="px-4 w-full text-center font-semibold text-cyan-600">Qur'an</div>
               </div>
         </div>
      </div>
  </section>
   <section class="min-w-min pt-20 pb-5 bg-quran min-h-full">
     <div  class="max-w-7xl mx-auto px-4 pb-4 flex flex-col items-end space-y-2">
        <div class="mb-4 mx-auto"><div class="font-quran text-center mb-2 text-xl font-semibold">بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</div>
            <p class="text-center text-sm text-gray-600">Dengan nama Allah Yang Maha Pengasih, Maha Penyayang.</p>
        </div>
         <div v-if="ayats && isLogin" class="mx-auto w-full">
            <QuranAyatCard :ayat="ayats"/>
         </div>
         <div v-if="ayats && isLogin" class="flex mx-auto items-center my-4 justify-center">
            <button @click="onLanjutBacaan" class="py-2 px-3 inline-flex items-center space-x-2 transition rounded-lg bg-indigo-500 hover:bg-indigo-600 text-gray-100 focus:outline-none"><span>Lanjut Bacaan</span> <span><svg class="w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
               <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
               </svg></span> 
            </button>
         </div>
         <div v-if="!ayats && isLogin" class="mx-auto w-full max-w-sm">
            <router-link to="/menu">
               <div class="transition-shadow relative h-20 duration-300 flex overflow-hidden flex-col bg-white rounded-md shadow-sm hover:shadow-xl">
                  <div class="max-h-72 w-full overflow-hidden absolute inset-0">
                     <img class="w-full h-28 sm:h-full max-h-72 object-cover" src="https://i.pinimg.com/236x/d8/b6/87/d8b687118ccba1b24039a1a426fd9955.jpg" />
                  </div>
                  <div class="h-16 absolute z-30 sm:h-full max-h-72 w-full overflow-hidden py-2 px-3 md:p-5">
                     <span class="font-semibold text-white">Kamu belum menandai Ayat </span> 
                     <p class="text-xs text-gray-100">Silahkan pilih bacaan terakhir Kamu🎀</p>
                  </div>
                  <div class="bg-gray-900 absolute inset-0 z-20 bg-opacity-30"></div>
               </div>
            </router-link>
         </div>
         <div v-if="!isLogin" class="mx-auto w-full max-w-sm">
            <router-link to="/menu">
               <div class="transition-shadow relative h-20 duration-300 flex overflow-hidden flex-col bg-white rounded-md shadow-sm hover:shadow-xl">
                  <div class="max-h-72 w-full overflow-hidden absolute inset-0">
                     <img class="w-full h-28 sm:h-full max-h-72 object-cover" src="https://i.pinimg.com/236x/d8/b6/87/d8b687118ccba1b24039a1a426fd9955.jpg" />
                  </div>
                  <div class="h-16 absolute z-30 sm:h-full max-h-72 w-full overflow-hidden py-2 px-3 md:p-5">
                     <span class="font-semibold text-white">Fitur Non Aktif</span> 
                     <p class="text-xs text-gray-100">Fitur akan aktif setelah Login🎀</p>
                  </div>
                  <div class="bg-gray-900 absolute inset-0 z-20 bg-opacity-30"></div>
               </div>
            </router-link>
         </div>
         <div class="w-full rounded-r-md border-l-4 border-indigo-400 mx-auto max-w-xl text-xs sm:text-sm text-center bg-gray-100 mt-10 shadow-sm max-h-16 h-full p-2">
               <p>🎀: Kamu dapat dengan mudah melanjutkan bacaan terakhir Kamu dari sini.</p>
         </div>
     </div>
   </section>
    <p class="text-center text-sm py-5 text-gray-700">From ExoApp &copy;{{new Date().getFullYear()}} All right reserved</p> 
</div>
</template>

<script>
import { computed, onMounted, reactive,  toRefs } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import QuranAyatCard from '../components/QuranAyatCard.vue';
import Spinner from '../components/Spinner.vue';
import { auth } from '../service/firebase';
export default {
  components: { QuranAyatCard, Spinner },
   setup(){
      const store = useStore();
      const router = useRouter();

      const state = reactive({
         isProcess: computed(()=> store.state.account.isLoading),
         ayats: computed(()=> store.state.account.bacaanku) ||null,
         isLogin: computed(()=>localStorage.getItem('user_id')),
         currentUser: computed(()=> auth.currentUser)
      })

      onMounted(()=>{
         if(state.isLogin){
            store.dispatch('account/onGetBacaanku');
         }
            
      })

      const onLanjutBacaan = ()=>{
         router.push({name: 'QuranAyatDetail', query:{ sn: state.ayats.sura_id, an: state.ayats.aya_number}})
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

      return{
         ...toRefs(state),
         convertToArab,
         onLanjutBacaan,
         back
      }
   }
}
</script>

