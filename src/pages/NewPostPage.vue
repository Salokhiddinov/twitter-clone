<template>
  <BaseCard class="base-card">
    <router-link to="/" class="back"
      ><i class="fa-solid fa-delete-left"></i>Back</router-link
    >
    <form @submit.prevent="createPost" autocomplete="off">
      <h2>New Post</h2>
      <p>Type anything you want :)</p>
      <div class="form-item">
        <input
          type="text"
          id="post"
          v-model="post"
          class="form-item"
          placeholder="Text of a post"
        />
      </div>
      <div class="emojies">
        <div
          class="emoji"
          @click="pushEmoji"
          unselectable="on"
          onselectstart="return false;"
          onmousedown="return false;"
        >
          😀
        </div>
        <div
          class="emoji"
          @click="pushEmoji"
          unselectable="on"
          onselectstart="return false;"
          onmousedown="return false;"
        >
          😂
        </div>
        <div
          class="emoji"
          @click="pushEmoji"
          unselectable="on"
          onselectstart="return false;"
          onmousedown="return false;"
        >
          🤣
        </div>
        <div
          class="emoji"
          @click="pushEmoji"
          unselectable="on"
          onselectstart="return false;"
          onmousedown="return false;"
        >
          😎
        </div>
        <div
          class="emoji"
          @click="pushEmoji"
          unselectable="on"
          onselectstart="return false;"
          onmousedown="return false;"
        >
          😡
        </div>
        <div
          class="emoji"
          @click="pushEmoji"
          unselectable="on"
          onselectstart="return false;"
          onmousedown="return false;"
        >
          🤮
        </div>
        <div
          class="emoji"
          @click="pushEmoji"
          unselectable="on"
          onselectstart="return false;"
          onmousedown="return false;"
        >
          🥳
        </div>
      </div>
      <div class="button-container">
        <button class="submit">Post</button>
      </div>
    </form>
  </BaseCard>
</template>

<script>
export default {
  data() {
    return {
      post: "",
    };
  },
  computed: {
    user() {
      return this.$store.state.currentUser;
    },
  },
  methods: {
    pushEmoji(e) {
      this.post = this.post + e.target.innerText;
    },
    createPost() {
      fetch("https://twitter-69051-default-rtdb.firebaseio.com/posts.json", {
        method: "POST",
        header: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: Date.now(),
          name: this.user.name,
          surname: this.user.surname,
          username: this.user.username,
          post: this.post,
        }),
      }).then(() => {
        console.log("Post created!");
        this.$router.push("/home");
      });
    },
  },
};
</script>

<style scoped>
.base-card {
  position: absolute;
  top: 50vh;
  left: 50%;
  transform: translate(-50%, -60%);
  max-width: 500px;
}
h2,
p {
  text-align: center;
}
h2 {
  margin: 0;
}
.form-item {
  display: flex;
  width: 100%;
  justify-content: center;
}
input {
  padding: 10px;
  width: 80%;
  border-radius: 10px;
  border-width: 2px;
  border-style: solid;
  border-color: var(--dark-grey);
  background-color: var(--light-grey);
  margin-bottom: 15px;
}
form {
  padding: 10px 0;
  display: grid;
}
.button-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.submit {
  margin: auto;
  width: 30%;
  background: var(--blue);
  border-radius: 20px;
  color: white;
  border-style: none;
  padding: 10px 20px;
  font-size: 1rem;
  transition: 0.2s all;
}
.login {
  color: var(--blue);
  font-weight: 700;
  text-decoration: none;
}
.back {
  background: var(--light-grey);
  padding: 2px 25px;
  margin: 10px 0;
  color: var(--dark-grey);
  border-radius: 20px;
  text-decoration: none;
  display: inline-block;
  transition: 0.2s all ease;
}
.back:hover {
  background: var(--blue);
  color: white;
}
.back:active {
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.34);
}
.emojies {
  display: flex;
  margin: auto;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 15px;
  width: 90%;
}
.emoji {
  font-size: 2rem;
  transition: 0.2s all ease;
}
.emoji:hover {
  cursor: pointer;
  transform: translateY(-10px) scale(1.2);
}
.emoji:active {
  cursor: pointer;
  transform: translateY(5px) scale(1.1);
}
.submit:hover {
  background: var(--dark-grey);
}
.submit:active {
  transform: scale(0.98);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.34);
}
i {
  margin-right: 10px;
}

@media screen and (min-width: 1200px) {
  .base-card {
    width: 600px;
  }
  input {
    font-size: 1.2rem;
  }
}
</style>
