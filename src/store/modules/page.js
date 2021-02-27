import { firestore } from "../../service/firebase";

const page = {
  namespaced: true,
  state: () => {
    return {
      isLoading: false,
      isPush: false,
      isLast: false,
      pages: [],
      lastPageVisible: {},
    };
  },
  mutations: {
    SET_IS_LOADING: (state, loading) => (state.isLoading = loading),
    SET_IS_PUSH: (state, loading) => (state.isPush = loading),
    SET_IS_LAST: (state, loading) => (state.isLast = loading),
    SET_PAGE: (state, data) => (state.pages = data),
    SET_PAGE_NEXT: (state, data) => state.pages.push(...data),
    SET_PAGE_LASTV: (state, data) => (state.lastPageVisible = data),
  },
  actions: {
    async setPage({ commit, dispatch }) {
      commit("SET_IS_LOADING", true);

      firestore
        .collection("page_collections")
        .orderBy("page", "asc")
        .limit(100)
        .get()

        .then((menu) => {
          let dataMenu = [];

          var lastVisible = menu.docs[menu.docs.length - 1];
          dispatch("setPageLastVisible", lastVisible);

          menu.docs.forEach((surah) => {
            dataMenu.push(surah.data());
          });

          commit("SET_PAGE", dataMenu);
          commit("SET_IS_LOADING", false);
        });
    },
    setPageLastVisible({ commit }, lastVisible) {
      commit("SET_PAGE_LASTV", lastVisible);
    },
    nextPage({ commit, dispatch }, data) {
      commit("SET_IS_PUSH", true);

      var next = firestore
        .collection("page_collections")
        .orderBy("page", "asc")
        .startAfter(data.lastVisible)
        .limit(100);

      next.get().then((doc) => {
        var lastVisible = doc.docs[doc.docs.length - 1];
        dispatch("setPageLastVisible", lastVisible);

        var checkIsLas = lastVisible.data();

        if (checkIsLas.page === 604) commit("SET_IS_LAST", true);

        let tempData = [];

        doc.forEach((ayat) => {
          tempData.push(ayat.data());
        });

        commit("SET_PAGE_NEXT", tempData);
        commit("SET_IS_PUSH", false);
      });
    },
  },
};

export default page;
