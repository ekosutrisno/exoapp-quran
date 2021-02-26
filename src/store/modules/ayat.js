import { firestore } from "../../service/firebase";

const ayat = {
  namespaced: true,
  state: () => {
    return {
      isLoading: false,
      ayat_detail: {},
      surat_detail: {},
    };
  },
  mutations: {
    SET_IS_LOADING: (state, loading) => (state.isLoading = loading),
    SET_AYAT_DETAIL: (state, data) => (state.ayat_detail = data),
    SET_SURAT_DETAIL: (state, data) => (state.surat_detail = data),
  },
  actions: {
    setAyatDetail({ commit }, payload) {
      firestore
        .collection("surah_collections")
        .doc(payload.surat.toString())
        .collection("ayahs")
        .doc(payload.ayat.toString())
        .get()
        .then((doc) => {
          if (doc.exists) {
            const ayat_detail = doc.data();
            commit("SET_AYAT_DETAIL", ayat_detail);

            commit("SET_IS_LOADING", false);
          }
        });
    },

    setSuratDetail({ commit, dispatch }, payload) {
      commit("SET_IS_LOADING", true);

      firestore
        .collection("surah_collections")
        .doc(payload.surat.toString())
        .get()
        .then((doc) => {
          if (doc.exists) {
            const surat_detail = doc.data();

            commit("SET_SURAT_DETAIL", surat_detail);
            dispatch("setAyatDetail", payload);
          }
        });
    },
  },
};

export default ayat;
