import { createRouter, createWebHistory } from "vue-router";

import HomePage from "@/pages/HomePage.vue";
import SignUpPage from "@/pages/SignUpPage.vue";
import NewPostPage from "@/pages/NewPostPage.vue";
import DetailsPage from "@/pages/DetailsPage.vue";
import NotFound from "@/pages/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    //Home Pages
    { path: "/", redirect: "/home" },
    {
      path: "/home",
      component: HomePage,
      name: "home",
    },

    //SignUp Pages
    { path: "/new-post", component: NewPostPage, name: "new-post" },
    { path: "/sign-up", component: SignUpPage, name: "signup" },
    
    //User Details Page
    { path: "/:id/details", component: DetailsPage, name: "details" },

    //Not Found Page
    { path: "/:pathMatch(.*)", component: NotFound },
  ],
});

export default router;
