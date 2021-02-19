import { createStore } from "vuex";
import surah from "./modules/surah";
import sajda from "./modules/sajda";
import juz from "./modules/juz";

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    surah,
    sajda,
    juz,
  },
});
