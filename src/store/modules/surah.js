const surah = {
  namespaced: true,
  state: () => {
    return {
      surahs: [],
      surah: {},
    };
  },
  mutations: {
    SET_SURAHS: (state, payloadSuarhs) => (state.surahs = payloadSuarhs),
    SET_SURAH: (state, payloadSurah) => (state.surah = payloadSurah),
    SET_SURAH_AYAH: (state, payloadSurahAyah) =>
      (state.surah = payloadSurahAyah),
  },
  actions: {
    setSurahs({ commit }) {
      let URL_ENDPOINT = `http://api.alquran.cloud/v1/meta`;
      fetch(URL_ENDPOINT)
        .then((data) => data.json())
        .then((meta) => {
          commit("SET_SURAHS", meta.data.surahs.references);
        });
    },

    setSurah({ commit }, surah_number) {
      let surah_no = surah_number ? surah_number : 1;

      let URL_ENDPOINT = `http://api.alquran.cloud/v1/surah/${surah_no}`;

      fetch(URL_ENDPOINT)
        .then((data) => data.json())
        .then((meta) => {
          commit("SET_SURAH", meta.data);
        });
    },
  },
};

export default surah;
