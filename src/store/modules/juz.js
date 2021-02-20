import { firestore } from "../../service/firebase";

const juz = {
  namespaced: true,
  state: () => {
    return {
      isLoading: false,
      juz: [],
    };
  },
  mutations: {
    SET_IS_LOADING: (state, loading) => (state.isLoading = loading),
    SET_JUZ: (state, data) => (state.juz = data),
  },
  actions: {
    async setJuz({ commit }) {
      commit("SET_IS_LOADING", true);

      firestore
        .collection("juz_collections")
        .orderBy("number", "asc")
        .get()

        .then((menu) => {
          let dataMenu = [];

          menu.docs.forEach((surah) => {
            dataMenu.push(surah.data());
          });

          commit("SET_JUZ", dataMenu);
          commit("SET_IS_LOADING", false);
        });
    },
  },
};

export default juz;
