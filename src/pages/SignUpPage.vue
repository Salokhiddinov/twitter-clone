<template>
  <BaseCard class="base-card">
    <router-link to="/">Back</router-link>

    <h2>Sign Up</h2>
    <p>Already have an account? <router-link to="/">Log In</router-link></p>
    <form @submit.prevent>
      <div class="form-item">
        <label for="name">Name:</label>
        <input type="text" key="name" />
      </div>
      <div class="form-item">
        <label for="surname">Surname:</label>
        <input type="text" key="surname" />
      </div>
      <div class="form-item">
        <label for="username">Username:</label>
        <input type="text" key="username" />
      </div>
      <div class="form-item">
        <label for="password">Password:</label>
        <input type="password" key="password" />
        <button class="show-password" @click="togglePassword">
          <i class="fas fa-eye"></i>
        </button>
      </div>
      <button class="submit">Create Account</button>
    </form>
  </BaseCard>
</template>

<script>
export default {
  data() {
    return {
      passwordIsHidden: true,
    };
  },
  methods: {
    togglePassword() {
      //   this.passwordIsHidden = !this.passwordIsHidden;
      //   if(this.passwordIsHidden){
      //       this.typeOfPassword == 'text'
      //   }
      //   if(!this.passwordIsHidden){
      //       this.typeOfPassword == 'password'
      //   }
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
}
h2,
p {
  text-align: center;
}
h2 {
  margin: 10px 0;
}
.submit {
  background: var(--blue);
  border-radius: 20px;
    color:white;
    border-style: none;
    padding: 10px 20px;
    font-size: 1rem;
    transition: 0.2s all ;

}
.submit:hover{
    background: var(--dark-grey);
}
.submit:active{
    transform: scale(0.98);
    box-shadow: 0px 0px 10px rgba(0,0,0,0.2);
}

@media screen and (min-width: 1200px) {
  .base-card {
    width: 600px;
  }
}
</style>
