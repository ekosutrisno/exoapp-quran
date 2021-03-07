<template>
   <div class="min-h-screen w-full absolute inset-0 max-w-screen-sm mx-auto flex flex-col justify-center items-center">
      <div class="h-full w-full p-4 nv-transition">
         <div class="mx-auto mb-3">
            <img class="w-32 h-32 mx-auto" src="https://laracasts.s3.amazonaws.com/series/thumbnails/testing-jargon-2.png?v=8">
         </div>
         <h1 class="text-center text-lg font-semibold text-gray-900 mb-6">Sorry, Under Constructions!</h1>
         <div class="text-lg w-full space-x-3 inline-flex items-center mx-auto justify-center text-gray-800 mb-2"> 
            <button @click="$router.back()" type="button" class="py-2.5 px-6 text-xl inline-flex items-center rounded hover:bg-opacity-80 font-semibold text-gray-100 bg-green-500 focus:outline-none">
               <span>
                  <svg class="w-5 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                  </svg>
               </span>Back
            </button>
            <button @click="$router.replace('/')" type="button" class="py-3 px-6 text-xl rounded hover:bg-opacity-80 font-semibold text-gray-100 bg-gray-800 ring-1 ring-gray-700  focus:outline-none">
               <svg class="text-gray-300 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
               </svg>
            </button>
         </div>
         <p class="text-center mt-6 text-sm text-gray-400">From ExoApp &copy;{{new Date().getFullYear()}} All right reserved</p>
      </div>
   </div>
</template>
<script>
export default {
}
</script>