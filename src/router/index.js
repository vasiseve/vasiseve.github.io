import { createRouter, createWebHashHistory } from "vue-router";

import Home from "../pages/Home.vue";
import Research from "../pages/Research.vue";
import Code from "../pages/Code.vue";
import Talks from "../pages/Talks.vue";
import About from "../pages/About.vue";
import Contact from "../pages/Contact.vue";
import CV from "../pages/CV.vue";
import ICLR from "../pages/ICLR.vue";
import AISTATS from "../pages/AISTATS.vue";
import NotFound from "../pages/NotFound.vue";

export default createRouter({
  // Hash routing works reliably on GitHub Pages + GitLab Pages
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", component: Home },
    { path: "/research", component: Research },
    { path: "/code", component: Code },
    { path: "/talks", component: Talks },
    { path: "/about", component: About },
    { path: "/contact", component: Contact },
    { path: "/cv", component: CV },
    { path: "/iclr", component: ICLR },
    { path: "/aistats", component: AISTATS },
    { path: "/:pathMatch(.*)*", component: NotFound },
  ],
});
