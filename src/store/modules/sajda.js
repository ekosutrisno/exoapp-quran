import { firestore } from "../../service/firebase";

const surah = {
  namespaced: true,
  state: () => {
    return {
      isLoading: false,
      sajda: [],
    };
  },
  mutations: {
    SET_IS_LOADING: (state, loading) => (state.isLoading = loading),
    SET_SAJDA: (state, data) => (state.sajda = data),
  },
  actions: {
    async setSajda({ commit }) {
      commit("SET_IS_LOADING", true);

      firestore
        .collection("sajda_collections")
        .orderBy("number", "asc")
        .get()

        .then((menu) => {
          let dataMenu = [];

          menu.docs.forEach((surah) => {
            dataMenu.push(surah.data());
          });

          commit("SET_SAJDA", dataMenu);
          commit("SET_IS_LOADING", false);
        });
    },
  },
};

export default surah;
