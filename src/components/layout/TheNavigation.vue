<template>
  <BaseCard class="card">
    <nav>
      <h3>Navigation</h3>
      <ul>
        <li><button><router-link to="/" class="link">Browse</router-link></button></li>
        <li><button><router-link to="/" class="link">Search</router-link></button></li>
        <li><button><router-link to="/" class="link">Profile</router-link></button></li>
        <li><button><router-link to="/" class="link">About App</router-link></button></li>
      </ul>
    </nav>
  </BaseCard>
</template>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  text-align: center;
}
h3 {
  margin: 5px 0px 15px 0;
  text-align: center;
}
li {
  margin: 5px 0;

}
.link{
    text-decoration: none;
    color: var(--grey);
}
.card{
  max-height: 230px;
}
button {
  padding: 10px 0;
  color: black;
  border-radius: 10px;
  transition: 0.2s all ease-out;
  width: 100%;
  border-style: none;
}

button:active,
button:hover,
button.active {
  background-color: var(--blue);
  color: white;
}
</style>
