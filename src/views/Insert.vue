<template>
  <div class="p-10">
     <button @click="insertData" class="text-white m-2 py-2 px-6 bg-green-500">Menu Surat</button>
     <button @click="insertDataInd" class="text-white  m-2py-2 hidden px-6 bg-green-500">Surat dan Surat</button>
     <button @click="insertSajda" class="text-white m-2 py-2 px-6 bg-green-500">Sajda</button>
     <button @click="insertManzil" class="text-white m-2 py-2 px-6 bg-green-500">Manzil</button>
     <button @click="insertRukuk" class="text-white m-2 py-2 px-6 bg-green-500">Rukuk</button>
  </div>
</template>

<script>
import { firestore } from "../service/firebase";
import { reactive, toRefs } from 'vue';
export default {
  setup() {
    const state = reactive({
       data: [],
       dataJson: [],
       sajda: [],
       rukuk: [],
       manzil: [],
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
            surat_english_name: element.englishName,
            surat_text_full: element.name,
            surat_english_terjemahan: element.englishNameTranslation,
            surat_golongan: element.revelationType == "Meccan" ? "Makkiyyah" : "Madaniyyah",
            revelation_type: element.revelationType
          }
        await firestore
                .collection("surah_collections")
                .doc(element.number.toString())
                .set(data, {merge : true})
                .then(()=>console.log("added"));

       });
    };

    const insertSajda = () =>{
       state.sajda.forEach(async element => {

          const data = {
            ayat: element.ayah,
            recommended: element.recommended,
            obligatory: element.obligatory,
            surat: element.surah
          }
        await firestore
                .collection("sajda_collections")
                .add(data)
                .then(()=>console.log("added"));

       });
    }

    const insertManzil = () =>{
       state.manzil.forEach(async element => {

          const data = {
            ayat: element.ayah,
            surat: element.surah
          }
        await firestore
                .collection("manzil_collections")
                .add(data)
                .then(()=>console.log("added"));

       });
    }

    const insertRukuk = () =>{
       state.rukuk.forEach(async element => {

          const data = {
            ayat: element.ayah,
            surat: element.surah
          }
        await firestore
                .collection("rukuk_collections")
                .add(data)
                .then(()=>console.log("added"));

       });
    }

    return{
       ...toRefs(state),
       insertData,
       insertDataInd,
       insertSajda,
       insertManzil,
       insertRukuk
    }
  },
};
</script>