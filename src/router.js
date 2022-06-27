import { createRouter, createWebHistory } from "vue-router";

import HomePage from "@/pages/HomePage.vue";
import SignUpPage from "@/pages/SignUpPage.vue";
import NewPostPage from "@/pages/NewPostPage.vue";
import DetailsPage from "@/pages/DetailsPage.vue";
import NotFound from "@/pages/NotFound.vue";
import LogInPage from "@/pages/LogInPage.vue"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    //Home Pages
    { path: "/", redirect: "/log-in" },
    {
      path: "/home",
      component: HomePage,
      name: "home",
    },

    { path: "/new-post", component: NewPostPage, name: "new-post" },
    
    //SignUp Pages
    { path: "/sign-up", component: SignUpPage, name: "signup" },
    {path: "/log-in", component: LogInPage, name: "login"},
    //User Details Page
    { path: "/:id/details", component: DetailsPage, name: "details" },

    //Not Found Page
    { path: "/:pathMatch(.*)", component: NotFound },
  ],
});

export default router;
