import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import RegisterView from "../views/RegisterView.vue";
import LoginView from "../views/LoginView.vue"
import UserDashboardLayout from "../layouts/UserDashboardLayout.vue";
import DashboardView from "../views/Users/DashboardView.vue";
import AssessmentView from "../views/Users/AssessmentView.vue";
import QuestionsView from "../views/Users/QuestionsView.vue";
import ResultsView from "../views/Users/ResultsView.vue";
// admin imports
import AdminDashboardLayout from "../layouts/AdminDashboardLayout.vue";
import SignupView from "../views/admin/SignupView.vue";
import AdminDashboardView from "../views/admin/AdminDashboardView.vue";
import CreateAppView from "../views/admin/CreateAppView.vue";
import ApplicationEntriesView from "../views/admin/ApplicationEntriesView.vue";
import ComposeAssessView from "../views/admin/ComposeAssessView.vue";
import AssessHistoryView from "../views/admin/AssessHistoryView.vue";
import AssessResultsView from "../views/admin/AssessResultsView.vue";
import SettingsView from "../views/admin/SettingsView.vue";



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/register",
      name: "register",
      component: RegisterView,
    },
    {
      path: "/signin",
      name: "login",
      component: LoginView,
    },
    /*
     * USER ROUTES
     */
    {
      path: "/user",
      component: UserDashboardLayout,
      children: [
        {
          path: "dashboard",
          name: "Dashboard",
          component: DashboardView
        },
        {
          path: "assessment",
          name: "assessment",
          component: AssessmentView
        },
        {
          path: "questions",
          name: "questions",
          component: QuestionsView
        },
        {
          path: "results",
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
      component: AdminDashboardLayout,
      children: [
        {
          path: "login",
          meta: {
            noAuth: true,
          },
          
        },
        {
          path: "signup",
          name: "signup",
          component: SignupView
        },
        {
          path: "adminDashboard",
          name: "AdminDashboard",
          component: AdminDashboardView
        },
        {
          path: "create-application",
          name: "creatapp",
          component: CreateAppView
        },
        {
          path: "application-entries",
          name: "applicationentries",
          component: ApplicationEntriesView
        },
        {
          path: "compose-assessment",
          name: "composeassessment",
          component: ComposeAssessView
        },
        {
          path: "create-application",
          name: "creatapp",
          component: CreateAppView
        },
        {
          path: "assessment-history",
          name: "assessmentHistory",
          component: AssessHistoryView
        },
        {
          path: "assessment-result",
          name: "assessmentResult",
          component: AssessResultsView
        },
        {
          path: "profile-settings",
          name: "settings",
          component: SettingsView
        },
      ],
    },
  ],
});

export default router;
