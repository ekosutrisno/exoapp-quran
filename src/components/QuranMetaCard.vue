<template>
<router-link :to="{path: '/quran-page', query:{surah_number: surah.id}}">
   <div class="bg-gray-200 hover:shadow-lg font-quran hover:bg-gray-200 border-2 border-transparent hover:border-gray-400 transition cursor-pointer flex flex-col max-h-44 w-full max-w-md h-full mx-auto mb-2 rounded-lg p-5">

    <div class="w-full flex items-start py-2 justify-between">
      <div>
        <span class="font-bold text-lg text-gray-800">
          {{ surah.surat_name }}
        </span>
      <p class="text-sm text-gray-600"><span class="font-semibold"> {{ surah.surat_terjemahan}}.</span></p>
      <p class="text-xs text-gray-500"><span class="font-semibold"> {{ surah.count_ayat}} ayat.</span></p>
      </div>
      <div class="text-gray-900 w-10 h-10 rounded-full bg-gray-300 ring-1 ring-gray-400 ring-opacity-75 flex items-center justify-center font-semibold">
         {{ surah.id }}
      </div>
    </div>
    <h1 class="text-right text-4xl font-semibold text-gray-800"> {{surah.surat_text}} </h1>
    <!-- <div class="inline-flex space-x-2 text-xs mt-2">
      <span class="py-0.5 px-2.5 font-bold border border-transparent rounded-full uppercase" :class="[surah.revelationType === 'Medinan' ? 'bg-blue-100 text-blue-700 border-blue-300' : 'bg-yellow-100 text-yellow-600 border-yellow-300']"> {{surah.revelationType}} </span>
    </div> -->
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