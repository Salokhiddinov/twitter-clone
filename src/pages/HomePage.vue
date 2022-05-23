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
        <router-link to="/new-post" class="new-tweet">
          <i class="fa-solid fa-plus"></i>
          <span class="new-tweet-text">New Tweet</span>
        </router-link>
      </div>
      <BaseCard>
        <h2 class="heading">My Feed</h2>
        <div class="feed">
          <BaseTweet v-for="post in posts" :key="post.id">
            <div class="tweet">
              <div class="name">
                <h4>{{`${post.name} ${post.surname}`}}</h4>
                <button class="follow">Follow</button>
              </div>
              <router-link to="home" class="username">{{`@${post.username}`}}</router-link>
              <p class="message">{{post.post}}</p>
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
  data(){
    return {
      posts: []
    }
  },
  mounted() {
      fetch('https://twitter-69051-default-rtdb.firebaseio.com/posts.json').then((response)=>{
        if (response.ok){
          return response.json(); 
        }
      }).then((data)=>{
        const tempTweets = [];
        console.log(tempTweets)
        console.log(data);
        for(let key in data){
          tempTweets.unshift({
            id: key,
            name: data[key].name,
            surname: data[key].surname,
            username: data[key].username,
            post: data[key].post,
          })
        }
        this.posts = tempTweets;
        console.log(this.posts)
      })
  },
  computed: {
    currentUser() {
      return this.$store.state.currentUser;
    },
    currentUserId() {
      return this.$store.state.currentUser.id;
    },
  },

}
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
.tweet-controls {
  display: flex;
  margin-bottom: 10px;
}
.tweet-controls button {
  border-style: none;
  background-color: var(--light-grey);
  border-radius: 10px;
  padding: 5px 20px;
  transition: all 0.3s ease;
  color: var(--dark-grey);
  margin-right: 10px;
}

.selected {
  background-color: var(--blue);
  color: white;
}

.sorting {
  width: 85%;
}
.new-tweet {
  width: 20%;
  padding: 10px 25px;
  background-color: var(--blue);
  color: white;
  text-decoration: none;
  margin-left: 10px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  transition: 0.3s all ease;
}
.new-tweet:hover {
  background-color: white;
  color: var(--dark-grey);
}
.new-tweet:active {
  background-color: var(--dark-grey);
  color: white;
}
.new-tweet-text {
  padding-left: 5px;
}
</style>
