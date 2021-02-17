<template>
  <div class="p-10">
     <button @click="insertData" class="text-white py-2 hidden px-6 bg-green-500">InsertDataSurat</button>
     <button @click="insertDataInd" class="text-white py-2 px-6 bg-green-500">InsertDataSuratIndividual</button>
  </div>
</template>

<script>
import { firestore } from "../service/firebase";
import { reactive, toRefs } from 'vue';
export default {
  setup() {
    const state = reactive({
       data: [],
       dataJson: []
    })


    const insertDataInd = async () => {

      const dataSurah = {
            id: 114,
            surat_name: "An-Nas",
            surat_text: " الناس",
            surat_terjemahan: "Manusia",
            count_ayat: 6,
         }

         await firestore
                .collection("surah_collections")
                .doc(dataSurah.id.toString())
                .set(dataSurah)
                .then(()=>{
                   state.dataJson.forEach(async ayat => {
                     const data = 
                        {
                           aya_id: ayat.aya_id,
                           aya_number: ayat.aya_number,
                           aya_text: ayat.aya_text,
                           sura_id: ayat.sura_id,
                           juz_id: ayat.juz_id,
                           page_number: ayat.page_number,
                           translation_aya_text: ayat.translation_aya_text
                        }
                     
                        await firestore
                           .collection("surah_collections")
                              .doc(dataSurah.id.toString())
                              .collection('ayahs')
                              .doc(data.aya_number.toString())
                              .set(data)
                                 .then(()=>console.log("added"));

                  });
               });
    };

    const insertData = () => {
       state.data.forEach(async element => {

          const data = {
            id: element.id,
            surat_name: element.surat_name,
            surat_text: element.surat_text,
            surat_terjemahan: element.surat_terjemahan,
            count_ayat: element.count_ayat,
          }
        await firestore
                .collection("surah_menu_collection")
                .doc(element.id.toString())
                .set(data)
                .then(()=>console.log("added"));

       });
    };

    return{
       ...toRefs(state),
       insertData,
       insertDataInd
    }
  },
};
</script>