import { createStore } from "vuex";
import surah from "./modules/surah";
import sajda from "./modules/sajda";
import juz from "./modules/juz";
import manzil from "./modules/manzil";
import rukuk from "./modules/rukuk";
import ayat from "./modules/ayat";
import page from "./modules/page";
import filterAyat from "./modules/filterAyat";
import account from "./modules/account";

export default createStore({
  modules: {
    surah,
    sajda,
    juz,
    manzil,
    rukuk,
    page,
    ayat,
    filterAyat,
    account,
  },
});
