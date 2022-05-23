<template>
  <section>
    <h2>Welcome, {{currentUser.name}}!</h2>
    <span>Here’s what I found for you</span>
  </section>
</template>
<script>
export default {
  computed: {
    currentUser() {
      return this.$store.state.currentUser;
    },
  },
};
</script>

<style scoped>
h2 {
  margin: 10px 0;
  font-size: 2rem;
}

section {
  text-align: center;
  margin: 20px 0 30px 0 !important;
}
</style>
