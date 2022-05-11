import { createApp } from "vue";
import router from "@/router.js";
import App from "./App.vue";
import HomePage from "@/pages/HomePage.vue";
import TheHeader from "@/components/layout/TheHeader.vue";
import TheNavigation from "@/components/layout/TheNavigation.vue";
import TheFooter from "@/components/layout/TheFooter.vue";
import TweetCard from "@/components/UI/TweetCard.vue";
import Tweet from "@/components/UI/Tweet.vue";
import BaseCard from "@/components/UI/BaseCard.vue";

const app = createApp(App);

app.component("HomePage", HomePage);
app.component("TheHeader", TheHeader);
app.component("TheNavigation", TheNavigation);
app.component("TheFooter", TheFooter);
app.component("TweetCard", TweetCard);
app.component("Tweet", Tweet);
app.component("BaseCard", BaseCard);

app.use(router);
app.mount("#app");
