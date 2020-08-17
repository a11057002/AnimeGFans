<template>
	<v-container fluid>
		<v-row>
			<v-col cols="12" class="white--text text-h4">
				{{ id }}
			</v-col>
			<v-col
				v-for="src in srcs"
				:key="src"
				@click="selectTarget(src)"
				md="2"
				cols="4"
			>
				<v-card
					:class="{
						'white--text': true,
						'blue--text': target === src,
						selectedCard: target === src
					}"
				>
					{{ src.split('/').pop() }}
				</v-card>
			</v-col>
		</v-row>

		<div class="height60">
			<video
				controls
				:src="target"
				autoplay
				v-if="target"
				controlsList="nodownload"
			></video>
		</div>
	</v-container>
</template>

<script>
	import axios from 'axios'
	export default {
		props: ['id'],
		data() {
			return {
				srcs: [],
				target: null,
				ip: null
			}
		},
		mounted() {
			this.getIp()
		},
		methods: {
			selectTarget(src) {
				this.target = src
			},
			getIp() {
				fetch('https://api.ipify.org?format=json')
					.then((x) => x.json())
					.then(({ ip }) => {
						this.ip = ip
						this.getData()
					})
			},
			getData() {
				if (this.ip != '122.116.138.18')
					axios.get('http://122.116.138.18:5567/' + this.id).then((res) =>
						res.data.forEach((a) => {
							this.srcs.push(
								'http://122.116.138.18:5567/' + this.id + '/' + a.src
							)
						})
					)
				else
					axios.get('http://192.168.0.15:5567/' + this.id).then((res) =>
						res.data.forEach((a) => {
							this.srcs.push(
								'http://192.168.0.15:5567/' + this.id + '/' + a.src
							)
						})
					)
			}
		}
	}
</script>

<style>
	.height60 {
		display: flex;
		height: 70vh;
		justify-content: center;
		align-items: center;
	}
	video {
		height: 60vh;
		width: 50%;
	}
</style>
