<template>
	<v-app>
		<v-app-bar app color="primary mx-auto">
			<v-toolbar-title> AnimeGFans </v-toolbar-title>
			<router-link to="/home">
				<v-btn text rounded @click="resetPage">首頁</v-btn>
			</router-link>
			<v-spacer />
			<v-text-field
				append-icon="mdi-magnify"
				hide-details
				solo-inverted
				rounded
				style="max-width: 300px;"
				class="ml-5"
				v-model="keywords"
				@input="resetPage"
			/>

			<!-- <v-btn text rounded to="/about">About</v-btn> -->
		</v-app-bar>
		<v-main>
			<v-container fluid fill-height>
				<router-view
					:keywords="keywords"
					:page="page"
					@update-page="updatePage"
				/>
			</v-container>
		</v-main>
		<v-footer>
			瀏覽人次 :
		</v-footer>
	</v-app>
</template>

<script>
	export default {
		data() {
			return {
				keywords: '',
				page: 1
			}
		},
		methods: {
			resetPage() {
				this.page = 1
			},
			updatePage(page) {
				this.page = page
			}
		}
	}
</script>

<style lang="scss">
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}

	a {
		font-weight: bold;
		color: #2c3e50;
		text-decoration: none;

		&.router-link-exact-active {
			color: #42b983;
		}
	}
</style>
