<template>
   <div class="h-full min-h-screen flex flex-col items-center justify-center p-4">
      <div class="w-full max-w-screen-sm mx-auto text-sm text-gray-300 nv-transition">
         <p>
            <span class="font-semibold">Nama</span>: E-Quran - Al-Quran Digital Terjemahan Bahasa Indonesia
               <br/>
               <br/>
             <span class="font-semibold">Deskripsi</span>: E-Quran merupakan Al-Quran Digital Terjemahan Bahasa Indonesia mempunyai fitur lengkap sperti mencari berdasarkan surat, ayat, manzil, rukuk, halaman, juz, tandai bacaan, dan menyimpan ayat-ayat penting ke koleksi favorit.
               <br/>
               <br/>
            <span class="font-semibold text-red-500">Term & Privasi</span>: Email Google pada saat Anda melakukan Login hanya sebagai ID Pengguna semata, akan di jaga kerahasiaannya dan E-Quran tidak menggunakan untuk kepentingan lainnya.
               <br/>
               <br/>
             <span class="font-semibold">Developer</span>: <a href="https://github.com/ekosutrisno" target="_blank">Eko Sutrisno (ExoApp)</a>
               <br/>
             <span class="font-semibold">Co-Developer</span>: <a href="https://github.com/safrizal997" target="_blank">Safrizal</a>
               <br/>
             <span class="font-semibold">Tester</span>: Siti Aminah

               <br>
               <br>
             <span class="font-semibold">Sumber data:</span>
            <ul>
               <li>&bull; <a href="https://alquran.cloud/" target="_blank">Meta Quran Cloud</a></li>
               <li>&bull; <a href="https://quran.kemenag.go.id/" target="_blank">Quran Kemenag</a></li>
            </ul>
               <br>
             <span class="font-semibold">Teknologi:</span>
            <ul>
               <li>&bull; Vue Js v3.0.0 (JS Framework)</li>
               <li>&bull; Tailwincss (CSS Framework)</li>
               <li>&bull; Firebase (Google Cloud Platform)</li>
               <li>&bull; Netlify (Hosting)</li>
            </ul>

               <br>
             <span class="font-semibold">Terimakasih: </span>
             <span class="text-center">Puji Syukur kepada Allah SWT❤ dan Sholawat kepada Nabi Muhammad SAW❤, serta terimaksih kepada semua pihak yang telah memberikan Doa dan dukungan🎀.</span>
         </p>

      </div>
         <router-link to="/menu" class="py-2 px-3 inline-flex mt-4 text-sm items-center space-x-2 transition rounded-lg bg-indigo-500 hover:bg-indigo-600 text-gray-100 focus:outline-none">
            <span>Beranda</span>
         </router-link>
         <p class="mt-4 text-center text-green-400 text-xs">E-Quran v1.1.4</p>
   </div>
</template>

<script>
   export default {
      
   }
</script>