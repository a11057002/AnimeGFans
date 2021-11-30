<!-- <template>
	<v-container fluid>
		<v-row align="center">
			<v-col class="white--text">
				<form @submit.prevent="login">
					<v-col cols="12">
						<label for="email">
							Email
						</label>
						<input type="text" v-model="email" name="email" />
					</v-col>
					<v-col cols="12">
						<label for="password">
							Password
						</label>
						<input type="text" v-model="password" name="password" />
					</v-col>
					<v-col>
						<v-btn-toggle
							background-color="red lighten-1"
							class="pa-1"
							type="submit"
							>Login</v-btn-toggle
						>
					</v-col>
					<p>{{ error }}</p>
				</form>
				<router-link to="/register">
					Don't have an account ? Register.
				</router-link>
			</v-col>
		</v-row>
	</v-container>
</template> -->
<template>
  <v-container>
    <form @submit.prevent="getIp">
      <v-row>
        <v-col cols="6">
          <label class="blue--text float-right" for="email"> Account : </label>
		</v-col>
		<v-col cols="6">
          <input
            type="text"
            class="white--text blue-grey darken-4 rounded float-left"
            v-model="username"
            name="username"
			required
          />
        </v-col>
        <v-col cols="6">
          <label class="blue--text float-right" for="password"> Password : </label>
		</v-col>
		<v-col cols="6">
          <input
            type="password"
            class="white--text blue-grey darken-4 rounded float-left"
            v-model="password"
            name="password"
			required
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-btn type="submit">Login</v-btn>
        </v-col>
        <v-col cols="12">
          <v-btn @click="signup()">Signup</v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="red--text" cols="12">
          <div class="red--text body-1">{{ error }}</div>
        </v-col>
      </v-row>
    </form>
    <!-- <router-link to="/register">
        Don't have an account ? Register.
      </router-link> -->
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      error: null,
      ip: null,
    };
  },
  methods: {
    getIp() {
      fetch("https://api.ipify.org?format=json")
        .then((x) => x.json())
        .then(({ ip }) => {
          this.ip = ip;
          this.login();
        });
    },
    login() {
      if (this.ip == "192.168.0.149") {
        this.$store
          .dispatch("login1", {
            username: this.username,
            password: this.password,
          })
          .then(() => {
            this.$router.push({ name: "home" });
          })
          .catch((err) => {
            this.error = err.response.data.message;
            // console.log(err.response)
          });
      } else {
        this.$store
          .dispatch("login", {
            username: this.username,
            password: this.password,
          })
          .then(() => {
            this.$router.push({ name: "home" });
          })
          .catch((err) => {
            this.error = err.response.data.message;
            // console.log(err.response)
          });
      }
    },
    signup() {
      this.$router.push({ name: "Signup" });
    },
  },
};
</script>

<style></style>
