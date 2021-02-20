import { createStore } from "vuex";
import surah from "./modules/surah";
import sajda from "./modules/sajda";
import juz from "./modules/juz";
import manzil from "./modules/manzil";
import rukuk from "./modules/rukuk";

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    surah,
    sajda,
    juz,
    manzil,
    rukuk,
  },
});
