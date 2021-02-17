import { firestore } from "../../service/firebase";

const surah = {
  namespaced: true,
  state: () => {
    return {
      surahs: [],
      surah: {},
      ayahs: [],
    };
  },
  mutations: {
    SET_SURAHS: (state, payloadSuarhs) => (state.surahs = payloadSuarhs),
    SET_SURAH: (state, payloadSurah) => (state.surah = payloadSurah),
    SET_AYAH: (state, payloadSurahAyah) => (state.ayahs = payloadSurahAyah),
  },
  actions: {
    async setSurahs({ commit }) {
      firestore
        .collection("surah_menu_collection")
        .orderBy("id", "asc")
        .get()

        .then((menu) => {
          let dataMenu = [];

          menu.docs.forEach((surah) => {
            dataMenu.push(surah.data());
          });

          commit("SET_SURAHS", dataMenu);
        });
    },

    setAyah({ commit }, surah_id) {
      firestore
        .collection("surah_collections")
        .doc(surah_id)
        .collection("ayahs")
        .orderBy("aya_number", "asc")
        .get()
        .then((ayah) => {
          let dataAyah = [];

          ayah.forEach((doc) => {
            dataAyah.push(doc.data());
          });

          commit("SET_AYAH", dataAyah);
        });
    },

    setSurah({ commit, dispatch }, surah_number) {
      let surah_no = surah_number ? surah_number : "1";
      firestore
        .collection("surah_collections")
        .doc(surah_no.toString())
        .get()
        .then((doc) => {
          if (doc.exists) {
            commit("SET_SURAH", doc.data());
            dispatch("setAyah", doc.data().id.toString());
          }
        });
    },
  },
};

export default surah;
