import HomePage from "../views/HomePage.vue";
import QuranMetaList from "../views/QuranMetaList.vue";
import QuranPageList from "../views/QuranPageList.vue";
const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/metadata",
    name: "Metadata",
    component: QuranMetaList,
  },
  {
    path: "/quran-page",
    name: "QuranPage",
    component: QuranPageList,
  },
];

export { routes };
