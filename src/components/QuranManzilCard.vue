<template>
   <div class="bg-white shadow-sm relative overflow-hidden hover:shadow-xl font-quran group transition-shadow sm:cursor-pointer flex flex-col select-none max-h-48 w-full max-w-md h-full mx-auto mb-2 rounded-md p-5">
     <div class="absolute -left-10 -bottom-10 w-28 h-28 rounded-full bg-purple-200 bg-opacity-25">
    </div>
     <div class="absolute left-10 bottom-10 w-10 h-10 rounded-full bg-purple-200 bg-opacity-25">
    </div>
     <div class="absolute -right-5 -top-5 w-14 h-14 rounded-full bg-purple-200 bg-opacity-20">
    </div>
    <div class="w-full flex items-start py-2 justify-between">
      <div>
        <span class="font-bold text-blue-500 text-xl">
          Manzil ({{ manzil.number }})
        </span>
      </div>
    </div>
    <h1 class="text-right text-4xl font-semibold text-gray-900">{{manzil.surat}}  <span class="text-sm">({{manzil.ayat}})</span></h1>
    <div class="inline-flex space-x-2 text-xs mt-2">
      <div class="inline-flex items-center space-x-1 text-blue-500 font-semibold uppercase">
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
      manzil:{
         type: Object,
         required: true
      }
   }
}
</script>