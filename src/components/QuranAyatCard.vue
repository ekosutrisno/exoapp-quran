<template>
<div class="w-full group nv-transition text-gray-800 hover:bg-gray-100 py-4 transition duration-300 max-w-screen-md mx-auto font-quran font-semibold text-right px-4 text-xl rounded-bl-3xl border-r-4 border-transparent cursor-pointer hover:border-gray-400 hover:shadow">
   <p> 
   <span class="group-hover:text-quran-brown-text leading-10 select-none">{{ayat.aya_text}}</span>   
   <span class="text-xl text-quran-brown-text font-mono"> -{{convertToArab(ayat.aya_number)}}</span> 
   </p> 
   <p class="text-base font-normal text-left select-none"> <span class="font-semibold">[{{ayat.sura_id}}:{{ayat.aya_number}}] </span> - <span class="font-semibold text-purple-600">Juz {{ayat.juz_id}}</span> |{{ayat.translation_aya_text}}</p>
</div>
</template>

<script>
export default {
   props:{
      ayat:{
         type: Object
      }
   },
   setup(){
        const convertToArab = (str) => {
         var find = ['0','1','2','3','4','5','6','7','8','9'];
         var replace = ['٠','١','٢','٣','٤','٥','٦','٧','٨','٩'];
         if(str !== undefined)
            for (var i = 0; i < find.length; i++) {
               str = str.toString().replace(new RegExp(find[i],"g"), replace[i]);
            }

         return str;
      };

      return{
         convertToArab
      }
   }
}
</script>