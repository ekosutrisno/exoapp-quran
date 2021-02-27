import HomePage from "../views/HomePage.vue";
import MenuPage from "../views/MenuPage.vue";
import QuranMetaList from "../views/QuranMetaList.vue";
import QuranPageList from "../views/QuranPageList.vue";
import QuranJuzList from "../views/QuranJuzList.vue";
import QuranManzilList from "../views/QuranManzilList.vue";
import QuranSajdaList from "../views/QuranSajdaList.vue";
import QuranRukukList from "../views/QuranRukukList.vue";
import QuranAyatDetail from "../views/QuranAyatDetail.vue";
import QuranPagesList from "../views/QuranPagesList.vue";
const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/menu",
    name: "MenuPage",
    component: MenuPage,
  },
  {
    path: "/surah-page",
    name: "SurahPage",
    component: QuranMetaList,
  },
  {
    path: "/page-page",
    name: "PagePage",
    component: QuranPagesList,
  },
  {
    path: "/quran-page",
    name: "QuranPage",
    component: QuranPageList,
  },
  {
    path: "/juz-page",
    name: "JuzPage",
    component: QuranJuzList,
  },
  {
    path: "/manzil-page",
    name: "ManzilPage",
    component: QuranManzilList,
  },
  {
    path: "/sajda-page",
    name: "SajdaPage",
    component: QuranSajdaList,
  },
  {
    path: "/rukuk-page",
    name: "RukukPage",
    component: QuranRukukList,
  },
  {
    path: "/quran-ayat-detail",
    name: "QuranAyatDetail",
    component: QuranAyatDetail,
  },
];

export { routes };
