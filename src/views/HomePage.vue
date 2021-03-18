<template>
<div class="h-screen flex items-center justify-center">
  <div class="nv-transition w-full max-w-screen-sm">
    <img class="mx-auto w-40" alt="Vue logo" src="../assets/logo.png" />
    <div class="text-center ">
      <h1 class="text-xl font-semibold text-gray-300">E-Qur'an</h1>
      <p class="text-gray-400 text-sm font-normal">Al-Quran Digital Bahasa Indonesia</p>
    </div>
    <div class="flex items-center justify-center my-10 space-x-4">
      <router-link to="/menu" type="button" class="py-3 px-4 transition-colors bg-indigo-500 font-semibold hover:bg-indigo-400 rounded text-gray-100">Beranda</router-link>
    </div>
    <p class="text-center text-sm text-gray-400">From ExoApp <br> &copy;{{new Date().getFullYear()}} All right reserved</p>
  </div>
</div>
</template>