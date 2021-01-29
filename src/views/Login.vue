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
				<v-col cols="12">
					<label class="blue--text" for="email">
						Email
					</label>
					<input
						type="text"
						class="white--text ml-5"
						v-model="email"
						name="email"
					/>
				</v-col>
				<v-col cols="12">
					<label class="blue--text" for="password">
						Password
					</label>
					<input
						type="password"
						class="white--text ml-5"
						v-model="password"
						name="password"
					/>
				</v-col>
				<v-col cols="12">
					<v-btn type="submit">Login</v-btn>
				</v-col>
				<v-col cols="12">
					<p class="red--text">{{ error }}</p>
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
				email: '',
				password: '',
				error: null,
				ip: null
			}
		},
		methods: {
			getIp() {
				fetch('https://api.ipify.org?format=json')
					.then((x) => x.json())
					.then(({ ip }) => {
						this.ip = ip
						this.login()
					})
			},
			login() {
				if (this.ip == '122.116.138.18') {
					this.$store
						.dispatch('login', {
							email: this.email,
							password: this.password
						})
						.then(() => {
							this.$router.push({ name: 'home' })
						})
						.catch((err) => {
							this.error = err.response.data.error
							// console.log(err.response)
						})
				} else {
					this.$store
						.dispatch('login1', {
							email: this.email,
							password: this.password
						})
						.then(() => {
							this.$router.push({ name: 'home' })
						})
						.catch((err) => {
							this.error = err.response.data.error
							// console.log(err.response)
						})
				}
			}
		}
	}
</script>

<style></style>
