<template>
  <TheLoader class="loader" v-if="isLoading"></TheLoader>
  <TheHeader></TheHeader>
  <main v-if="!isLoading">
    <router-view></router-view>
  </main>
</template>
<script>
export default {
  data() {
    return {
      isLoading: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);

    // Importing User data
    fetch("https://twitter-69051-default-rtdb.firebaseio.com/users.json")
      .then((response) => response.json())
      .then((data) => {
        this.$store.state.allUsers = data;
      });
    
},
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Fredoka+One&family=Poppins:ital,wght@0,100;0,400;0,600;0,700;1,100;1,400&display=swap");

:root {
  --logo-font: "Fredoka One";
  --font: "Poppins";
  --light-grey: #e5e5e5;
  --dark-grey: #727272;
  --white: #fff;
  --blue: #00acee;
}
body {
  font-family: var(--font);
  background-color: var(--light-grey);
  margin: 0;
  padding: 0;
  position: relative;
}
.loader {
  position: absolute;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
  z-index: 2;
  background: white;
}

@media screen and (min-width: 1200px) {
  main {
    display: grid;
    width: 1200px;
    margin: auto;
  }
}
</style>
