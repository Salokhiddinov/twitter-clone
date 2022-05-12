<template>
  <WelcomeText />
  <div class="grid-view">
    <TheNavigation class="navigation"></TheNavigation>
    <div class="tweets">
      <div class="tweet-controls">
        <BaseCard class="sorting">
          <button class="sort">All Posts</button>
          <button class="sort">Following</button>
        </BaseCard>
        <router-link to="new-tweet" class="new-tweet">
          <i class="fa-solid fa-plus"></i>New Tweet
        </router-link>
      </div>
      <BaseCard>
        <h2 class="heading">My Feed</h2>
        <div class="feed">
          <BaseTweet>
            <div class="tweet">
              <div class="name">
                <h4>Elon Musk</h4>
                <button class="follow">Follow</button>
              </div>
              <router-link to="home" class="username">@emusk</router-link>
              <p class="message">Hey-Yo! Nice clone of 'MY' Twitter😜</p>
            </div>
          </BaseTweet>
        </div>
      </BaseCard>
    </div>
  </div>
</template>

<script>
import WelcomeText from "@/components/home/WelcomeText.vue";
export default {
  components: {
    WelcomeText,
  },
};
</script>

<style scoped>
.heading {
  text-align: center;
  padding: 5px;
  margin: 0;
}
h4 {
  margin: 0;
  font-size: 1.2rem;
}
.message {
  margin: 0;
}
.name {
  display: flex;
}

.name,
.message {
  padding: 10px 15px;
}
.name {
  padding-bottom: 0px !important;
}
.username {
  padding-left: 15px;
  color: var(--dark-grey);
  text-decoration: none;
  text-transform: lowercase;
}

.follow {
  display: inline-block;
  border-style: none;
  margin-left: 15px;
  background-color: var(--blue);
  border-radius: 10px;
  padding: 5px 20px;
  transition: all 0.3s ease;
  color: white;
}
.follow:hover {
  background-color: white;
  border-color: var(--blue);
  color: grey;
}
.grid-view {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 15px;
}
.navigation {
  grid-column: 1 / 5;
}
.tweets {
  grid-column: 5 / 13;
}
.tweet-controls{
  display: flex;
}
.sorting{
  width: 80%;
}
.new-tweet{
  width: 20%;
  padding: 10px 25px;
  background-color: var(--blue);
  color: white;
  text-decoration: none;
}
</style>
