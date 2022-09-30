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
						'blue--text': m3u8 === src,
						selectedCard: m3u8 === src
					}"
				>
					{{ src.split('.')[0] }}
				</v-card>
			</v-col>
		</v-row>
		<div class="height60" :class="{ 'd-none': !target }">
			<div class="vw-100">
				<video
					id="video"
					src=""
					controls
					autoplay
					controlslist="nodownload"
					oncontextmenu="return false;"
				></video>
			</div>
		</div>

		<div>
			<!-- Comment area -->
		</div>
	</v-container>
</template>

<script>
	import axios from 'axios'
	import Hls from 'hls.js'

	export default {
		props: ['id'],
		data() {
			return {
				srcs: [],
				target: '',
				ip: null,
				m3u8: ''
			}
		},
		mounted() {
			this.setHeader()
			this.getData()
		},
		methods: {
			selectTarget(src) {
				// this.target =
				//   "https://animeapi.aylu.tw/video/" +
				//   this.id +
				//   "/" +
				//   src +
				//   "?token=" +
				//   this.$cookie.get("token");
				this.m3u8 = src
				let dir = src.split('.')[0]
				src = src.replace('mp4', 'm3u8')
				src = src.replace('wmv', 'm3u8')
				this.target =
					'https://testapi.aylu.tw/' + this.id + '/' + dir + '/' + src
				var video = document.getElementById('video')
				if (Hls.isSupported()) {
					var videoSrc = this.target
					var hls = new Hls()
					hls.loadSource(videoSrc)
					hls.attachMedia(video)
					hls.on(Hls.Events.MANIFEST_PARSED, function () {
						video.play()
					})
				} else {
					video.src = this.target
				}
			},
			getData() {
				axios.get('https://animeapi.aylu.tw/video/' + this.id).then((res) =>
					res.data.forEach((a) => {
						this.srcs.push(a.src)
					})
				)
			},
			setHeader() {
				if (this.$cookie.get('token') == undefined) this.$router.push('/')
				axios.defaults.headers.common['Authorization'] =
					this.$cookie.get('token')
				axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
			}
		}
	}
</script>

<style scoped>
	.height60 {
		display: flex;
		height: 70vh;
		justify-content: center;
	}
	video {
		height: 60vh;
		width: 50%;
		outline: none;
	}
	.v-card {
		transition: opacity 0.4s ease-in-out;
	}

	.v-card:not(.on-hover) {
		opacity: 0.4;
	}

	.v-card:hover,
	.selectedCard {
		opacity: 1 !important;
	}
</style>
