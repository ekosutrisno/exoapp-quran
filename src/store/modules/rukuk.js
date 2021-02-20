import { firestore } from "../../service/firebase";

const rukuk = {
  namespaced: true,
  state: () => {
    return {
      isLoading: false,
      rukuk: [],
      ayahsPagination: [],
      firstRukukVisible: {},
      lastRukukVisible: {},
    };
  },
  mutations: {
    SET_IS_LOADING: (state, loading) => (state.isLoading = loading),
    SET_RUKUK: (state, data) => (state.rukuk = data),
    SET_RUKUK_FIRSTV: (state, data) => (state.firstRukukVisible = data),
    SET_RUKUK_LASTV: (state, data) => (state.lastRukukVisible = data),
  },
  actions: {
    async setRukuk({ commit, dispatch }) {
      commit("SET_IS_LOADING", true);

      firestore
        .collection("rukuk_collections")
        .orderBy("number", "asc")
        .limit(40)
        .get()

        .then((menu) => {
          let dataMenu = [];

          var fisrtVisible = menu.docs[0];
          dispatch("setRukukFirstVisible", fisrtVisible);

          var lastVisible = menu.docs[menu.docs.length - 1];
          dispatch("setRukukLastVisible", lastVisible);

          menu.docs.forEach((surah) => {
            dataMenu.push(surah.data());
          });

          commit("SET_RUKUK", dataMenu);
          commit("SET_IS_LOADING", false);
        });
    },

    setRukukFirstVisible({ commit }, firstVisible) {
      commit("SET_RUKUK_FIRSTV", firstVisible);
    },
    setRukukLastVisible({ commit }, lastVisible) {
      commit("SET_RUKUK_LASTV", lastVisible);
    },

    prevPage({ commit, dispatch }, data) {
      var next = firestore
        .collection("rukuk_collections")
        .orderBy("number", "asc")
        .endBefore(data.firstVisible)
        .limitToLast(40);

      next.get().then((doc) => {
        var fisrtVisible = doc.docs[0];
        dispatch("setRukukFirstVisible", fisrtVisible);

        var lastVisible = doc.docs[doc.docs.length - 1];
        dispatch("setRukukLastVisible", lastVisible);

        let tempData = [];

        doc.forEach((ayat) => {
          tempData.push(ayat.data());
        });

        commit("SET_RUKUK", tempData);
      });
    },
    nextPage({ commit, dispatch }, data) {
      var next = firestore
        .collection("rukuk_collections")
        .orderBy("number", "asc")
        .startAfter(data.lastVisible)
        .limit(40);

      next.get().then((doc) => {
        var fisrtVisible = doc.docs[0];
        dispatch("setRukukFirstVisible", fisrtVisible);

        var lastVisible = doc.docs[doc.docs.length - 1];
        dispatch("setRukukLastVisible", lastVisible);

        let tempData = [];

        doc.forEach((ayat) => {
          tempData.push(ayat.data());
        });

        commit("SET_RUKUK", tempData);
      });
    },
  },
};

export default rukuk;
