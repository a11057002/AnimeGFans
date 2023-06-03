<template>
	<v-container>
		<v-row align="center">
			<v-col v-for="(src, index) in filterSrcs" v-bind:key="index" md="3" cols="12">
				<router-link :to="'/video/'+src['title']" :v-bind:key="src">
					<v-card>
						<v-card-title align="center" class="d-block">
							{{ src["title"] }}
						</v-card-title>
						<v-img>
						</v-img>
						
					</v-card>
				</router-link>			
			</v-col>
		</v-row>
		
		<!-- <h1 class='white--text' v-if="">
			獲取資料中
		</h1> -->

		<h1 class='white--text' v-if="srcLength==0">
			查無資料
		</h1>
				
		<v-pagination v-else class="mt-2" :value="page" :length=Math.ceil(srcLength/items) @input="savePage">
		</v-pagination>
		

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
				type: Number
			}
		},
		data() {
			return {
				srcs: [],
				filterSrcs: [],
				srcLength: 0,
				show:[],
				ip: null,
				items: 20,
				pageNum : 1,
				timer: null
			}
		},
		async mounted() {
			this.pageNum = this.page
			this.setHeader()
			await this.getData()
			this.search()

		},
		methods: {
			async getData() {						
				return axios.get('https://animeapi.aylu.tw/video').then((res) =>
					res.data.forEach((a) => {
						this.srcs.push({title:a.title,dir:a.dir})
						this.show.push(a.dir)
					})
				).catch(() => {						
					this.$store.dispatch('logOut')
					this.$router.push('/login')
				})				
			},
			savePage(page){
				this.$emit("update-page",page)
			},
			setHeader(){
				if(this.$cookie.get('token') == undefined) this.$router.push("/")
				axios.defaults.headers.common['Authorization'] = this.$cookie.get('token')
				axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
			},
			search() {
				var matches = this.keywords.replace(/([.?*+^$[\]\\(){}|-])/g, '')
				this.filterSrcs = this.srcs
					.filter((res) => res["dir"] == true)
					.filter((res) => res["title"].toUpperCase().match(matches.toUpperCase()))
					.slice((this.page-1) * this.items, this.page * this.items)
				this.srcLength = this.srcs
					.filter((res) => res["dir"] == true)
					.filter((res) => res["title"].toUpperCase().match(matches.toUpperCase())).length
			},
		},		
		watch:{
			keywords(){
				clearTimeout(this.timer); 
				console.log('test')
				this.timer = setTimeout(() => {
					console.log('search')					
					this.search()
				}, 1000); 
			},
			page(){
				this.search()
			}
		}
	}
</script>

<style scoped>
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

	.mt-2{
		margin-top: 2rem !important;
	}
	
</style>
