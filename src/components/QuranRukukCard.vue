<template>
   <div class="bg-gray-100 bg-opacity-90 hover:shadow-lg font-quran group border-2 border-transparent hover:border-gray-400 hover:border-opacity-75 transition cursor-pointer flex flex-col max-h-48 w-full max-w-md h-full mx-auto mb-2 rounded-lg p-5">

    <div class="w-full flex items-start py-2 justify-between">
      <div>
        <span :class="[rukuk.number % 2 === 0 ? 'text-green-400' : 'text-indigo-400']" class="font-bold text-xl">
          Rukuk
        </span></div>
      <div class="text-gray-900 w-10 h-10 rounded-full bg-gray-200 ring-1 ring-gray-300 ring-opacity-90 flex items-center justify-center font-semibold">
         {{ rukuk.number }}
      </div>
    </div>
    <h1 class="text-right text-3xl font-semibold text-gray-700 transition group-hover:text-gray-900">{{rukuk.surat}}  <span class="text-sm">({{rukuk.ayat}})</span></h1>
    <div class="inline-flex space-x-2 text-xs mt-2">
      <div :class="[ rukuk.number % 2 === 0 ? 'text-green-400' : 'text-indigo-400' ]" class="inline-flex items-center space-x-1 font-semibold uppercase">
        <svg class="w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
        </svg>
    </div>
    </div>
  </div>
</template>
<script>
export default {
   props:{
      rukuk:{
         type: Object,
         required: true
      }
   }
}
</script>