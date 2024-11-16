import { createWebHistory, createRouter } from "vue-router";

import Home from "../pages/Home.vue";
import About from "../pages/About.vue";
import Projects from "../pages/Projects.vue";
import Contact from "../pages/Contact.vue";

const routes = [
  { path: "/", component: Home, name: "home" },
  { path: "/about", component: About, name: "about" },
  { path: "/projects", component: Projects, name: "projects" },
  { path: "/contact", component: Contact, name: "contact" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
