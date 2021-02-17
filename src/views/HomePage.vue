<template>
  <div class="h-full min-h-screen">
    <img class="mx-auto" alt="Vue logo" src="../assets/logo.png" />
    <div class="text-center ">
      <h1 class="text-3xl font-semibold text-gray-300">Welcome to ExoApp Qur'an</h1>
      <p class="text-gray-400 font-normal">Read and Study Alqur'an anywhere.</p>
    </div>
    <div class="flex items-center justify-center my-10 space-x-4">
      <router-link to="/" type="button" class="py-3 px-4 transition-colors bg-green-500 hover:bg-green-400 rounded text-gray-100">Dokumentasi</router-link>
      <router-link to="/metadata" type="button" class="py-3 px-4 transition-colors bg-green-500 hover:bg-green-400 rounded text-gray-100">Mulai</router-link>
    </div>
    <p class="text-center text-sm text-gray-400">From Eko Sutrisno &copy;{{new Date().getFullYear()}} All right reserved</p>
  </div>
</template>
<script>
export default {
}
</script>