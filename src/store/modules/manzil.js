import { firestore } from "../../service/firebase";

const manzil = {
  namespaced: true,
  state: () => {
    return {
      isLoading: false,
      manzil: [],
    };
  },
  mutations: {
    SET_IS_LOADING: (state, loading) => (state.isLoading = loading),
    SET_MANZIL: (state, data) => (state.manzil = data),
  },
  actions: {
    async setManzil({ commit }) {
      commit("SET_IS_LOADING", true);

      firestore
        .collection("manzil_collections")
        .orderBy("number", "asc")
        .get()

        .then((menu) => {
          let dataMenu = [];

          menu.docs.forEach((surah) => {
            dataMenu.push(surah.data());
          });

          commit("SET_MANZIL", dataMenu);
          commit("SET_IS_LOADING", false);
        });
    },
  },
};

export default manzil;
