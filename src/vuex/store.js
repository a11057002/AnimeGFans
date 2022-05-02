import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import cookie from 'vue-cookie'
Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		user: null,
		visits:null
	},
	mutations: {
		SET_USER_DATA(state, data) {
			state.visits = data.visits
			console.log(state.visits)
			cookie.set('token', data.token,{ expires: "24h" })
			delete data['visits']
			delete data['token']
			state.user = data
			localStorage.setItem('user', JSON.stringify(data))
		},
		REMOVE_USER_DATA(state) {
			state.user = null
			cookie.delete('token')
			localStorage.removeItem('user')
		},
		GET_VISITS(state, data) {
			state.visits = data
		}
	},
	actions: {
		login({ commit }, credentials) {
			return axios
				.post('https://animeapi.aylu.tw/login', credentials)
				.then(({ data }) => {					
					commit('SET_USER_DATA', data)
				})
		},
		logOut({ commit }) {
			commit('REMOVE_USER_DATA')
		},
		createUser({ commit }, userData) {
			console.log(commit)
			return axios.post('https://animeapi.aylu.tw/signup', userData)
		}
	},
	getters: {
		loggedIn(state) {
			return !!state.user
		}
	}
})
