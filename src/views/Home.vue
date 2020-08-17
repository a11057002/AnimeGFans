<template>
	<v-container>
		<v-row align="center">
			<v-col v-for="(src, index) in search" v-bind:key="index" md="3" cols="12">
				<router-link :to="'/video/'+src" :v-bind:key="src">
					<v-card>
						<v-card-title align="center" class="d-block">
							{{ src }}
						</v-card-title>
						<v-img>
						</v-img>
						
					</v-card>
				</router-link>			
			</v-col>
		</v-row>
		
		<!-- <h1 class='white--text' v-if="search_length==0">
			查無資料
		</h1> -->
		<v-col cols="12">
		<v-pagination v-if="search_length!=0" v-model="page" total-visible="8" :length=Math.ceil(search_length/items)>
		</v-pagination>
		</v-col>

	</v-container>
</template>

<script>
	import axios from 'axios'

	export default {
		name: 'Home',
		components: {},
		props: {
			keywords: {
				type: String
			},
			page:{
				type: Number,
				default: 1
			}
		},
		data() {
			return {
				srcs: [],
				ip: null,
				items: 20
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
			},
			resetPage(){
				this.page = 1
			}
		},
		computed: {
			search() {
				var matches = this.keywords.replace(/([.?*+^$[\]\\(){}|-])/g, '')
				return this.srcs
					.filter((res) => res.toUpperCase().match(matches.toUpperCase()))
					.slice((this.page-1) * this.items, this.page * this.items)
			},
			search_length(){
				var matches = this.keywords.replace(/([.?*+^$[\]\\(){}|-])/g, '')
				return this.srcs
					.filter((res) => res.toUpperCase().match(matches.toUpperCase())).length
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

	.v-card:hover,
	.selectedCard {
		opacity: 1 !important;
	}
	.v-pagination{
		bottom:0
	}
	
</style>
