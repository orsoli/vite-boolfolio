import { createWebHistory, createRouter } from "vue-router";

import Home from "../components/pages/AppHome/Home.vue";
import About from "../components/pages/AppAbout/About.vue";
import ProjectList from "../components/pages/AppProjcts/ProjectList.vue";
import Contact from "../components/pages/AppContacts/Contact.vue";
import ProjectDetails from "../components/pages/AppProjcts/ProjectDetails.vue";

const routes = [
  { path: "/", component: Home, name: "home" },
  { path: "/about", component: About, name: "about" },
  { path: "/projects", component: ProjectList, name: "projects" },
  { path: "/project/:id", component: ProjectDetails, name: "project.details" },
  { path: "/contact", component: Contact, name: "contact" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
