<template>
	<v-container>
		<form @submit.prevent="createUser">
			<v-row>
				<v-col cols="6">
					<label class="blue--text float-right" for="username">Username:</label>
				</v-col>
				<v-col cols="6">
					<input
						type="text"
						class="white--text blue-grey darken-4 rounded float-left"
						v-model="username"
						name="username"
                        @input="resetError"
                        required
					/>
				</v-col>
				<v-col cols="6">
					<label class="blue--text float-right" for="password">Password:</label>
				</v-col>
				<v-col cols="6">
					<input
						type="password"
						class="white--text blue-grey darken-4 rounded float-left"
						v-model="password"
						name="password"
                        @input="resetError"
                        required
					/>
				</v-col>
				<v-col cols="6">
					<label class="blue--text float-right" for="confirm"
						>Confirm Pasword:</label
					>
				</v-col>
				<v-col cols="6">
					<input
						type="password"
						class="white--text blue-grey darken-4 rounded float-left"
						v-model="confirm"
						name="confirm"
                        @input="resetError"
                        required
					/>
				</v-col>
				<v-col cols="6">
					<label class="blue--text float-right" for="email">Email:</label>
				</v-col>
				<v-col cols="6">
					<input
						type="text"
						class="white--text blue-grey darken-4 rounded float-left"
						v-model="email"
						name="email"
                        @input="resetError"
                        required
					/>
				</v-col>
			</v-row>
			<v-row>
				<v-col cols="12">
					<v-btn type="submit">SignUp</v-btn>
				</v-col>
			</v-row>
			<v-row>
				<v-col class="red--text" cols="12">
					{{ error }}
				</v-col>
			</v-row>
            <v-row>
				<v-col class="green--text" cols="12">
					{{ message }}
				</v-col>
			</v-row>
		</form>
	</v-container>
</template>

<script>
	export default {
		data() {
			return {
				username: '',
				password: '',
				confirm: '',
				email: '',
				error: '',
                message:''
			}
		},
		methods: {
			createUser() {
				if (this.passCorrect === false) {
					this.error = '密碼不一致 請重新輸入!'
					return
				}
				this.$store
					.dispatch('createUser', {
						username: this.username,
						password: this.password,
						email: this.email
					})
					.then((res) => {
						if (res.status == 200) {
                            this.message = '已建立會員... 即將導回首頁'
							setTimeout(()=>this.$router.push({ name: 'home' }),3000)
						}
					})
					.catch((error) => {this.error = error.response.data.message})
			},
            resetError(){
                this.error = ''
            }
		},
		computed: {
			passCorrect() {
				return this.password === this.confirm
			}
		}
	}
</script>

<style></style>
