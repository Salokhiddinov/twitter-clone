import { createApp } from "vue";
import router from "@/router.js";
import store from "@/store/store.js";
import App from "./App.vue";
import HomePage from "@/pages/HomePage.vue";
import TheHeader from "@/components/layout/TheHeader.vue";
import TheNavigation from "@/components/layout/TheNavigation.vue";
import TheFooter from "@/components/layout/TheFooter.vue";
import BaseCard from "@/components/UI/BaseCard.vue";
import BaseTweet from "@/components/UI/BaseTweet.vue";
import NewPostPage from "@/pages/NewPostPage.vue";
import SignUpPage from "@/pages/SignUpPage.vue";

const app = createApp(App);

app.component("HomePage", HomePage);
app.component("TheHeader", TheHeader);
app.component("TheNavigation", TheNavigation);
app.component("TheFooter", TheFooter);
app.component("BaseCard", BaseCard);
app.component("BaseTweet", BaseTweet);
app.component("NewPostPage", NewPostPage);
app.component("SignUpPage", SignUpPage);

app.use(store);
app.use(router);
app.mount("#app");
