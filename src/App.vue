<template>
	<v-app >
		<v-app-bar app color="primary">
			<router-link to="/">
			<v-toolbar-title> AnimeGFans </v-toolbar-title>
			</router-link>
			<v-spacer />
			<v-btn text rounded to="/">首頁</v-btn>
			<!-- <v-btn text rounded to="/about">About</v-btn> -->
		</v-app-bar>
		<v-main>
			<router-view />
		</v-main>
		
	</v-app>
</template>

<style lang="scss">
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}

	#nav {
		padding: 30px;

		a {
			font-weight: bold;
			color: #2c3e50;

			&.router-link-exact-active {
				color: #42b983;
			}
		}
	}
</style>
