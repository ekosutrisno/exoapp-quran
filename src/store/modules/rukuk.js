import { firestore } from "../../service/firebase";

const rukuk = {
  namespaced: true,
  state: () => {
    return {
      isLoading: false,
      isPush: false,
      isLast: false,
      rukuk: [],
      lastRukukVisible: {},
    };
  },
  mutations: {
    SET_IS_LOADING: (state, loading) => (state.isLoading = loading),
    SET_IS_PUSH: (state, loading) => (state.isPush = loading),
    SET_IS_LAST: (state, loading) => (state.isLast = loading),
    SET_RUKUK: (state, data) => (state.rukuk = data),
    SET_NEXT_RUKUK: (state, data) => state.rukuk.push(...data),
    SET_RUKUK_LASTV: (state, data) => (state.lastRukukVisible = data),
  },
  actions: {
    async setRukuk({ commit, dispatch }) {
      commit("SET_IS_LOADING", true);

      firestore
        .collection("rukuk_collections")
        .orderBy("number", "asc")
        .limit(100)
        .get()

        .then((menu) => {
          let dataMenu = [];

          var lastVisible = menu.docs[menu.docs.length - 1];
          dispatch("setRukukLastVisible", lastVisible);

          menu.docs.forEach((surah) => {
            dataMenu.push(surah.data());
          });

          commit("SET_RUKUK", dataMenu);
          commit("SET_IS_LOADING", false);
        });
    },
    setRukukLastVisible({ commit }, lastVisible) {
      commit("SET_RUKUK_LASTV", lastVisible);
    },
    nextPage({ commit, dispatch }, data) {
      commit("SET_IS_PUSH", true);

      var next = firestore
        .collection("rukuk_collections")
        .orderBy("number", "asc")
        .startAfter(data.lastVisible)
        .limit(100);

      next.get().then((doc) => {
        var lastVisible = doc.docs[doc.docs.length - 1];
        dispatch("setRukukLastVisible", lastVisible);

        var checkIsLast = lastVisible.data();
        if (checkIsLast.number === 556) commit("SET_IS_LAST", true);

        let tempData = [];

        doc.forEach((ayat) => {
          tempData.push(ayat.data());
        });

        commit("SET_NEXT_RUKUK", tempData);
        commit("SET_IS_PUSH", false);
      });
    },
  },
};

export default rukuk;
