<template>
<router-link :to="{path: '/quran-page', query:{surah_number: surah.id}}">
   <div class="bg-gray-100 hover:shadow-lg font-quran group border-2 border-transparent hover:border-gray-400 hover:border-opacity-75 transition cursor-pointer flex flex-col max-h-48 w-full max-w-md h-full mx-auto mb-2 rounded-lg p-5">

    <div class="w-full flex items-start py-2 justify-between">
      <div>
        <span class="font-bold text-lg text-gray-800">
          {{ surah.surat_name }}
        </span>
      <p class="text-sm text-gray-600"><span class="font-semibold"> {{ surah.surat_terjemahan}}.</span></p>
      <p class="text-xs text-gray-500"><span class="font-semibold"> {{ surah.count_ayat}} ayat.</span></p>
      </div>
      <div class="text-gray-900 w-10 h-10 rounded-full bg-gray-200 ring-1 ring-gray-300 ring-opacity-90 flex items-center justify-center font-semibold">
         {{ surah.id }}
      </div>
    </div>
    <h1 class="text-right text-3xl font-semibold text-gray-700 transition group-hover:text-gray-900"> <span class="text-sm">( {{ surah.surat_text_full}})</span> {{surah.surat_text}} </h1>
    <div class="inline-flex space-x-2 text-xs mt-2">
      <div :class="[ surah.revelation_type == 'Meccan' ? 'text-indigo-500' : 'text-gray-700' ]" class="inline-flex items-center space-x-1 font-semibold uppercase">
        <svg class="w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clip-rule="evenodd" />
        </svg>
        <div>
          {{surah.surat_golongan}} 
        </div> 
    </div>
    </div>
  </div>
</router-link>
</template>
<script>
export default {
   props:{
      surah:{
         type: Object,
         required: true
      }
   }
}
</script>