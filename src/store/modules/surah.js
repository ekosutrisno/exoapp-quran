import { firestore } from "../../service/firebase";

const surah = {
  namespaced: true,
  state: () => {
    return {
      isLoading: false,
      isPush: false,
      surahs: [],
      surah: {},
      ayahs: [],
      ayahsPagination: [],
      firstAyahVisible: {},
      lastAyahVisible: {},
    };
  },
  mutations: {
    SET_IS_LOADING: (state, loading) => (state.isLoading = loading),
    SET_SURAHS: (state, data) => (state.surahs = data),
    SET_SURAH: (state, data) => (state.surah = data),
    SET_AYAH: (state, data) => (state.ayahs = data),
    SET_AYAH_IS_PUSH: (state, data) => (state.isPush = data),
    SET_AYAH_FIRSTV: (state, data) => (state.firstAyahVisible = data),
    SET_AYAH_LASTV: (state, data) => (state.lastAyahVisible = data),
    SET_NEXT_AYAH: (state, data) => state.ayahs.push(...data),
  },
  actions: {
    async setSurahs({ commit }) {
      commit("SET_IS_LOADING", true);

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
          commit("SET_IS_LOADING", false);
        });
    },

    setAyah({ commit, dispatch }, surah_id) {
      commit("SET_IS_LOADING", true);

      firestore
        .collection("surah_collections")
        .doc(surah_id)
        .collection("ayahs")
        .orderBy("aya_number", "asc")
        .limit(20)
        .get()
        .then((ayah) => {
          var fisrtVisible = ayah.docs[0];
          dispatch("setAyahFirstVisible", fisrtVisible);

          var lastVisible = ayah.docs[ayah.docs.length - 1];
          dispatch("setAyahLastVisible", lastVisible);

          let dataAyah = [];

          ayah.forEach((doc) => {
            dataAyah.push(doc.data());
          });

          commit("SET_AYAH", dataAyah);
          commit("SET_IS_LOADING", false);
        });
    },

    setAyahFirstVisible({ commit }, firstVisible) {
      commit("SET_AYAH_FIRSTV", firstVisible);
    },
    setAyahLastVisible({ commit }, lastVisible) {
      commit("SET_AYAH_LASTV", lastVisible);
    },

    setSurah({ commit, dispatch }, surah_number) {
      commit("SET_IS_LOADING", true);

      let surah_no = surah_number ? surah_number : "1";

      firestore
        .collection("surah_collections")
        .doc(surah_no.toString())
        .get()
        .then((doc) => {
          if (doc.exists) {
            commit("SET_SURAH", doc.data());
            dispatch("setAyah", doc.data().id.toString());
            commit("SET_IS_LOADING", false);
          }
        });
    },
    nextPage({ commit, dispatch }, data) {
      commit("SET_AYAH_IS_PUSH", true);

      var next = firestore
        .collection("surah_collections")
        .doc(data.surah_id)
        .collection("ayahs")
        .orderBy("aya_number", "asc")
        .startAfter(data.lastVisible)
        .limit(20);

      next.get().then((doc) => {
        var fisrtVisible = doc.docs[0];
        dispatch("setAyahFirstVisible", fisrtVisible);

        var lastVisible = doc.docs[doc.docs.length - 1];
        dispatch("setAyahLastVisible", lastVisible);

        let tempData = [];

        doc.forEach((ayat) => {
          tempData.push(ayat.data());
        });

        commit("SET_NEXT_AYAH", tempData);
        commit("SET_AYAH_IS_PUSH", false);
      });
    },
  },
};

export default surah;
