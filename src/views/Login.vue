<template>
	<v-container>
		<form>
			<v-row>
				<v-col cols="6">
					<label class="blue--text float-right" for="email"> Account : </label>
				</v-col>
				<v-col cols="6">
					<input
						type="text"
						class="white--text blue-grey darken-4 rounded float-left"
						v-model="username"
						v-on:keyup.enter="login"
						name="username"
						required
					/>
				</v-col>
				<v-col cols="6">
					<label class="blue--text float-right" for="password">
						Password :
					</label>
				</v-col>
				<v-col cols="6">
					<input
						type="password"
						class="white--text blue-grey darken-4 rounded float-left"
						v-model="password"
						v-on:keyup.enter="login"
						name="password"
						required
					/>
				</v-col>
			</v-row>
			<v-row>
				<v-col cols="12">
					<v-btn @click="login()">Login</v-btn>
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
				username: '',
				password: '',
				error: null,
				ip: null
			}
		},
		methods: {
			login() {
				this.$store
					.dispatch('login', {
						username: this.username.toLowerCase(),
						password: this.password
					})
					.then(() => {
						this.$router.push({ name: 'home' })
					})
					.catch((err) => {
						this.error = err.response.data.message
						console.log(err.response)
					})
			},
			signup() {
				this.$router.push({ name: 'Signup' })
			}
		}
	}
</script>

<style></style>
