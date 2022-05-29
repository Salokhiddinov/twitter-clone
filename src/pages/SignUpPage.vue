<template>
  <BaseCard class="base-card">
    <router-link to="/" class="back"
      ><i class="fa-solid fa-delete-left"></i>Back</router-link
    >

    <h2>Sign Up</h2>
    <p>
      Already have an account?
      <router-link to="/" class="login">Log In</router-link>
    </p>
    <form @submit.prevent>
      <div class="form-item">
        <label for="name">Name:</label>
        <input type="text" key="name" v-model="name" />
      </div>
      <div class="wrongCredentials" v-if="wrongName">
        <p>
          {{ nameProblem }}
        </p>
      </div>
      <div class="form-item">
        <label for="surname">Surname:</label>
        <input type="text" key="surname" v-model="surname" />
      </div>
      <div class="wrongCredentials" v-if="wrongSurname">
        <p>
          {{ surnameProblem }}
        </p>
      </div>
      <div class="form-item">
        <label for="username">Username:</label>
        <input type="text" key="username" v-model="username" />
      </div>
      <div class="wrongCredentials" v-if="wrongUsername">
        <p>
          {{ usernameProblem }}
        </p>
      </div>
      <div class="form-item">
        <label for="password">Password:</label>
        <input
          :type="passwordVisibility"
          key="password"
          v-model="password"
          class="password"
        />
        <button class="show-password-btn" @click="togglePassword">
          <i class="fas fa-eye eye" v-if="passwordIsHidden"></i>
          <i class="fa-solid fa-eye-slash eye" v-if="!passwordIsHidden"></i>
        </button>
      </div>
      <div class="wrongCredentials" v-if="wrongPassword">
        <p>
          {{ passwordProblem }}
        </p>
      </div>
      <div class="button-container">
        <button class="submit" @click="createUser">
          <i class="fa-solid fa-user-plus"></i>Create Account
        </button>
      </div>
    </form>
  </BaseCard>
</template>

<script>
export default {
  data() {
    return {
      passwordIsHidden: true,
      createId: new Date().toISOString(),
      name: "",
      surname: "",
      username: "",
      password: "",

      wrongName: false,
      nameProblem: "",
      wrongSurname: false,
      surnameProblem: "",
      wrongUsername: false,
      usernameProblem: "",
      wrongPassword: false,
      passwordProblem: "",

      correctCreadentials: false,
    };
  },
  methods: {
    submitForm() {
      console.log("submitForm");
    },
    createUser() {
      if (this.correctCreadentials) {
        fetch("https://twitter-69051-default-rtdb.firebaseio.com/users.json", {
          method: "POST",
          header: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: this.createId,
            name: this.name.trim(),
            surname: this.surname.trim(),
            username: this.username.trim(),
            password: this.password.trim(),
          }),
        }).then(() => {
          console.log("User created!");
          this.$router.push("/home");
        });
      } else {
        if (this.name.trim() == "") {
          this.wrongName = true;
          this.nameProblem = "Name is required";
        } else {
          this.wrongName = false;
          this.nameProblem = "";
        }

        if (this.surname.trim() == "") {
          this.wrongSurname = true;
          this.surnameProblem = "Surname is required";
        } else {
          this.wrongSurname = false;
          this.surnameProblem = "";
        }

        if (this.username.trim() == "") {
          this.wrongUsername = true;
          this.usernameProblem = "Username is required";
        } else {
          this.wrongUsername = false;
          this.usernameProblem = "";
        }

        if (this.password == "") {
          this.wrongPassword = true;
          this.passwordProblem = "Password is required";
        } else if (this.password.length < 8) {
          this.wrongPassword = true;
          this.passwordProblem = "Password must be at least 8 characters long";
        } else {
          this.wrongPassword = false;
          this.passwordProblem = "";
        }
      }
      if (
        !this.wrongName &&
        !this.wrongSurname &&
        !this.wrongUsername &&
        !this.wrongPassword
      ) {
        this.correctCreadentials = true;
      }
    },
    togglePassword() {
      this.passwordIsHidden = !this.passwordIsHidden;
      if (this.passwordIsHidden) {
        this.typeOfPassword == "text";
      }
      if (!this.passwordIsHidden) {
        this.typeOfPassword == "password";
      }
    },
  },
  computed: {
    passwordVisibility() {
      return this.passwordIsHidden ? "password" : "text";
    },
  },
  watch: {
    checkCredentials() {
      if (
        !this.wrongName &&
        !this.wrongSurname &&
        !this.wrongUsername &&
        !this.wrongPassword
      ) {
        this.correctCreadentials = true;
      }
    },
  },
  mounted:{

  }
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
.password {
  grid-column-start: 6;
  grid-column-end: 11;
}
.show-password-btn {
  grid-column-start: 11;
  grid-column-end: 12;
  border-radius: 10px;
  border-style: solid;
  border-color: var(--dark-grey);
  background-color: var(--light-grey);
  text-align: center;
  transition: 0.2s all ease-out;
}
.show-password-btn:hover .eye {
  color: black;
}
.show-password-btn:active {
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.34);
}
.eye {
  width: 100%;
  color: var(--dark-grey);
  transition: 0.2s all ease-out;
}
.wrongCredentials p {
  grid-column-start: 6;
  grid-column-end: 12;
  font-size: 0.7rem;
  color: red;
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
.back {
  background: var(--light-grey);
  padding: 2px 25px;
  margin: 10px 0;
  color: var(--dark-grey);
  border-radius: 20px;
  text-decoration: none;
  display: inline-block;
}
.back:hover {
  background: var(--blue);
  color: white;
}
.back:active {
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.34);
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
}
</style>
