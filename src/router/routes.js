import HomePage from "../views/HomePage.vue";
import MenuPage from "../views/MenuPage.vue";
import QuranMetaList from "../views/QuranMetaList.vue";
import QuranPageList from "../views/QuranPageList.vue";
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
