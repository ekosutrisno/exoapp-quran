<template>
   <div class="mx-auto w-full max-w-xs my-5 text-sm text-center relative group nv-transition text-gray-800 bg-gray-100 p-2 font-quran font-semibold rounded-full select-none">
      <h3 class="text-indigo-800">({{surat.surat_golongan}}) | {{surat.surat_text_full}}</h3>
      <p> {{surat.surat_name}} <span class="text-gray-500 font-thin"> ({{surat.surat_terjemahan}}) </span><span class="text-gray-500 font-thin"> | {{surat.count_ayat}} Ayat</span> </p>
   </div>
</template>

<script>
import { onMounted, reactive, toRefs } from 'vue'
import { firestore } from '../service/firebase';
export default {
   props:{
      sura_id: Number
   },
   setup(props){
      const state = reactive({
         surat_id: props.sura_id,
         surat: {
            surat_golongan:"",
            surat_text_full:"",
            surat_name:"",
            surat_terjemahan:"",
            count_ayat:0

         }
      });

      onMounted(()=> getSuratDetail())

      const getSuratDetail =()=>{
         firestore
         .collection('surah_menu_collection')
         .doc(state.surat_id.toString())
         .get()
         .then(doc =>{
            if (doc.exists) {
               state.surat = doc.data();
            }
         })
      }

      return{
         ...toRefs(state)
      }
   }
}
</script>