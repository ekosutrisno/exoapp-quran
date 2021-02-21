<template>
<div class="w-full relative group nv-transition text-gray-800 hover:bg-gray-100 py-4 transition duration-300 max-w-screen-md mx-auto font-quran font-semibold text-right px-4 text-xl rounded-bl-3xl border-r-4 border-transparent cursor-pointer hover:border-gray-400 hover:shadow select-none">
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

   <audio v-if="playAudio" class="focus:outline-none mb-4 sm:mb-0 float-right nv-transition mt-2 h-8 w-full max-w-xs" preload :src="ayat.audio" controls>
     <source v-for="(aud, idx) in ayat.audio_secondary" :key="idx" :src="aud" type = "audio/mp3" />
   </audio>
   
   <p class="text-xs font-normal mt-3 text-left"> 
      <span class="font-medium">Info: (Rukuk: {{ayat.rukuk}})(Manzil: {{ayat.manzil}}) </span>
      <span v-if="ayat.sajda" class="font-semibold text-yellow-500">
      - Sajda 
      <svg class="w-4 inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
         <path fill-rule="evenodd" d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
      </svg>
      </span>
   </p>

</div>
</template>

<script>
import { reactive, toRefs } from 'vue';
export default {
   props:{
      ayat:{
         type: Object
      }
   },
   setup(){
         const data = reactive({
            playAudio: false
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

      const togglePlay = ()=>{
         data.playAudio = !data.playAudio;
      }

      return{
         ...toRefs(data),
         convertToArab,
         togglePlay
      }
   }
}
</script>