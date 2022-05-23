<template>
  <BaseCard class="base-card">
    <router-link to="/" class="back"><i class="fa-solid fa-delete-left"></i>Back</router-link>

    <h2>Sign Up</h2>
    <p>Already have an account? <router-link to="/" class="login">Log In</router-link></p>
    <form @submit.prevent="createUser">
      <div class="form-item">
        <label for="name">Name:</label>
        <input type="text" key="name" v-model="name"/>
      </div>
      <div class="form-item">
        <label for="surname">Surname:</label>
        <input type="text" key="surname" v-model="surname"/>
      </div>
      <div class="form-item">
        <label for="username">Username:</label>
        <input type="text" key="username" v-model="username"/>
      </div>
      <div class="form-item">
        <label for="password">Password:</label>
        <input type="password" key="password" v-model="password"/>
        <!-- <button class="show-password" @click="togglePassword">
          <i class="fas fa-eye"></i>
        </button> -->
      </div>
      <div class="button-container">
        <button class="submit"><i class="fa-solid fa-user-plus"></i>Create Account</button>
      </div>
    </form>
  </BaseCard>
</template>

<script>
export default {
  data() {
    return {
      passwordIsHidden: true,
      name: '',
      surname: '',
      username: '',
      password: ''
    };
  },
  methods: {
    submitForm(){
      console.log('submitForm');
    },
    createUser(){
      fetch('https://twitter-69051-default-rtdb.firebaseio.com/users.json', {
        method: 'POST',
        header: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: this.name,
          surname: this.surname,
          username: this.username,
          password: this.password,
        }),
      }).then(()=>{
        console.log('User created!')
      })
    },
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
input {
  padding: 5px;
  border-radius: 10px;
  border-width: 2px;
  border-style: solid;
  border-color: var(--dark-grey);
  background-color: var(--light-grey);
  grid-column-start: 6;
  grid-column-end: 12;
}
form {
  padding: 10px 0;
}
.form-item {
  margin-bottom: 15px;
  display: grid;
  grid-gap: 5px;
  grid-template-columns: repeat(12, 1fr);
}
.form-item label {
  grid-column-start: 1;
  grid-column-end: 5;
  text-align: right;
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
.back{
background: var(--light-grey);
padding: 2px 25px;
margin: 10px 0;
color: var(--dark-grey);
border-radius: 20px;
text-decoration: none;
display: inline-block;
}
.back:hover{
    background: var(--blue);
    color: white;
}
.back:active{
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.34);
}

.submit:hover {
  background: var(--dark-grey);
}
.submit:active {
  transform: scale(0.98);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.34);
}
i{
  margin-right: 10px;
}

@media screen and (min-width: 1200px) {
  .base-card {
    width: 600px;
  }
}
</style>
