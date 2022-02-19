import { createWebHistory, createRouter } from "vue-router";
const routes =  [
  {
    path: "/",
    alias: "/Home",
    name: "Home",
    component: () => import("./pages/Home")
  },
  {
    path: "/experience",
    alias: "/experience",
    name: "experience",
    component: () => import("./components/Experience")
  },
  {
    path: "/experiences/:id",
    name: "experience-details",
    component: () => import("./components/EditExperience")
  },
  {
    path: "/add",
    name: "add",
    component: () => import("./components/AddExperience")
  },{
    path: "/competences",
    alias: "/competences",
    name: "competences",
    component: () => import("./components/Competence")
  },
  {
    path: "/competences/:id",
    name: "competence-details",
    component: () => import("./components/EditCompetence")
  },
  {
    path: "/addCompetence",
    name: "addCompetence",
    component: () => import("./components/AddCompetence")
  },
  {
    path: "/projets",
    alias: "/projets",
    name: "projets",
    component: () => import("./components/Projets")
  },
  {
    path: "/projets/:id",
    name: "projet-details",
    component: () => import("./components/EditProjet")
  },
  {
    path: "/addProjet",
    name: "addProjet",
    component: () => import("./components/AddProjet")
  },
  {
    path: "/formations",
    alias: "/formations",
    name: "formations",
    component: () => import("./components/Formations")
  },
  {
    path: "/formations/:id",
    name: "formation-details",
    component: () => import("./components/EditFormation")
  },
  {
    path: "/addFormation",
    name: "addFormation",
    component: () => import("./components/AddFormation")
  },
  {
    path: "/informations",
    alias: "/informations",
    name: "informations",
    component: () => import("./components/Candidate")
  },
  {
    path: "/informations/:id",
    name: "candidate-details",
    component: () => import("./components/EditCandidate")
  },
  {
    path: "/addCandidate",
    name: "addCandidate",
    component: () => import("./components/AddCandidate")
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;