<template>
<router-link class="cursor-default sm:cursor-pointer" :to="{name: 'QuranAyatDetail', query:{ sn: juz.surat, an: juz.ayat}}">

   <div class="bg-white shadow-sm hover:shadow-xl relative overflow-hidden font-quran group transition sm:cursor-pointer flex flex-col max-h-48 w-full max-w-md h-full mx-auto mb-2 rounded-md select-none p-5">
     <div :class="[juz.number % 2 === 0  ? 'bg-purple-200': 'bg-green-200']" class="absolute -left-10 -top-5 w-20 h-20 rounded-r-full bg-opacity-10">
      </div>
     <div :class="[juz.number % 2 === 0  ? 'bg-purple-200': 'bg-green-200']" class="absolute -left-10 transform rotate-45 -bottom-5 w-20 h-20 rounded-r-full bg-opacity-20">
      </div>
    <div class="w-full flex items-start py-2 justify-between">
      <div>
        <span :class="[juz.number % 2 === 0 ? 'text-purple-500' : 'text-green-500']" class="font-bold text-xl">
          Juz
        </span></div>
      <div class="text-gray-900 absolute -right-2 -top-2 w-12 h-12 rounded-full bg-gray-50 bg-opacity-50 flex items-center justify-center font-semibold">
         {{ juz.number }}
      </div>
    </div>
    <h1 class="text-right text-3xl font-semibold text-gray-900"> <sup class="text-xs">Surat</sup> {{juz.surat}}<span class="text-sm">({{juz.ayat}})</span></h1>
    <div class="inline-flex space-x-2 text-xs mt-2">
      <div :class="[ juz.number % 2 === 0 ? 'text-purple-500' : 'text-green-500' ]" class="inline-flex items-center space-x-1 font-semibold uppercase">
        <svg class="w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
        </svg>
    </div>
    </div>
  </div>
</router-link>
</template>
<script>
export default {
   props:{
      juz:{
         type: Object,
         required: true
      }
   }
}
</script>