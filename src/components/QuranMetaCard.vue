<template>
<router-link class="cursor-default sm:cursor-pointer" :to="{path: '/quran-page', query:{surah_number: surah.id}}">
   <div class="bg-white hover:shadow-xl select-none font-quran group shadow-sm transition sm:cursor-pointer flex flex-col max-h-48 w-full max-w-md h-full mx-auto mb-2 rounded-md p-5 overflow-hidden">

    <div class="w-full flex items-start py-2 justify-between relative">
      <div>
        <span class="font-bold text-lg text-gray-900">
          {{ surah.surat_name }}
        </span>
      <p class="text-sm text-gray-700"><span class="font-semibold"> {{ surah.surat_terjemahan}}</span></p>
      <p class="text-xs text-gray-600"><span class="font-semibold"> {{ surah.count_ayat}} ayat</span></p>
      </div>
      <div class="text-gray-900 absolute -right-10 -top-8 w-24 h-24 rounded-full bg-gray-50 flex items-center justify-center font-semibold">
         {{ surah.id }}
      </div>
      <div class="absolute -left-10 top-0 w-56 h-56 rounded-full bg-blue-200 bg-opacity-20">
      </div>
    </div>
    <h1 class="text-right text-3xl font-semibold text-gray-900"> <span class="text-sm">( {{ surah.surat_text_full}})</span> {{surah.surat_text}} </h1>
    <div class="inline-flex space-x-2 text-xs mt-2">
      <div :class="[ surah.revelation_type == 'Meccan' ? 'text-blue-600' : 'text-gray-700' ]" class="inline-flex items-center space-x-1 font-semibold uppercase">
        <svg class="w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
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