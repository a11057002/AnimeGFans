<template>
	<div>
		<v-container>
			<v-row>
				<v-col v-for="(src, index) in srcs" v-bind:key="index" cols="3">
					<router-link :to="src" :v-bind:key="src">
						<v-card>
							{{ src }}
						</v-card>
					</router-link>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		name: 'Home',
		components: {},
		data() {
			return {
				srcs: [],
				ip: null
			}
		},
		mounted() {
			this.getIp()
		},
		methods: {
			getIp() {
				fetch('https://api.ipify.org?format=json')
					.then((x) => x.json())
					.then(({ ip }) => {
						this.ip = ip
						this.getData()
					})
			},
			getData() {
				if (this.ip == '122.116.138.18')
					axios.get('http://192.168.0.15:5567').then((res) =>
						res.data.forEach((a) => {
							this.srcs.push(a.title)
						})
					)
				else
					axios.get('http://122.116.138.18:5567').then((res) =>
						res.data.forEach((a) => {
							this.srcs.push(a.title)
						})
					)
			}
		}
	}
</script>

<style>
	a {
		text-decoration: none;
	}
	.v-card {
		transition: opacity 0.4s ease-in-out;
	}

	.v-card:not(.on-hover) {
		opacity: 0.4;
	}
	.v-card:hover {
		opacity: 1;
	}
</style>
