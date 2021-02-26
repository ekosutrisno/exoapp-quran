import { firestore } from "../../service/firebase";

const ayatFilter = {
  namespaced: true,
  state: () => {
    return {
      isLoading: false,
      isPush: false,
      ayats: [],
      surat: {},
      last_ayat: {},
    };
  },
  mutations: {
    SET_IS_LOADING: (state, loading) => (state.isLoading = loading),
    SET_AYAH_IS_PUSH: (state, data) => (state.isPush = data),
    SET_AYAT: (state, data) => (state.ayats = data),
    SET_NEXT_AYAT: (state, data) => state.ayats.push(...data),
    SET_LAST_AYAT: (state, data) => (state.last_ayat = data),
    SET_SURAT: (state, data) => (state.surat = data),
  },
  actions: {
    setAyatDetail({ commit, dispatch }, payload) {
      firestore
        .collection("ayah_collections")
        .where("sura_id", "==", parseInt(payload.surat))
        .where("aya_number", "==", parseInt(payload.ayat))
        .get()
        .then((aya) => {
          if (aya.docs.length > 0) {
            var initialAyat = aya.docs[0];

            firestore
              .collection("ayah_collections")
              .orderBy("aya_id", "asc")
              .startAt(initialAyat)
              .limit(25)
              .get()
              .then((ayats) => {
                var lastVisible = ayats.docs[ayats.docs.length - 1];
                dispatch("setLastAyat", lastVisible);

                let dataAyah = [];

                ayats.forEach((ayat) => {
                  dataAyah.push(ayat.data());
                });

                commit("SET_AYAT", dataAyah);
                commit("SET_IS_LOADING", false);
              });
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

            commit("SET_SURAT", surat_detail);
            dispatch("setAyatDetail", payload);
          }
        });
    },
    nextAyat({ commit, dispatch, state }) {
      commit("SET_AYAH_IS_PUSH", true);

      var next = firestore
        .collection("ayah_collections")
        .orderBy("aya_id", "asc")
        .startAfter(state.last_ayat)
        .limit(25);

      next.get().then((doc) => {
        var lastVisible = doc.docs[doc.docs.length - 1];
        dispatch("setLastAyat", lastVisible);

        let tempData = [];

        doc.forEach((ayat) => {
          tempData.push(ayat.data());
        });

        commit("SET_NEXT_AYAT", tempData);
        commit("SET_AYAH_IS_PUSH", false);
      });
    },
    setLastAyat({ commit }, payload) {
      commit("SET_LAST_AYAT", payload);
    },
  },
};

export default ayatFilter;
