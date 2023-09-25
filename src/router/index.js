import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SignUpView from "../views/SignUpView.vue";
import LogInView from "../views/LogInView.vue";
import RegistrationView from "../views/RegistrationView.vue";

import UserDashboardLayout from "../layouts/UserDashboardLayout.vue";
import DashboardView from "../views/Users/DashboardView.vue";
import AssessmentView from "../views/Users/AssessmentView.vue";
import QuestionsView from "../views/Users/QuestionsView.vue";
import ResultsView from "../views/Users/ResultsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/signup",
      name: "signup",
      component: SignUpView,
    },
    {
      path: "/login",
      name: "login",
      component: LogInView,
    },
    {
      path: "/registration",
      name: "registration",
      component: RegistrationView,
    },
    /*
     * USER ROUTES
     */
    {
      path: "/user",
      name: "users",
      component: UserDashboardLayout,
      children: [
        {
          path: "/dashboard",
          name: "dashboard",
          component: DashboardView
        },
        {
          path: "/assessment",
          name: "assessment",
          component: AssessmentView
        },
        {
          path: "/questions",
          name: "questions",
          component: QuestionsView
        },
        {
          path: "/results",
          name: "results",
          component: ResultsView
        },
      ],
    },
    /*
     * ADMIN ROUTES
     */
    {
      path: "/admin",
      component: UserDashboardLayout,
      children: [
        {
          path: "login",
          meta: {
            noAuth: true,
          },
        },
        {
          path: "dashboard",
        },
        {
          path: "create-application",
        },
      ],
    },
  ],
});

export default router;
